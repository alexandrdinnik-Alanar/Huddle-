#!/usr/bin/env python3
"""Verify manifest-backed Huddle identity assets without image re-encoding."""

from __future__ import annotations

import hashlib
import json
import sys
from pathlib import Path


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def main() -> int:
    repo_root = Path(__file__).resolve().parents[1]
    manifest_path = repo_root / "public" / "brand" / "expected-assets.json"
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    status = manifest.get("status")

    records = [*manifest["logotype"], *manifest["icon"]]
    failures: list[str] = []

    for record in records:
        relative_path = record["path"].lstrip("/")
        path = repo_root / "public" / relative_path
        expected = record["sha256"]
        repo_present = bool(record.get("repoPresent"))

        if repo_present:
            if not path.is_file():
                failures.append(f"missing: {path.relative_to(repo_root)}")
                continue
            actual = sha256(path)
            if actual != expected:
                failures.append(
                    f"hash mismatch: {path.relative_to(repo_root)} {actual} != {expected}"
                )
        elif path.exists():
            failures.append(
                f"manifest says repoPresent=false but file exists: {path.relative_to(repo_root)}"
            )

    if status == "repo_verified" and not all(
        bool(record.get("repoPresent")) for record in records
    ):
        failures.append("status=repo_verified requires repoPresent=true for all assets")

    if status != "repo_verified" and any(
        bool(record.get("repoPresent")) for record in records
    ):
        failures.append("pending manifest cannot contain repoPresent=true records")

    if failures:
        for failure in failures:
            print(f"ERROR: {failure}", file=sys.stderr)
        return 1

    print(f"brand asset verification passed: status={status}, records={len(records)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

