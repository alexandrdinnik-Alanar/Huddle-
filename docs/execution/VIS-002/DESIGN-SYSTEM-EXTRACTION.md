# VIS-002 — Complete Corpus Design-System Extraction Audit

Status: observed-system audit; no production token or component is approved by this document alone.

## Scope and method

This audit continues from the existing canonicalization baseline. It does not restart the screen inventory.

- 315 prototype source records retained for traceability;
- 234 SHA-deduplicated HTML content groups analyzed once each;
- the supplemental 100-screen `Site.zip` delta remains mapped by the separate reconciliation register;
- locked repository brand tokens are compared against observed prototype values;
- exact frequency is evidence of repeated use, not automatic approval.

## Core finding

The prototype corpus contains a coherent recurring UI language, but it also contains legacy alternatives and a source-of-truth conflict between the locked brand rules and repeated dark-surface evidence. The next design-system step must therefore **normalize the existing system**, not copy every observed value and not invent a replacement style.

## Typography observed

Google Font families by deduplicated file coverage: Hanken Grotesk (232 files), Newsreader (229 files), Gloock (1 file), Familjen Grotesk (1 file), Spectral (1 file), Playfair Display (1 file), Inter Tight (1 file).

The dominant recurring pairing is Hanken Grotesk for interface/body content and Newsreader for editorial/display content. Isolated alternatives remain reference-only until explicit approval.

## Most repeated colors

- `#FFFFFF` — 227 files / 1359 uses — `LOCKED_BRAND`
- `#3A342C` — 201 files / 855 uses — `GOVERNANCE_REVIEW_DARK_NEUTRAL`
- `#DBC9B0` — 198 files / 791 uses — `OBSERVED_CANDIDATE`
- `#BC7A45` — 197 files / 745 uses — `OBSERVED_CANDIDATE`
- `#463F37` — 224 files / 692 uses — `OBSERVED_CANDIDATE`
- `#9E5A2C` — 160 files / 667 uses — `OBSERVED_CANDIDATE`
- `#8A7C6C` — 201 files / 597 uses — `OBSERVED_CANDIDATE`
- `#F6F0E8` — 228 files / 550 uses — `LOCKED_BRAND`
- `#7C7062` — 176 files / 530 uses — `OBSERVED_CANDIDATE`
- `#EFE4D4` — 211 files / 498 uses — `OBSERVED_CANDIDATE`
- `#6E7459` — 153 files / 420 uses — `OBSERVED_CANDIDATE`
- `#A99B89` — 116 files / 272 uses — `OBSERVED_CANDIDATE`
- `#EAEBE1` — 79 files / 149 uses — `OBSERVED_CANDIDATE`
- `#A9663A` — 107 files / 137 uses — `OBSERVED_CANDIDATE`
- `#F2E6D6` — 76 files / 135 uses — `OBSERVED_CANDIDATE`
- `rgba(150,110,70,.06)` — 64 files / 113 uses — `OBSERVED_CANDIDATE`
- `#9BA184` — 72 files / 95 uses — `OBSERVED_CANDIDATE`
- `rgba(188,122,69,.28)` — 84 files / 85 uses — `OBSERVED_CANDIDATE`

## Brand-governance conflict

The locked brand source states that black and deep-green values must not be added as visual brand colors and that large dark surfaces should be avoided. Some prototype shells and the supplemental PNG set use dark brown and dark olive/deep-green surfaces. Quantized PNG evidence places a repeated dark olive family near `#203020`–`#304030` across 54–77 supplemental screens.

These values are recorded as observed evidence, but cannot become canonical tokens until the product owner resolves whether they are:

1. superseded legacy variants;
2. limited functional workspace exceptions; or
3. an intended change to the locked brand rules.

No automatic palette rewrite is made in this audit.

## Explicit shared prototype imports

- `Icon` — 153 unique files, 433 imports
- `AppHeader` — 148 unique files, 148 imports
- `SiteFooter` — 122 unique files, 122 imports
- `DashboardSidebar` — 63 unique files, 63 imports
- `Footer` — 53 unique files, 53 imports
- `SiteHeader` — 31 unique files, 31 imports
- `AdminSidebar` — 31 unique files, 31 imports
- `PartnerSidebar` — 7 unique files, 7 imports
- `Header` — 1 unique file, 1 import

These imports are the strongest evidence for the first reusable component families. They should be reconstructed before route-specific screens.

## Dominant geometry and layout evidence

- radius values are concentrated around `12px`, `14px`, `16px`, `18px`, `20px`, `22px`, and `24px`;
- common gaps are `8px`, `10px`, `12px`, `14px`, `16px`, and `20px`;
- `1280px` appears as the leading workspace container candidate in 62 files;
- repeated low elevation is `0 8px 20px rgba(150,110,70,.06)`;
- repeated medium elevation is `0 12px 30px rgba(150,110,70,.08)`;
- primary-action elevation often uses warm copper shadows and requires restraint review.

These are candidate families, not a recommendation to preserve every intermediate value.

## Responsive and accessibility findings

- viewport meta present: 233 / 234 files;
- explicit media queries: 14 / 234 files;
- fixed 1200/1280 references: 63 / 234 files;
- images: 113 total, 0 missing `alt`;
- native form controls: 0 controls versus 9 label elements; most form-looking UI is prototype pseudo-markup rather than semantic HTML;
- files with any ARIA attribute: 2 / 234.

This confirms that the HTML corpus is a visual/UX reference system, not production-ready responsive or accessible code. Responsive behavior and semantic markup must be reconstructed rather than copied.

The only repeated explicit media-query condition is `prefers-reduced-motion: reduce`, present in 14 files. Desktop, tablet, and mobile behavior must therefore be designed and validated during reconstruction.

## Proposed system layers for reconstruction

### Foundation

- locked brand palette plus approved semantic functional derivatives;
- source-derived Hanken Grotesk + Newsreader candidate pairing;
- normalized spacing, radius, border, elevation, icon and motion scales;
- explicit desktop, tablet and mobile rules;
- semantic focus, disabled, error, warning, success and information states.

### Shared shells

- Public header/footer;
- Auth shell;
- Family/app header and navigation;
- Organizer/partner workspace shell;
- Municipality shell;
- Admin sidebar/header;
- mobile navigation patterns.

### Shared components

- buttons and text links;
- inputs, selects, textareas, search and filters;
- cards for activities, events, listings, services, families and resources;
- status chips and badges;
- tables, list rows and pagination;
- dialogs, drawers, notices and confirmations;
- media, map, calendar and upload patterns;
- empty, loading, error, success and permission states.

## Required product-owner decisions before token approval

1. Resolve the dark/deep-green shell conflict with the locked brand system.
2. Approve the source-derived Hanken Grotesk + Newsreader pairing.
3. Approve whether public pages and authenticated workspaces share one surface scale or use controlled contextual variants.
4. Confirm the six route candidates from the `Site.zip` reconciliation.
5. Confirm which shadow/elevation family is canonical; multiple legacy families are present.
6. Confirm whether repeated copper values normalize to locked `#C98A5C` / accessible `#9B5C38` or require an additional approved functional step.

## Next execution step

Create a coded, non-production **System Lab** that displays the extracted foundation and shared component families in the established Huddle style. It must use named candidate tokens, show conflicts explicitly, cover desktop/mobile states, and remain blocked from production status until product-owner review and Figma governance are complete.
