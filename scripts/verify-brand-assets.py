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
    public_root = (repo_root / "public").resolve()
    manifest_path = repo_root / "public" / "brand" / "expected-assets.json"
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    status = manifest.get("status")
    records = manifest.get("assets")
    failures: list[str] = []

    if status != "canonical_verified":
        failures.append(f"status must be canonical_verified, got: {status!r}")

    if not isinstance(records, list) or not records:
        failures.append("manifest assets must be a non-empty list")
        records = []

    seen_paths: set[str] = set()
    seen_roles: set[str] = set()

    for record in records:
        if not isinstance(record, dict):
            failures.append(f"asset record must be an object: {record!r}")
            continue

        role = record.get("role")
        manifest_path_value = record.get("path")
        expected = record.get("sha256")

        if not isinstance(role, str) or not role:
            failures.append(f"asset role must be a non-empty string: {record!r}")
            continue
        if role in seen_roles:
            failures.append(f"duplicate asset role: {role}")
        seen_roles.add(role)

        if not isinstance(manifest_path_value, str) or not manifest_path_value.startswith(
            "/brand/"
        ):
            failures.append(f"asset path must start with /brand/: {manifest_path_value!r}")
            continue
        if manifest_path_value in seen_paths:
            failures.append(f"duplicate asset path: {manifest_path_value}")
        seen_paths.add(manifest_path_value)

        if not isinstance(expected, str) or len(expected) != 64:
            failures.append(f"invalid SHA-256 for {manifest_path_value}: {expected!r}")
            continue

        relative_path = manifest_path_value.lstrip("/")
        path = (public_root / relative_path).resolve()
        if public_root not in path.parents:
            failures.append(f"asset path escapes public directory: {manifest_path_value}")
            continue
        if not path.is_file():
            failures.append(f"missing: {path.relative_to(repo_root)}")
            continue

        actual = sha256(path)
        if actual != expected:
            failures.append(
                f"hash mismatch: {path.relative_to(repo_root)} {actual} != {expected}"
            )

    if failures:
        for failure in failures:
            print(f"ERROR: {failure}", file=sys.stderr)
        return 1

    print(f"brand asset verification passed: status={status}, records={len(records)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

