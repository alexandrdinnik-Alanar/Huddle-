# BRAND-002 Handoff

## Summary

Repaired the canonical Huddle Family brand integration after BRAND-001:

- aligned physical icon locations, metadata paths, component exports, manifest, and documentation;
- synchronized TypeScript and CSS tokens with the locked six-color palette;
- added accessible semantic text and action derivatives while preserving the locked palette;
- removed legacy dark-green and black variants from new production component exports;
- updated the importer to verify the current Logo Master Package or outer Brand Guidelines archive;
- corrected Git LFS patterns by listing extensions individually;
- updated CI to download LFS objects and verify the canonical manifest schema;
- added asset-presence, manifest-alignment, token-synchronization, and WCAG contrast tests.

The six runtime web assets were imported directly from
`Huddle Brand Guidelines.zip` and verified against their canonical SHA-256 values.

## Changed files

- `.gitattributes`
- `.github/workflows/ci.yml`
- `assets/brand/README.md`
- `docs/00-source-of-truth/brand-system.md`
- `public/brand/README.md`
- `public/brand/expected-assets.json`
- `public/brand/huddle-family-logo.png`
- `public/brand/huddle-family-logo.webp`
- `public/brand/icons/*`
- `scripts/import-brand-assets.py`
- `scripts/verify-brand-assets.py`
- `src/app/globals.css`
- `src/components/huddle/BrandLogo.tsx`
- `src/components/huddle/IconWatermark.tsx`
- `src/components/huddle/brand-assets.ts`
- `src/components/ui/Button.tsx`
- `src/components/ui/Card.tsx`
- `src/lib/design-tokens/css-variables.css`
- `src/lib/design-tokens/tokens.ts`
- `tasks/brand/BRAND-002.md`
- `tests/unit/brand-assets.test.ts`
- `tests/unit/design-tokens.test.ts`

## Schema / migration impact

None.

## API changes

No network API changes. The internal brand component variant keys now expose only
canonical production assets:

- logo: `familyLockupPng`, `familyLockupWebp`, `wordmarkPng`;
- icon: `favicon`, `appleTouch`, `app192`, `app512`.

## Authorization changes

None.

## Tests run and results

- canonical archive importer: passed, 6/6 runtime assets SHA-256 verified;
- canonical repository verifier: passed, 7/7 manifest records verified;
- targeted Prettier check for all changed supported files: passed;
- ESLint: passed;
- TypeScript `tsc --noEmit`: passed;
- Vitest: 7 files passed, 47 tests passed;
- Next.js 16.2 production build with Webpack: passed, 54 routes generated;
- `git diff --check`: passed;
- `git check-attr`: canonical archives and runtime images resolve to the LFS filter.

The repository-wide Prettier check remains red on pre-existing formatting and
line-ending differences across untouched files. BRAND-002 files supported by
Prettier pass a targeted check.

## Known limitations

1. The default Turbopack build panics when the repository is built from the local
   Cyrillic path `OneDrive/Документы`; the supported Webpack production build
   succeeds. This is an environment/compiler path issue, not an application error.
2. Historical files under `public/brand/logotype/` and `public/brand/icon/` remain
   for audit compatibility but are marked reference-only and are no longer exposed
   by production components.
3. The Logo Master Package contains raster masters; no true approved vector master
   was introduced by this task.

## Follow-up risks

- Do not reintroduce historical dark-green or black variants into production exports.
- Keep new normal-size text and button-label combinations on the tested accessible
  semantic tokens rather than raw accent colors.
- CI should run from an ASCII workspace path until the Turbopack Unicode-path panic
  is fixed upstream.

## Exact commit SHA

Implementation commit:
`bb34eea1fe58bce21c102b419d240db69bc3df79`.
