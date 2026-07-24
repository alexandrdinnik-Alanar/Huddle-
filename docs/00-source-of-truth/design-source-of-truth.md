# Huddle Design Source of Truth

Status: corrected baseline — complete reference corpus exists; no approved editable production design exists in Figma

## Current reality

Huddle already has a broad, coherent design corpus for the full platform. It must not be reduced to the newest archive or replaced by an unrelated art direction.

The verified source universe includes:

- 315 HTML prototype records;
- 234 unique HTML contents after exact deduplication;
- 205 PNG files;
- 12 PDF files;
- 542 total files in the earlier Claude archive;
- 105 canonical routes;
- 286 prototype records already mapped to route candidates;
- a supplemental `Site.zip` package containing 100 numbered platform screens.

The supplemental package is a delta source, not a replacement corpus. First-pass reconciliation found 19 exact image overlaps, 24 existing-route visual variants, 52 new states on existing routes, one previously uncovered canonical route candidate, two component references, and six route candidates requiring product-owner decisions.

## Established visual direction

The combined corpus establishes the working Huddle identity:

- warm cream and off-white surfaces;
- dark forest-green navigation and primary actions;
- copper/orange Huddle accents;
- natural family and community photography;
- restrained rounded geometry;
- thin neutral borders and low-elevation surfaces;
- compact structured product layouts;
- consistent public, family, organizer, partner, municipality, community, service, payment and administrative patterns.

This direction must be professionally normalized and reconstructed. It must not be replaced by generic SaaS styling or unrelated design experiments.

PRs #34 and #35 are superseded visual explorations and are not design authority.

## Current production authority

No route currently has approved editable production design in Figma.

The file key `dyT1r12QkL7yF0ynjqCs4E` and previously recorded page names or node IDs must not be treated as evidence of completed production design.

Therefore:

- no route currently has `PRODUCTION` design status;
- no Figma node ID currently authorizes React visual implementation;
- the combined HTML, PNG and PDF corpus is the authoritative design reference direction;
- the locked repository brand assets and rules remain authoritative;
- the reference system must be reconciled, normalized, reconstructed and approved before implementation.

## Production visual authority

A Figma file becomes production visual authority only after:

1. the complete design corpus has been reconciled;
2. conflicting variants and route decisions are recorded;
3. the product owner designates the Figma file as canonical;
4. foundations and reusable components are editable and governed;
5. relevant responsive frames are complete;
6. the product owner explicitly approves the frames;
7. exact page names and node IDs are recorded in `docs/01-product/screen-route-registry.csv`;
8. approved registry rows are changed from `UNDECIDED` to `PRODUCTION`.

Until then, code may validate responsive components and patterns in an isolated Design Lab or Storybook, but it must preserve the established corpus style and must not claim production approval.

## Status vocabulary

- `PRODUCTION`: explicitly approved in the canonical Figma file and safe to implement after the applicable task gate permits it.
- `UNDECIDED`: no approved Figma frame exists.
- `REFERENCE`: useful source that establishes product, UX or visual direction but is not directly implementation-authoritative.
- `EXACT_OVERLAP`: byte-identical source retained for traceability without inflating screen counts.
- `VISUAL_VARIANT`: another rendering of an existing route or pattern requiring consolidation.
- `NEW_STATE`: additional state of an existing canonical route.
- `ROUTE_CANDIDATE`: source evidence for a route not yet accepted into the canonical route map.
- `ARCHIVE`: superseded source retained for history; never use for new work.

Implementation status remains separate:

- `IMPLEMENTED`: production UI matches approved Figma frames and has passed review.
- `PLACEHOLDER`: route exists but displays a technical foundation placeholder.
- `NOT_STARTED`: no route entry exists yet.
- `N/A`: source material rather than an application route.

## Mandatory workflow

1. Preserve the existing 315-row prototype inventory and 105-route canonical map.
2. Reconcile supplemental sources as deltas instead of restarting the audit.
3. Identify exact overlaps, variants, new states, component references, route gaps and route candidates.
4. Resolve route and visual inconsistencies with the product owner.
5. Extract one governed token and component system from the complete corpus.
6. Validate representative responsive components and shells in VS Code/Storybook without changing the established style.
7. Reconstruct approved editable components and frames in the canonical Figma file.
8. Record exact Figma node IDs and approval.
9. Implement approved frames in React.
10. Verify responsiveness, accessibility and visual parity before marking them `IMPLEMENTED`.

No contributor may generate a production page from an isolated screenshot, prose prompt, empty Figma draft or unrelated coded art direction.

## Current design task

`VIS-002 — Reconcile and productionize the complete Huddle design corpus`

VIS-002 must:

- preserve the completed Claude inventory and route canonicalization;
- reconcile all 100 supplemental screens;
- surface route decisions rather than making them silently;
- derive the shared design system from the complete platform corpus;
- validate representative responsive patterns in code;
- establish editable governed Figma components and approved frames;
- record stable node IDs and approval.

`S0-015 — Create base layouts` remains blocked until VIS-002 is approved and merged.

## Supporting registers

- `docs/01-product/claude-prototype-inventory.csv` preserves the 315 HTML prototype records.
- `docs/01-product/claude-route-canonicalization.csv` preserves the 105-route reconciliation baseline.
- `docs/execution/VIS-002/CORPUS-RECONCILIATION.md` records the supplemental delta result.
- `docs/01-product/design-source-inventory.csv` classifies visual sources.
- `docs/01-product/screen-route-registry.csv` records future Figma approval and React state.
- `docs/02-architecture/canonical-route-map.csv` remains authoritative for accepted route ownership and priority.
- `docs/00-source-of-truth/brand-system.md` remains authoritative for approved brand assets and rules.