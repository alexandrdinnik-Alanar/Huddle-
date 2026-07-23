# Claude Design → Figma → Codex Task Pack

Status: proposed execution pack  
Source: Claude Design reference corpus in PR #29  
Rule: one task ID, one branch, one implementation agent, one PR

## Global gates

Every task must:

- read `AGENTS.md`, `.ai/HUDDLE_RULES.md` and the assigned task contract;
- use the canonical Figma master as the production visual authority;
- record exact Figma page and node IDs before React implementation;
- preserve Next.js App Router, React, TypeScript strict and repository module boundaries;
- use canonical design tokens and shared components;
- cover desktop and mobile;
- include loading, empty, error, validation and success states where applicable;
- meet WCAG-oriented keyboard, focus, labeling and contrast requirements;
- run lint, typecheck, tests and build;
- stop after the assigned task.

## Sequence

### VIS-002 — Resolve canonical brand and token delta

**Goal:** make a founder-approved decision on the Claude warm editorial system versus the current locked brand baseline.

**Inputs**

- canonical Figma master;
- `docs/00-source-of-truth/brand-system.md`;
- Claude `CLAUDE.md`;
- Home, Marketplace and Activities prototypes;
- existing Figma variables and text styles.

**Deliverables**

- approved typography decision;
- approved semantic color tokens;
- migration table from Claude values to canonical tokens;
- updated Figma variables/styles;
- updated `brand-system.md`;
- no product-route implementation.

**Blocking gate:** all later visual tasks depend on VIS-002.

---

### VIS-003 — Correct route and design registries

**Goal:** reconcile the current 105-row route map with stale 108-route claims and the new Claude inventory.

**Deliverables**

- validated route count;
- updated `screen-route-registry.csv`;
- candidate Claude source references per route;
- explicit `PRODUCTION`, `REFERENCE`, `DUPLICATE`, `ARCHIVE` or `UNDECIDED` status;
- no route may become `PRODUCTION` without approved Figma node IDs.

**Inputs**

- `claude-prototype-inventory.csv`;
- `claude-route-canonicalization.csv`;
- canonical route map;
- approved Figma master.

---

### VIS-004 — Oslo Wave 1 responsive Figma package

**Goal:** complete the Wave 1 family-discovery and organizer-supply journeys in Figma.

**Route groups**

1. public home, activities and activity detail;
2. signup, login, verification and family onboarding;
3. parent app shell, search, saved items, activities and calendar;
4. organizer activity creation, registrations and check-in;
5. safety, privacy and community rules.

**Deliverables per route**

- desktop frame;
- mobile frame;
- interaction states;
- form validation;
- loading, empty, error and success states;
- Norwegian and English stress-test content;
- exact node IDs recorded in the registry.

---

### FE-001 — Shared public and app shells

**Dependencies:** VIS-002, VIS-003, approved VIS-004 shell frames.

**Scope**

- SiteHeader;
- SiteFooter;
- AppHeader;
- parent navigation shell;
- responsive navigation and focus behavior.

**Forbidden**

- copying `.dc.html` verbatim;
- introducing route-specific business logic;
- inventing new colors or typography.

---

### FE-002 — Activity discovery

**Dependencies:** FE-001 and approved Figma nodes.

**Routes**

- `/activities`;
- shared activity cards, filters, list/map controls and responsive filter sheet.

**Acceptance**

- URL-safe filter state;
- keyboard-operable controls;
- real semantic headings and landmarks;
- loading, no-results and failure states;
- visual parity tests.

---

### FE-003 — Activity detail

**Dependencies:** FE-001 and approved existing activity-detail Figma nodes.

**Route**

- `/activities/[activityId]`.

**Acceptance**

- age, location, schedule, trust and organizer information hierarchy;
- save/share/registration actions;
- mobile sticky action treatment;
- inaccessible or unavailable activity states.

---

### FE-004 — Parent authentication and onboarding

**Dependencies:** FE-001 and approved Figma nodes.

**Routes**

- `/signup`;
- `/login`;
- `/forgot-password`;
- `/verify`;
- `/onboarding`;
- `/onboarding/family`;
- `/onboarding/children`;
- `/onboarding/interests`;
- `/onboarding/location`;
- `/onboarding/consent`.

**Acceptance**

- privacy-minimized child data collection;
- server-side validation and authorization boundaries;
- accessible form labels and errors;
- resumable onboarding state;
- Norwegian content-length checks.

---

### FE-005 — Parent core app

**Dependencies:** FE-001 and approved Figma nodes.

**Routes**

- `/app`;
- `/app/search`;
- `/app/saved`;
- `/app/activities`;
- `/app/calendar`.

**Acceptance**

- consistent app shell;
- saved and calendar states;
- no exposure of child-sensitive information in public or shared views;
- responsive behavior and visual regression coverage.

---

### FE-006 — Organizer activity supply flow

**Dependencies:** FE-001 and approved Figma nodes.

**Routes**

- `/app/organizer`;
- `/app/organizer/activities`;
- `/app/organizer/registrations`;
- `/app/organizer/check-in`.

**Patterns**

- create/edit/review/publish;
- registration list;
- attendee detail;
- QR/manual check-in;
- success and failure states.

**Acceptance**

- server authorization by organizer ownership;
- safe attendee data exposure;
- idempotent check-in behavior;
- audit logging where required.

---

### FE-007 — Trust, privacy and consent surfaces

**Dependencies:** FE-001 and approved Figma nodes.

**Routes**

- `/safety`;
- `/privacy`;
- `/community-guidelines`;
- `/app/safety`;
- `/app/privacy`.

**Acceptance**

- content hierarchy suitable for families;
- consent and privacy controls;
- contact/report pathways;
- localization-ready content structure;
- no legal claims invented from design references.

---

### QA-001 — Accessibility and visual-regression gate

**Dependencies:** FE-001 through FE-007.

**Deliverables**

- keyboard journey checks;
- focus-order and focus-visibility checks;
- landmark and heading audit;
- form-label and error association audit;
- color contrast verification;
- desktop/mobile visual snapshots;
- route click-through with no dead internal links;
- documented deviations from approved Figma.

## Deferred packages

Do not start before Oslo Wave 1 validation:

- marketplace transactions and seller operations;
- broad community feed and groups;
- expert marketplace;
- partner product feeds and affiliate tools;
- municipality reporting;
- admin finance;
- city SEO page family.

## Definition of completion

The package is complete only when:

- every implemented route has approved Figma node IDs;
- the route registry reflects actual implementation state;
- no Claude HTML file is imported as runtime code;
- quality gates pass;
- each task has an independent handoff and review.
