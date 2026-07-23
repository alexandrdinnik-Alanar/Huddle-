# VIS-002 D1 Handoff — Coded art-direction concepts

## Summary

Introduces the first isolated coded Design Lab for Huddle and changes the VIS-002 execution strategy to VS Code-first, Figma-governed design development.

The internal `/design-lab` route contains three materially different responsive art-direction concepts:

- A — Nordic Editorial;
- B — Local Discovery Atlas;
- C — Human Community Journal.

Each concept demonstrates navigation, homepage hero, discovery/search, activity presentation and trust/safety language using fictional content.

## Changed files

- `src/app/(design-lab)/design-lab/page.tsx`
- `src/app/(design-lab)/design-lab/DesignLab.tsx`
- `src/app/(design-lab)/design-lab/design-lab.module.css`
- `docs/01-product/huddle-art-direction-research-2026.md`
- `docs/00-source-of-truth/design-source-of-truth.md`
- `tasks/design/VIS-002.md`
- `NEXT_TASK.md`
- `README.md`
- `tests/unit/repository-integrity.test.ts`

## Scope controls

- no production route was changed;
- no concept is marked `PRODUCTION`;
- `/design-lab` is `noindex` and absent from production navigation;
- no API, database, authentication, authorization or product-feature behavior was added;
- no new dependency was added;
- Claude HTML and PNG references were not copied into runtime UI.

## Schema and migration impact

None.

## API impact

None.

## Authorization impact

None. The Design Lab contains no authentication or trusted-role behavior.

## Accessibility and performance

- semantic headings and navigation labels;
- keyboard-operable concept selector;
- visible focus behavior inherited from browser controls and scoped interactions;
- responsive layouts for desktop, tablet and mobile widths;
- `prefers-reduced-motion` handling;
- CSS and inline SVG only, with no WebGL or heavy runtime dependency.

## Tests and quality gates

Pending GitHub CI after the draft pull request opens:

- frozen pnpm install;
- brand asset verification;
- lint;
- typecheck;
- unit tests;
- production build.

## Known limitations

- the visual concepts use abstract CSS imagery rather than commissioned family photography;
- the current display and body font stack is limited to repository/system fonts;
- this stage compares public discovery art direction, not complete Auth/App/Admin layouts;
- the product owner has not selected a direction yet;
- no Figma production file or approved node IDs exist yet.

## Required next decision

Review all three concepts in a browser and select:

- one direction;
- a documented hybrid;
- or specific revisions before selection.

Do not begin S0-015.
