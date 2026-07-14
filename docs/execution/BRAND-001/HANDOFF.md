# BRAND-001 Handoff

## Summary

Adopted the approved Huddle Family visual foundation in repository code and documentation.

The canonical palette is now:

- Warm Cream `#F6F0E8`
- Sand Beige `#E8D9C9`
- Copper Clay `#C98A5C`
- Soft Olive `#8A9076`
- Graphite Taupe `#7C6D63`
- White `#FFFFFF`

Deep green was removed from canonical design-token values. A deprecated compatibility alias maps legacy `--color-brand-green` references to Soft Olive until callers are migrated.

The Huddle Family name, domain, metadata, logo paths, and retired `Closer by Design` rule are documented as canonical.

## Changed files

- `tasks/brand/BRAND-001.md`
- `src/lib/design-tokens/css-variables.css`
- `src/app/globals.css`
- `src/app/layout.tsx`
- `docs/00-source-of-truth/brand-system.md`
- `assets/brand/README.md`
- `docs/execution/BRAND-001/HANDOFF.md`

## Schema / migration impact

None.

## API changes

None.

## Authorization changes

None.

## Tests run and results

Not run in this connector environment. The repository could not be cloned because outbound network access from the execution container was unavailable. Changes were applied through the GitHub connector.

Required before merge:

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Known limitations

1. The uploaded complete Brand Guidelines bundle is approximately 466 MB and contains nested archive files above GitHub's 100 MB per-file limit.
2. The approved Logo Master Package archive is approximately 36 MB, but this GitHub connector does not expose a direct local-binary upload action. Binary files therefore were not committed during this pass.
3. `src/app/layout.tsx` now points to the canonical future runtime paths under `public/brand/`. These assets must be uploaded before the branch is merged to avoid missing metadata images/icons.
4. True SVG/EPS master vectors are not present in the approved package; existing masters are high-resolution raster assets.

## Follow-up risks

- Do not merge until the approved runtime logo/icon files exist under `public/brand/`.
- Do not commit the 466 MB wrapper archive directly. Either configure Git LFS or commit the canonical PDF and subpackages individually.
- Verify no remaining direct hex values or old deep-green assets exist in later runtime files as implementation expands.

## Exact commit SHA

The branch contains multiple connector-created commits. Use the pull request head SHA after the final commit.
