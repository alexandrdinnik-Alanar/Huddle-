# Huddle Design Source of Truth

Status: corrected baseline — no approved production design currently exists in Figma

## Current reality

Huddle has not yet created or approved a production UI in Figma.

The file key `dyT1r12QkL7yF0ynjqCs4E` and the previously recorded page names and node IDs must not be treated as evidence of completed design work. Any existing Figma file or page is an empty or unverified draft until the product owner explicitly approves it and the approved frames are recorded in `screen-route-registry.csv`.

Therefore:

- no route currently has `PRODUCTION` design status;
- no Figma node ID currently authorizes React implementation;
- all repository PNG sets and the Claude Design corpus are reference inputs only;
- the locked repository brand system remains authoritative for logo assets, palette, accessible semantic tokens, and brand rules;
- product layouts and screens must be created and approved in Figma before visual implementation.

## Production visual authority

There is currently no route-level production visual authority.

A Figma file becomes the production visual authority only after all of the following are true:

1. the product owner designates the file as canonical;
2. the file contains an organized design-system foundation;
3. the relevant desktop and mobile frames are complete;
4. the product owner explicitly approves the frames;
5. the exact page names and node IDs are recorded in `docs/01-product/screen-route-registry.csv`;
6. the registry row is changed from `UNDECIDED` to `PRODUCTION`.

Until then, code may use the approved brand assets and existing semantic tokens for technical foundations, but it must not claim visual parity with an approved product design.

## Status vocabulary

- `PRODUCTION`: explicitly approved in the canonical Figma file and safe to implement after the applicable task gate permits it.
- `UNDECIDED`: no approved Figma frame exists.
- `EMPTY_DRAFT`: a Figma file or page may exist, but it contains no approved production design.
- `REFERENCE`: useful input that does not authorize direct production implementation.
- `ARCHIVE`: superseded source retained for history; never use for new work.
- `DUPLICATE`: byte-equivalent or generation-equivalent copy retained only for traceability.

Implementation status is separate:

- `IMPLEMENTED`: production UI matches an approved Figma frame and has passed review.
- `PLACEHOLDER`: route exists but displays a technical foundation placeholder.
- `NOT_STARTED`: no route entry exists yet.
- `N/A`: source material rather than an application route.

## Mandatory Figma-first workflow

Any page drawing or material visual decision must happen in Figma first.

1. Create or designate the canonical Huddle Figma production file.
2. Build the design-system foundation from the locked repository brand system.
3. Use PNG sets and the Claude Design corpus only as `REFERENCE` inputs.
4. Create the required desktop, tablet where necessary, mobile, and interaction states.
5. Obtain explicit product-owner approval.
6. Record exact Figma page names and node IDs in `screen-route-registry.csv`.
7. Change only the approved registry rows to `PRODUCTION`.
8. Implement the approved frames in React.
9. Verify responsive behavior, accessibility, and visual parity before marking them `IMPLEMENTED`.

No agent or contributor may generate a production page directly in code from a PNG, Claude HTML file, prose prompt, or unapproved visual assumption.

## Current design task

`VIS-002 — Create the canonical Figma production foundation`

VIS-002 must establish:

- the canonical Figma file and page structure;
- brand and semantic design variables;
- typography, spacing, radius, elevation, and responsive foundations;
- reusable navigation and shell components;
- approved desktop and mobile layout frames for Public, Auth, App, and Admin surfaces;
- stable page names and node IDs recorded in the repository.

`S0-015 — Create base layouts` remains blocked until VIS-002 is approved and merged.

## Supporting registers

- `docs/01-product/design-source-inventory.csv` classifies visual sources.
- `docs/01-product/screen-route-registry.csv` maps routes to references, future Figma approval, and React state.
- `docs/02-architecture/canonical-route-map.csv` remains authoritative for route ownership and priority.
- `docs/00-source-of-truth/brand-system.md` remains authoritative for locked brand identity and accessible token extensions.
