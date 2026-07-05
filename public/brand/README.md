# Huddle Brand Assets

Status: **S0-003 blocked — approved binaries are not present.**

Tracking issue: `#6`.

## Directory contract

```text
public/brand/
├── README.md
├── expected-assets.json
├── logotype/
└── icon/
```

The `logotype/` and `icon/` folders must contain only owner-supplied approved assets. They are intentionally not populated with substitutes.

## Import rules

1. Preserve original bytes and filenames on initial import.
2. Compute SHA-256 before component use.
3. Update `expected-assets.json` with verified checksum and `present: true`.
4. Review the imported assets against the approved source.
5. Components may reference only manifest-approved assets.

## Forbidden

- cropping from set50/510 reference board;
- redrawing or tracing;
- AI-generated replacement;
- typed text used as logo;
- CSS filters for recoloring;
- invented variants.

Set50/510 is a usage and geometry reference under `ADR-009`; it is not a replacement for source binaries.
