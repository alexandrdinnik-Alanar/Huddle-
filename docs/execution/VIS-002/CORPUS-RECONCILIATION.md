# VIS-002 Complete Design Corpus Reconciliation — Delta Report

Date: 2026-07-24  
Status: first-pass delta reconciliation complete; product-owner route decisions pending

## Scope

This report continues from the existing Claude corpus baseline and does not restart the old audit.

Existing baseline:

- 315 HTML prototype records;
- 234 unique HTML contents after exact deduplication;
- 205 PNG files;
- 12 PDF files;
- 542 total files;
- 105 canonical routes;
- 286 route-screen/state records already mapped to route candidates.

Supplemental source:

- `Site.zip`;
- 100 numbered screens across 10 sets;
- no exact duplicates inside the supplemental package.

## Delta reconciliation result

- exact image overlaps with the prior corpus: **19**;
- existing-route visual variants: **24**;
- new states on existing routes: **52**;
- known canonical design gaps filled: **1**;
- route-embedded component references: **2**;
- screens classified as new-route-only evidence: **2**;
- distinct supplemental route candidates requiring product-owner decisions: **6**.

The 100 supplemental screens therefore must not be added arithmetically to the 315 HTML records as “415 pages.” They are a mixed delta of overlaps, variants, states, components and route candidates.

## Exact overlap evidence

The SHA-256 comparison confirms that all ten public screens in set 1 already exist in the earlier Claude archive. Exact overlap also exists for selected family screens, including parent dashboard, saved content, listing creation, marketplace conversation, matching preferences, match detail and user profile.

Exact matches remain in the inventory for traceability but do not create new canonical screens.

## Canonical gap filled

`SITE-059 — Payments and payouts overview` supplies the first direct visual candidate for the existing canonical route `/app/seller/payouts`, which the prior canonicalization report listed as a design gap. It requires validation and approval before production status.

## New route candidates

The following routes are not present in the current 105-route map and require explicit product-owner decisions:

- `/app/resources`
- `/community`
- `/municipalities`
- `/organizers`
- `/organizers/[organizerId]`
- `/partners`

These are candidates only. They must not be added silently. Some may become dedicated routes; others may be absorbed into existing marketing or app surfaces.

## Established visual direction

The supplemental package confirms the same platform language already visible in the wider source corpus:

- warm cream and off-white surfaces;
- dark forest-green navigation and primary actions;
- copper/orange Huddle accents;
- natural family and community photography;
- restrained radii and low-elevation panels;
- thin neutral borders;
- compact product layouts;
- consistent public, family, organizer, partner and municipality navigation patterns.

No alternative A/B/C art direction is part of the canonical corpus.

## Required next work

1. Product owner reviews the six proposed route additions.
2. Review P0 reconciliation rows: new routes and `/app/seller/payouts`.
3. Resolve state consolidation for community, messaging, events, wallet and settings.
4. Extract one governed component inventory from the combined HTML and PNG sources.
5. Reconstruct representative responsive shells and components in VS Code/Storybook without changing the established style.
6. Move approved reconstructed components and frames into the canonical Figma governance file.

## Generated working files

The first-pass working inventory contains all 100 supplemental screens with source filename, inferred screen name, product area, role, route candidate, overlap evidence, matched Claude screen candidates, reconciliation class and SHA-256 traceability.

The consolidated coverage map contains the 105 current canonical routes plus six supplemental route candidates, with counts for exact overlaps, visual variants, new states, gap fills and component references.