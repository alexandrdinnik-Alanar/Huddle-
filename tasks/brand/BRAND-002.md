# BRAND-002 — Repair canonical brand integration

## Objective

Remove the inconsistencies left after BRAND-001 so the repository has one
canonical, accessible Huddle Family production brand contract.

## Scope

1. Align Next.js metadata paths with the physical icon directory.
2. Synchronize TypeScript and CSS design tokens with the locked palette.
3. Add accessible semantic text and action tokens without changing the locked palette.
4. Replace legacy production asset exports and tests with the canonical Huddle Family set.
5. Make the asset manifest and importer verify the current Logo Master Package.
6. Correct Git LFS extension patterns.

## Acceptance criteria

- Metadata logo/icon paths resolve to files under `public/brand/`.
- TypeScript and CSS expose the same locked palette.
- Normal text and inverse action-label pairings meet WCAG AA contrast of 4.5:1.
- New production code exposes no dark-green or black brand variants.
- Canonical asset hashes are verified by tests and the importer.
- Formatting, lint, typecheck, unit tests, and production build pass.
