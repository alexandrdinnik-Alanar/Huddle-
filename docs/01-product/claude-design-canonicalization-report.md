# Claude Design Canonicalization Report

Date: 2026-07-23  
Status: analysis complete; reference corpus only  
Branch: `import/claude-design-corpus-2026-07`  
Pull request: `#29`

## Decision

The Claude Design archive is useful and should remain in the repository as a **REFERENCE** corpus. It must not be copied into production route folders or treated as approved React implementation.

Production authority remains:

1. accepted architecture and product documentation;
2. the approved Huddle Figma master and recorded node IDs;
3. the screen-route registry;
4. merged React implementation;
5. PNG and HTML reference corpora.

## Verified source counts

### Repository route baseline

The current `docs/02-architecture/canonical-route-map.csv` contains **105 route rows**, not 108:

- P0: 46
- P1: 39
- P2: 19
- P3: 1

The archive's `ProjectCoverage.dc.html` repeatedly states 108 routes. The route-count claim is therefore stale or based on an older route-map revision.

### Claude prototype corpus

- HTML files: 315
- unique HTML contents by SHA-256: 234
- exact duplicate HTML files beyond the retained primary copies: 81
- PNG files: 205
- PDF files: 12
- total archive files: 542

The earlier full-archive audit found 114 exact duplicate groups and 138 redundant files across all file types.

### Current production visual approval

The current `screen-route-registry.csv` contains 47 registered route rows:

- `PRODUCTION`: 3 routes
- `UNDECIDED`: 44 routes

The approved routes are:

- `/`
- `/activities`
- `/activities/[activityId]`

All other Claude HTML mockups remain references until their responsive Figma frames are approved and recorded.

## Reconciliation result

The generated route analysis maps the 105 canonical routes to the Claude corpus:

- approved in current Figma: 3
- Claude candidate present but Figma approval required: 92
- no matched Claude route candidate: 10

The remaining design gaps are:

- `/cities/[citySlug]`
- `/cities/[citySlug]/activities`
- `/cities/[citySlug]/events`
- `/cities/[citySlug]/marketplace`
- `/cities/[citySlug]/services`
- `/app/seller/payouts`
- `/app/expert`
- `/app/expert/profile`
- `/app/expert/services`
- `/app/expert/availability`

The mapping combines two evidence levels:

- `EXPLICIT_PROJECT_COVERAGE`: the archive explicitly names a mockup for a route;
- `FILENAME_AND_CONTENT_INFERENCE`: a candidate was mapped from its filename and page purpose. These inferred mappings require human/Figma confirmation.

## Internal inconsistencies found

### 1. Route count mismatch

`ProjectCoverage.dc.html` says 108 canonical routes, while the current canonical CSV contains 105 route rows.

### 2. Coverage is not production readiness

After expanding grouped rows to the current route map, the archive's coverage claims resolve to:

- done: 73
- partial: 18
- missing: 14

However, `SiteAudit.dc.html` says only three pages use the new premium design standard and approximately 130 pages still use the older visual language. A route-level mockup claim therefore means only that a reference exists; it does not mean the route is production-ready.

### 3. The coverage page is stale

The following routes are marked missing in `ProjectCoverage.dc.html`, but matching candidate files are present in the uploaded archive:

- `/family-guides/[stage]` → `FamilyGuideDetail`
- `/seasonal-guides/[slug]` → `SeasonalGuideDetail`
- `/app/calendar` → `Calendar`
- `/app/wallet` → `Wallet`

These candidates still require quality review and Figma approval.

### 4. Brand-token conflict remains unresolved

The Claude handoff recommends Newsreader, Hanken Grotesk and a refined warm palette. The existing locked repository brand documentation uses a different type and color baseline. No implementation task should resolve this silently. The founder-approved choice must be updated in the Figma master and `brand-system.md`.

## Oslo pilot recommendation

The route analysis marks 27 routes as `OSLO_WAVE_1_CANDIDATE` and 10 routes as `OSLO_WAVE_2_CANDIDATE`.

Wave 1 centers on:

- public home and activity discovery;
- activity detail;
- authentication and family onboarding;
- parent app shell, search, saved items and calendar;
- organizer activity publishing, registrations and check-in;
- safety, privacy and community rules.

This is a proposed prioritization, not a change to the canonical route priorities.

## Required workflow

For every route selected for implementation:

1. review matched Claude HTML and related PNG source sets;
2. choose the useful interaction and content patterns;
3. rebuild the complete responsive route in the canonical Figma master;
4. obtain product-owner approval;
5. record exact Figma page and node IDs in `screen-route-registry.csv`;
6. create one scoped Codex task;
7. implement one task per branch and PR;
8. run accessibility, responsive and visual-regression gates.

## Inventory files

The analysis produced:

- `claude-prototype-inventory.csv` — one row for each of the 315 HTML files, including duplicate groups, candidate routes, mapping basis, quality status and semantic checks;
- `claude-route-canonicalization.csv` — one row for each of the 105 current canonical routes, joining route priority, PNG source sets, Claude candidates, Figma status, React status, discrepancies and next action.

These CSV files are generated analysis outputs and must be placed under `docs/01-product/` before the PR is merged.

The execution plan is stored at:

- `docs/05-execution/claude-design-codex-task-pack.md`

## Merge recommendation

PR #29 may be merged only as a reference/archive ingestion after:

- both CSV inventory outputs are present under `docs/01-product/`;
- the generated inventories are reviewed;
- the original ZIP remains isolated under `assets/reference/`;
- no source file is moved into `src/` or canonical `assets/screens/`;
- the PR description continues to state that the corpus is non-production;
- Git LFS and repository quota remain healthy.

Merging the reference corpus does **not** approve any route for production implementation.
