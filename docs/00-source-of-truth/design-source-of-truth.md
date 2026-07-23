# Huddle Design Source of Truth

Status: corrected baseline — no approved production design currently exists

## Current reality

Huddle has not yet created or approved a production UI in Figma or code.

The file key `dyT1r12QkL7yF0ynjqCs4E` and the previously recorded page names and node IDs must not be treated as evidence of completed design work. Any existing Figma file or page is an empty or unverified draft until the product owner explicitly approves it and the approved frames are recorded in the repository.

Therefore:

- no route currently has `PRODUCTION` design status;
- no Figma node ID currently authorizes React implementation;
- coded Design Lab concepts are experimental review artifacts only;
- all repository PNG sets and the Claude Design corpus are reference inputs only;
- the locked repository brand system remains authoritative for logo assets, palette, accessible semantic tokens, and brand rules;
- S0-015 production layouts remain blocked until VIS-002 is fully approved.

## Approved design-development model

Huddle uses a **VS Code-first, Figma-governed** workflow.

VS Code is used to explore art direction in a real responsive browser environment. Figma remains the governance and approval layer before production implementation.

This distinction is mandatory:

- **coded concept:** experimental composition used to compare design directions;
- **approved design:** product-owner-approved system and frames recorded in the canonical Figma file;
- **production implementation:** React UI created under an implementation task after approval.

A coded concept does not become production UI merely because it compiles or looks complete.

## Design Lab authority

The isolated `/design-lab` route may contain:

- competing art-direction concepts;
- fictional demonstration content;
- scoped experimental styling;
- responsive and motion prototypes;
- component-shape studies.

The Design Lab must:

- remain `noindex`;
- remain outside production navigation;
- avoid production data, authentication and APIs;
- avoid modifying public, auth, app or admin production routes;
- identify fictional content;
- support keyboard focus, mobile layouts and reduced motion;
- never be recorded as `IMPLEMENTED` or `PRODUCTION`.

## Production visual authority

There is currently no route-level production visual authority.

A Figma file becomes the production visual authority only after all of the following are true:

1. the product owner selects and approves a visual direction from VIS-002;
2. the product owner designates one Figma file as canonical;
3. the file contains the approved design-system foundation;
4. the relevant desktop and mobile frames are complete;
5. the product owner explicitly approves the frames;
6. exact page names and node IDs are recorded in the appropriate registry;
7. the relevant registry records are changed from `UNDECIDED` to `PRODUCTION`.

Until then, code may use approved brand assets and semantic tokens for technical foundations and Design Lab exploration, but it must not claim visual parity with an approved product design.

## Status vocabulary

- `PRODUCTION`: explicitly approved in the canonical Figma file and safe to implement after the applicable task gate permits it.
- `UNDECIDED`: no approved Figma frame exists.
- `EMPTY_DRAFT`: a Figma file or page may exist, but it contains no approved production design.
- `CONCEPT`: coded or visual exploration used for review; never implementation authority.
- `REFERENCE`: useful input that does not authorize direct production implementation.
- `ARCHIVE`: superseded source retained for history; never use for new work.
- `DUPLICATE`: byte-equivalent or generation-equivalent copy retained only for traceability.

Implementation status is separate:

- `IMPLEMENTED`: production UI matches an approved Figma frame and has passed review.
- `PLACEHOLDER`: route exists but displays a technical foundation placeholder.
- `NOT_STARTED`: no route entry exists yet.
- `N/A`: source material rather than an application route.

## Mandatory workflow

1. Review the route, user journey and available structural references.
2. Explore materially different art directions in the isolated Design Lab where needed.
3. Obtain product-owner selection of one direction or a documented hybrid.
4. Establish the canonical token, component and responsive rules.
5. Create the governed Figma design system and required frames.
6. Obtain explicit product-owner approval.
7. Record exact Figma page names and node IDs.
8. Change only approved records to `PRODUCTION`.
9. Implement approved frames in React under the applicable production task.
10. Verify responsive behavior, accessibility and visual parity before marking them `IMPLEMENTED`.

No agent or contributor may turn a Design Lab concept, PNG, Claude HTML file, prose prompt or unapproved visual assumption directly into production UI.

## Current design task

`VIS-002 — Create the Huddle production design foundation`

Current stage:

`D1 — Build and compare three coded art-direction concepts in VS Code`

VIS-002 must ultimately establish:

- selected and documented art direction;
- canonical brand and semantic design variables;
- typography, spacing, radius, border, elevation, imagery and motion rules;
- reusable navigation and shell components;
- approved desktop and mobile layout frames for Public, Auth, App and Admin surfaces;
- one canonical Figma file;
- stable page names and node IDs recorded in the repository.

`S0-015 — Create base layouts` remains blocked until VIS-002 is approved and merged.

## Supporting registers

- `docs/01-product/huddle-art-direction-research-2026.md` records the current art-direction research.
- `docs/01-product/design-source-inventory.csv` classifies visual sources.
- `docs/01-product/screen-route-registry.csv` maps routes to references, future Figma approval and React state.
- `docs/02-architecture/canonical-route-map.csv` remains authoritative for route ownership and priority.
- `docs/00-source-of-truth/brand-system.md` remains authoritative for locked brand identity and accessible token extensions.
