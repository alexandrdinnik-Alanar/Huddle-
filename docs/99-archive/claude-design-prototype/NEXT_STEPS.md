# Huddle Design Canonicalization Plan

## Objective

Convert the large Claude Design concept corpus into a small, coherent, testable and production-ready Huddle experience for the Oslo pilot.

## Priority order

### Phase 1 — Inventory and classification

Create `manifest.csv` with one row per artifact and these fields:

- source filename
- source type
- feature domain
- user role
- journey
- viewport
- canonical route candidate
- canonical/reference/archive decision
- duplicate group
- accessibility status
- content status
- redesign priority
- notes

No production implementation should begin from an unmapped prototype.

### Phase 2 — Oslo pilot scope

Freeze the P0 family journey before expanding the platform:

1. public home and discovery;
2. search and filters;
3. activity/event detail;
4. parent onboarding and family profile;
5. save and compare;
6. booking or registration;
7. confirmation, calendar and reminders;
8. organizer listing creation and basic management;
9. trust, safety and reporting essentials.

Marketplace, broad social feed, advanced municipality operations, affiliate commerce and extensive admin finance should remain outside the first design-production pass unless a validated pilot requirement makes them necessary.

### Phase 3 — Design system cleanup

Build one governed design system instead of page-level styling:

- semantic color tokens;
- typography scale;
- spacing and layout grid;
- radii, borders and elevations;
- buttons, inputs and form validation;
- cards, chips, tabs and navigation;
- empty, loading, error and success states;
- responsive breakpoints;
- accessibility variants;
- Norwegian and English localization behavior.

The current visual direction can be retained: editorial serif typography, warm ivory surfaces, copper accents and restrained Nordic composition. It should be simplified and given stronger contrast, spacing discipline and interaction hierarchy.

### Phase 4 — UX red-team

Test every P0 journey against:

- clear user intent;
- minimum number of steps;
- trust and safety cues;
- child privacy;
- cancellation and refund clarity;
- accessibility;
- mobile-first behavior;
- low-content and no-result conditions;
- localization and long Norwegian strings;
- error recovery.

### Phase 5 — Codex implementation

Codex should not be asked to “build 638 pages.” Use bounded tasks:

1. implement tokens and foundations;
2. implement the application shell;
3. implement one canonical component family;
4. implement one P0 route and its states;
5. add visual regression, accessibility and interaction tests;
6. review independently;
7. merge only after quality gates pass.

Each task must reference the approved Figma screen, canonical route, acceptance criteria and required states.

## Proposed Codex work packages

- `DES-001`: design token normalization and CSS variables
- `DES-002`: responsive app shell and navigation
- `DES-003`: activity/event card system
- `DES-004`: search, filters and results states
- `DES-005`: detail page composition
- `DES-006`: parent onboarding flow
- `DES-007`: booking/registration flow
- `DES-008`: organizer create-and-publish flow
- `DES-009`: trust, safety and reporting states
- `DES-010`: accessibility and visual regression baseline

## Quality gates

- no raw HTML prototype copied into production;
- no duplicated design tokens inside route files;
- WCAG-oriented keyboard, focus and contrast review;
- mobile, tablet and desktop screenshots;
- Norwegian copy stress test;
- loading, empty, error and success states;
- route-level tests;
- independent design review before merge.
