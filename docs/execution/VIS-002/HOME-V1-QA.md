# Huddle Home v1 — Visual QA Gate

Status: Draft implementation in PR #38. Do not merge until the visual gate is complete.

## Locked direction

The homepage must present Huddle primarily as a family-life platform:

1. family planning and daily life;
2. activities and local discovery;
3. community;
4. trusted services;
5. marketplace as a secondary module.

The route must use the canonical Huddle logo and icon assets and the locked brand palette. Identity assets must never be redrawn, AI-recreated, distorted or recolored.

## Implemented review surfaces

- utility bar and public header;
- editorial family hero;
- today-plan and local-pick overlays;
- trust ribbon;
- asymmetrical activities mosaic;
- community collage;
- trusted-services mosaic;
- compact marketplace module;
- app/family-hub banner;
- complete footer;
- desktop, tablet and mobile responsive rules;
- reduced-motion handling.

## Required visual review widths

- 1440 px desktop;
- 1024 px compact desktop;
- 768 px tablet;
- 390 px mobile.

At every width verify:

- no horizontal page overflow;
- logo remains undistorted;
- hero copy remains readable over photography;
- today-plan card does not cover primary CTA or faces;
- all section headings remain visible and correctly ordered;
- photo crops preserve the subject;
- tap targets remain at least 44 px where practical;
- marketplace remains visually secondary;
- footer columns do not collapse into unreadable groups.

## Known pre-merge blockers

1. External Unsplash URLs are temporary editorial placeholders. Replace them with licensed or Huddle-owned high-resolution photography before launch.
2. Validate every external image crop after the final photo pack is selected.
3. Complete an accessibility pass for contrast, keyboard order, landmarks and reduced motion.
4. Confirm mobile navigation behavior after the desktop primary navigation is hidden.
5. Correct any invalid or ignored responsive declarations found during browser QA.
6. Capture approved 1440 / 1024 / 768 / 390 screenshots and attach them to the PR.

## Acceptance criteria

- CI passes brand verification, lint, typecheck, unit tests and production build.
- Product owner approves desktop and mobile visual captures.
- No placeholder route remains at `/`.
- Canonical identity assets are used directly from `/public/brand`.
- No production claim is made for temporary photography.
- The PR stays Draft until all blockers above are closed.
