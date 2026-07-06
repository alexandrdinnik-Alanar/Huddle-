#!/usr/bin/env python3
"""Import exact Huddle identity PNGs from the approved Brand_Guidelines.zip.

No image decoding, re-encoding, resizing, recoloring, or metadata rewriting occurs.
Bytes are copied directly from nested source archives after SHA-256 verification.
"""

from __future__ import annotations

import argparse
import hashlib
import io
import json
import sys
import zipfile
from pathlib import Path

EXPECTED: dict[str, dict[str, str]] = {
    "logotype": {
        "Huddle_logotype_copper_transparent_APPROVED.png": "cb7e029940f79b0e68dce375d9948fb48b02633d2358254c5ff4bb96413e23cf",
        "Huddle_logotype_dark_green_transparent.png": "f58198d04c4995bc31752a858c2931fbdb31526b8685aab7f1b35509d5801f56",
        "Huddle_logotype_white_transparent.png": "bfdc7ca4390d4ac709576c8f12d723b708d5de86038e306d377b44ed3c51b6e4",
        "Huddle_logotype_copper_on_deep_green.png": "b15f0888d5c41b80bc171ceb86e96ef96570f8d4e6ec05967b5d77f0281bd6d6",
        "Huddle_logotype_dark_green_on_ivory.png": "3321be74dbeebf9457eb16817c459cedcbaeac0a72e192e9f9815b96ee55f621",
        "Huddle_logotype_white_on_deep_green.png": "3c3cd6c9995049bc851a2ce97179c83b8b7967303e13e6aa0fc5629519c399ac",
    },
    "icon": {
        "Huddle_icon_copper_transparent_SELECTED.png": "d8c6570e6ffe62e3fa7525dbf7e0d26bc874c7f0b74274c8d00265bd5f77c64d",
        "Huddle_icon_black_transparent.png": "76b5553e9eb6e886384057b11099a63ef4e72c5252f94f6cadbdb89c8a295d26",
        "Huddle_icon_white_transparent.png": "b77c46ed441a72f6ea3be5b3b7037e95ebb99ec31741283ed1740de3b1e8ab04",
        "Huddle_icon_copper_on_deep_green.png": "bb5f159e124f10cc65d22b4dd89146b59b214a3adba6e811732530595fe1aeb5",
        "Huddle_icon_dark_green_on_ivory.png": "6087be385c3630eef306161fb83a7cc914b897db89a4be3f23cefc921ee167f2",
        "Huddle_icon_white_on_deep_green.png": "ae820bba3b679fefa6ae6281863469e9929a13479a9404ffb40a5e756d14a1be",
    },
}

NESTED = {
    "logotype": "Brand_Guidelines/Logotype.zip",
    "icon": "Brand_Guidelines/Icon.zip",
}


def sha256(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def member_by_basename(archive: zipfile.ZipFile, filename: str) -> str:
    matches = [
        name
        for name in archive.namelist()
        if not name.endswith("/") and Path(name).name == filename
    ]
    if len(matches) != 1:
        raise RuntimeError(
            f"Expected exactly one {filename!r} in nested archive; found {len(matches)}"
        )
    return matches[0]


def update_manifest(repo_root: Path) -> None:
    manifest_path = repo_root / "public" / "brand" / "expected-assets.json"
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))

    for group in ("logotype", "icon"):
        for record in manifest[group]:
            filename = Path(record["path"]).name
            expected = EXPECTED[group][filename]
            destination = repo_root / "public" / "brand" / group / filename
            actual = sha256(destination.read_bytes())
            if actual != expected:
                raise RuntimeError(
                    f"Repository verification failed for {destination}: {actual} != {expected}"
                )
            record["repoPresent"] = True
            record["sha256"] = expected

    manifest["status"] = "repo_verified"
    manifest_path.write_text(
        json.dumps(manifest, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )


def import_assets(source_zip: Path, repo_root: Path) -> None:
    if not source_zip.is_file():
        raise FileNotFoundError(source_zip)

    with zipfile.ZipFile(source_zip) as outer:
        for group, nested_path in NESTED.items():
            try:
                nested_bytes = outer.read(nested_path)
            except KeyError as exc:
                raise RuntimeError(f"Missing nested archive: {nested_path}") from exc

            with zipfile.ZipFile(io.BytesIO(nested_bytes)) as nested:
                destination_dir = repo_root / "public" / "brand" / group
                destination_dir.mkdir(parents=True, exist_ok=True)

                for filename, expected_hash in EXPECTED[group].items():
                    source_member = member_by_basename(nested, filename)
                    data = nested.read(source_member)
                    actual_hash = sha256(data)
                    if actual_hash != expected_hash:
                        raise RuntimeError(
                            f"Source verification failed for {filename}: "
                            f"{actual_hash} != {expected_hash}"
                        )

                    destination = destination_dir / filename
                    destination.write_bytes(data)
                    if sha256(destination.read_bytes()) != expected_hash:
                        raise RuntimeError(
                            f"Post-write verification failed for {destination}"
                        )
                    print(f"verified {group}/{filename} {expected_hash}")

    update_manifest(repo_root)
    print("Imported and repository-verified 12/12 Huddle identity assets.")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("source_zip", type=Path, help="Path to approved Brand_Guidelines.zip")
    parser.add_argument(
        "--repo-root",
        type=Path,
        default=Path(__file__).resolve().parents[1],
        help="Repository root (defaults to script parent repository)",
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
