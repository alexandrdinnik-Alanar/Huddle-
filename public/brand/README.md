# Huddle production brand assets

Status: **canonical and repository verified**.

## Production contract

```text
public/brand/
├── expected-assets.json
├── huddle-family-logo.png
├── huddle-family-logo.webp
├── icons/
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── icon-192.png
│   └── icon-512.png
└── logotype/
    └── Huddle_logotype_copper_transparent_APPROVED.png
```

Only paths exported by `src/components/huddle/brand-assets.ts` are canonical for
new production UI. Other files under the historical `logotype/` and `icon/`
directories remain reference-only and must not be introduced into new UI.

## Import rules

1. Import from `Huddle_Family_Logo_Master_Package_FULL.zip` or the outer approved
   Huddle Brand Guidelines archive.
2. Preserve original bytes and filenames.
3. Verify SHA-256 against `expected-assets.json` before component use.
4. Never redraw, trace, recolor, regenerate, crop, or distort an approved mark.

Run `scripts/import-brand-assets.py` to perform a fail-closed import and checksum
verification of the six canonical web exports.
