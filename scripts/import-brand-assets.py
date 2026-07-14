#!/usr/bin/env python3
"""Import exact canonical Huddle Family web assets without image re-encoding."""

from __future__ import annotations

import argparse
import hashlib
import io
import json
import sys
import zipfile
from pathlib import Path

MASTER_ARCHIVE = "Huddle_Family_Logo_Master_Package_FULL.zip"
WEB_ASSET_DIRECTORY = "06_Web_Assets"

EXPECTED: dict[str, tuple[str, str]] = {
    "huddle-family-logo.png": (
        "huddle-family-logo.png",
        "8b7705a30e08b335b8d5c836b463e2441e46d5829e589dca1194f79398dda82c",
    ),
    "huddle-family-logo.webp": (
        "huddle-family-logo.webp",
        "1f3720e669e61e345e39cbd06f8fe23314bdf32a24a1db4625ea324889a22e0a",
    ),
    "favicon.ico": (
        "icons/favicon.ico",
        "6ee54123392b898c1c1463f8f7a8b51454f08b71ea0c54330af01c6adb58145f",
    ),
    "apple-touch-icon.png": (
        "icons/apple-touch-icon.png",
        "09533a33a2b89efa440313f2587344f61571805c3597d5450142810666660c8d",
    ),
    "icon-192.png": (
        "icons/icon-192.png",
        "f503bd57bdb0acef97c65980f596a20dcd1448c63502971514053f374833554a",
    ),
    "icon-512.png": (
        "icons/icon-512.png",
        "25dd857477b7f2482de5787366c35c3eb1ac218c4c159487847f73a06de60444",
    ),
}


def sha256(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def find_member(archive: zipfile.ZipFile, suffix: str) -> str:
    matches = [
        name
        for name in archive.namelist()
        if not name.endswith("/") and name.replace("\\", "/").endswith(suffix)
    ]
    if len(matches) != 1:
        raise RuntimeError(f"Expected exactly one {suffix!r}; found {len(matches)}")
    return matches[0]


def open_master_archive(source_zip: Path) -> tuple[zipfile.ZipFile, io.BytesIO | None]:
    outer = zipfile.ZipFile(source_zip)
    if any(f"/{WEB_ASSET_DIRECTORY}/" in f"/{name}" for name in outer.namelist()):
        return outer, None

    nested_name = find_member(outer, MASTER_ARCHIVE)
    nested_bytes = io.BytesIO(outer.read(nested_name))
    outer.close()
    return zipfile.ZipFile(nested_bytes), nested_bytes


def verify_manifest(repo_root: Path) -> None:
    manifest_path = repo_root / "public" / "brand" / "expected-assets.json"
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))

    for record in manifest["assets"]:
        destination = repo_root / "public" / record["path"].lstrip("/")
        actual = sha256(destination.read_bytes())
        if actual != record["sha256"]:
            raise RuntimeError(
                f"Repository verification failed for {destination}: "
                f"{actual} != {record['sha256']}"
            )


def import_assets(source_zip: Path, repo_root: Path) -> None:
    if not source_zip.is_file():
        raise FileNotFoundError(source_zip)

    master, buffer = open_master_archive(source_zip)
    try:
        brand_root = repo_root / "public" / "brand"
        for filename, (relative_destination, expected_hash) in EXPECTED.items():
            source_member = find_member(master, f"/{WEB_ASSET_DIRECTORY}/{filename}")
            data = master.read(source_member)
            actual_hash = sha256(data)
            if actual_hash != expected_hash:
                raise RuntimeError(
                    f"Source verification failed for {filename}: "
                    f"{actual_hash} != {expected_hash}"
                )

            destination = brand_root / relative_destination
            destination.parent.mkdir(parents=True, exist_ok=True)
            destination.write_bytes(data)
            print(f"verified {destination.relative_to(repo_root)} {expected_hash}")
    finally:
        master.close()
        if buffer is not None:
            buffer.close()

    verify_manifest(repo_root)
    print("Imported and repository-verified 6/6 canonical Huddle Family web assets.")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "source_zip",
        type=Path,
        help="Path to the Logo Master Package or the outer Huddle Brand Guidelines archive",
    )
    parser.add_argument(
        "--repo-root",
        type=Path,
        default=Path(__file__).resolve().parents[1],
        help="Repository root (defaults to the script parent repository)",
    )
    args = parser.parse_args()

    try:
        import_assets(args.source_zip.resolve(), args.repo_root.resolve())
    except Exception as exc:  # noqa: BLE001 - CLI must fail closed with a clear message
        print(f"ERROR: {exc}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
