# Blocker — S0-003 Approved Brand Assets

Status: OPEN

Tracking: GitHub issue `#6`

## Why work is blocked

S0-003 requires exact approved Huddle wordmark and icon binaries. Repository audit and source archive inspection found no approved files matching the required asset contract.

The only logo-related visual in the audited corpus is the set50/510 logo-usage board. Under accepted `ADR-009`, that board is canonical for usage rules and supplied lockup geometry, but it does not authorize extraction, tracing, recreation or generation of source assets.

## Impact

- S0-003 cannot meet acceptance criteria.
- `BrandLogo` and `IconWatermark` must not be implemented against fake or missing assets.
- S0-004 remains dependency-blocked because the implementation roadmap declares `S0-004` dependent on `S0-003`.

## Missing asset contract

See:

- `tasks/phase-0/S0-003.md`
- `public/brand/expected-assets.json`

## Unblock evidence required

- exact approved binary assets supplied;
- original filenames preserved on first import;
- SHA-256 recorded for every binary;
- owner visual review complete;
- component implementation references manifest-backed variants only.

## Forbidden workaround

No cropping from reference boards, tracing, AI generation, typed wordmark substitution, SVG recreation or CSS recoloring.
