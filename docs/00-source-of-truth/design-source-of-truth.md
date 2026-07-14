# Huddle Design Source of Truth

Status: approved process and reconciled baseline (`VIS-001`)

## Canonical Figma master

- File: `Huddle Family — Design System, Website & Pitch Deck Master`
- File key: `dyT1r12QkL7yF0ynjqCs4E`
- URL: <https://www.figma.com/design/dyT1r12QkL7yF0ynjqCs4E/Huddle-Family-%E2%80%94-Design-System--Website---Pitch-Deck-Master>

This file is the only production visual authority. Repository PNG files are retained for traceability and design reference; they are not production specifications unless a corresponding frame is approved in the canonical Figma master and recorded in `screen-route-registry.csv`.

## Verified Figma baseline

The read-only VIS-001 audit confirmed:

- brand pages `00_Cover` through `09_Patterns`;
- website pages `10_Website Desktop` and `11_Website Mobile`;
- product page `12_Product Screens`;
- 6 local variable collections covering color primitives, semantic colors, spacing, radius, typography, and responsive website values;
- 18 local text styles and 3 effect styles;
- reusable navigation, footer, activity filter, date tile, view toggle, and result card components;
- approved or brand-matched home frames for desktop and mobile;
- activity listing, map, filter-sheet, and detail frames for desktop and mobile.

The master also contains empty future sections for presentation, pitch deck, prototype, and archive work. Empty pages are not approval evidence.

## Production frames confirmed by VIS-001

| Route or state | Figma page | Node ID | Coverage |
|---|---|---|---|
| `/` desktop | `10_Website Desktop` | `68:273` | approved brand-matched frame |
| `/` mobile | `11_Website Mobile` | `84:432` | approved brand-matched frame |
| `/` mobile menu open | `11_Website Mobile` | `85:1298` | approved responsive state |
| `/activities` desktop list | `12_Product Screens` | `132:2` | approved frame |
| `/activities` desktop map | `12_Product Screens` | `132:173` | approved state |
| `/activities` mobile list | `12_Product Screens` | `133:236` | approved frame |
| `/activities` mobile filters | `12_Product Screens` | `133:429` | approved state |
| `/activities/[activityId]` desktop | `12_Product Screens` | `134:618` | approved frame |
| `/activities/[activityId]` mobile | `12_Product Screens` | `134:780` | approved frame |

The activity detail route is P1 in the canonical route map but is included because approved frames already exist.

## Status vocabulary

- `PRODUCTION`: approved in the canonical Figma master and safe to implement after the task gate permits it.
- `REFERENCE`: useful input that does not authorize direct production implementation.
- `ARCHIVE`: superseded source retained for history; never use for new work.
- `DUPLICATE`: byte-equivalent or generation-equivalent copy retained only for traceability.
- `UNDECIDED`: route or visual concept without an approved Figma frame.

Implementation status is separate:

- `IMPLEMENTED`: production UI matches the approved Figma frame and has passed review.
- `PLACEHOLDER`: route exists but displays the shared foundation placeholder.
- `NOT_STARTED`: no route entry exists yet.
- `N/A`: source material rather than an application route.

## Mandatory Figma-first workflow

Any page drawing or material visual decision must happen in the canonical Figma master first.

1. Locate the route in `screen-route-registry.csv`.
2. Use PNG sets only as `REFERENCE` inputs.
3. Create the required desktop, tablet, mobile, and interaction states in Figma using the existing brand system.
4. Get explicit visual approval from the product owner.
5. Change the registry row to `PRODUCTION` and record the exact page and node IDs.
6. Implement the approved frame in React.
7. Verify responsive behavior, accessibility, and visual parity before marking it `IMPLEMENTED`.

No agent or contributor may generate a production page directly in code from a PNG, prose prompt, or an unapproved visual assumption.

## Current gap

Only `/`, `/activities`, and the P1 activity-detail route have route-level product frames in the master. All other P0 routes remain `UNDECIDED` even where repository PNG references exist. Their current React pages are technical placeholders and must not be interpreted as designs.

## Supporting registers

- `docs/01-product/design-source-inventory.csv` classifies the audited visual sources.
- `docs/01-product/screen-route-registry.csv` maps routes to Figma, repository references, and React state.
- `docs/02-architecture/canonical-route-map.csv` remains authoritative for route ownership and priority.
- `docs/00-source-of-truth/brand-system.md` remains authoritative for locked brand identity and accessible token extensions.
