# Huddle Master Brand System Audit

Status: **FOUNDER-APPROVED CANONICAL VISUAL IDENTITY**; S0-003 exact binary repository import pending.

## Founder decision

The owner has explicitly decided that the uploaded `Brand_Guidelines.zip` is the canonical source for Huddle visual identity.

This decision covers:

- brand colors;
- wordmark/logotype;
- community mark and icon system;
- visual identity rules;
- typography direction;
- graphic elements;
- photography direction;
- branded digital touchpoints;
- branded marketplace, community, activities, events, services and safety references;
- campaign, social, stationery, apparel, vehicle and environmental branding references.

Where older set50-derived visual values or older visual references conflict with this package, the uploaded master brand package wins for visual identity. Older set50 materials remain historical/reference material only unless explicitly retained for non-conflicting product-system behavior.

Accepted engineering/security/privacy ADRs remain authoritative outside visual-identity scope.

## Audited package

`Brand_Guidelines.zip`

The archive contains:

- a 2-part AI-ready master brand system;
- `Logotype.zip`;
- `Icon.zip`;
- approved reference PNGs;
- layered guideline sources;
- PDF and editable presentation references;
- QA manifests and supplemental editable references.

## Integrity

The SHA-256 of both split master archives matches the included 2-part manifest exactly.

- Part 1: `d1bc9896ff4ebf96e9a1d852a325c9dd13c2e862029c09c6db724c621f48d3d0`
- Part 2: `53ab0c6f087f9434bc7d5ece446d597f63b809ee92234a5adbe9619b997db7ac`

## Package-declared source hierarchy

The package's `SOURCE_OF_TRUTH.json` declares:

1. identity masters;
2. approved visual design reference PNG;
3. editable layered guideline source;
4. exact design tokens;
5. reusable editable vectors.

Identity rules:

- never redraw;
- never AI-recreate;
- never distort.

## S0-003 asset result

All 12 required web PNG assets are present in the owner-supplied nested `Logotype.zip` and `Icon.zip` archives. Exact checksums are recorded in `public/brand/expected-assets.json`.

## Canonical brand palette

The master guideline values below supersede the older set50-derived brand palette for visual identity:

| Token | Canonical value |
|---|---|
| Ivory | `#F6F1EA` |
| Warm Cream | `#EFE7D9` |
| Sand | `#DCCBAE` |
| Sage | `#A2AC95` |
| Deep Forest | `#2F3E34` |
| Copper | `#C47A4A` |
| Charcoal | `#4F4A43` |
| Taupe | `#C8B7A3` |
| Soft White | `#FBF8F3` |

The old brand values `#163A2F`, `#A8BFAE`, `#C6683D`, `#FAF7F2`, `#F1E9D8`, `#D9D5CC`, `#1F1F1F` are superseded for canonical brand identity.

Semantic application colors such as success/warning/error/info are not automatically discarded by this decision; they remain functional UI semantics until S0-004 maps or replaces them explicitly.

## Canonical typography direction

The uploaded master guideline establishes:

- Playfair Display for hero, section and editorial headings;
- Inter for body and functional copy;
- Playfair Display + Inter as the recommended pairing.

Font files are not included in the package. Production implementation must use licensed/approved delivery sources and must not redistribute font binaries from local or system sources.

Until S0-004 completes production font loading, the current system stack may remain only as a temporary runtime fallback, not as canonical brand typography.

## GitHub reconciliation result

The repository already contains a large visual product corpus under `assets/screens/`, including 638 screen/reference assets and set50 design-system references. This is valuable implementation/reference material.

However, exact searches for the master identity filenames (`Huddle_logotype_*`, `Huddle_icon_*`, `Huddle_Brand_Guidelines_*`) did not find those original master files in indexed `main` paths. Therefore:

- existing GitHub visual corpus remains product/reference evidence;
- uploaded master guideline becomes visual-identity authority;
- exact approved identity binaries are imported separately under `public/brand/`;
- duplicate or conflicting older visual rules must not override the master package.

## Completeness caveat

The package's own `FOLDER_MAP.json` reports zero files in several declared top-level folders, including identity masters, design tokens and typography, while the outer archive separately supplies `Logotype.zip` and `Icon.zip` and the QA supplemental area supplies editable color and typography references.

This does not block the Founder decision. It means implementation must use the verified files actually present and record exact provenance/checksums rather than infer missing files from folder names.
