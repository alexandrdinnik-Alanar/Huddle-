# Claude Design Prototype Audit

Date: 2026-07-23

## Status

This material is a **reference prototype corpus**, not production UI and not a route inventory.

The supplied archive was inspected locally and contains:

- 542 files total
- 315 HTML prototype files
- 205 PNG files
- 12 PDF files
- 4 JavaScript files
- 2 Markdown files
- 2 text files
- 1 nested ZIP file
- approximately 192.9 MiB uncompressed

The existing repository already contains the canonical visual corpus in `assets/screens/` with 638 artifacts across sets 1–63. The new Claude Design material must therefore remain isolated until individual screens are mapped to the canonical screen-route registry.

## Automated findings

- 114 exact duplicate groups were detected.
- 138 files are redundant copies beyond the first retained instance.
- 314 of 315 HTML files have no usable document title.
- 315 of 315 HTML files have no `lang` attribute.
- 315 of 315 HTML files have no semantic `<main>` region.
- 274 of 315 HTML files have no `<h1>`.
- 9,806 inline-style attributes were detected.
- Most pages depend on a shared `support.js`, but the UI is still delivered as disconnected static prototypes.
- Repeated template placeholders such as `{{ n.href }}` show that several files are design-component templates rather than executable pages.
- The visual system is reasonably consistent around Newsreader, Hanken Grotesk, ivory, copper and deep neutral tones, but tokens are copied into pages rather than governed centrally.

## Decision

Do not merge the raw prototype files into production folders.

Use this material only for:

1. visual comparison against the approved Huddle Figma master;
2. discovery of missing states or flows;
3. component extraction candidates;
4. content and information-architecture review;
5. archiving rejected or superseded concepts.

## Required ingestion structure

When the binary archive is transferred through a local Git/LFS workflow, place it under:

```text
assets/reference/claude-design-2026-07/
├── html/
├── png/
├── pdf/
├── scripts/
├── manifest.csv
└── README.md
```

Do not place these files in `src/`, `public/`, or the canonical `assets/screens/set-*` folders.

## Recommended next step

Create a canonicalization sprint before implementation:

1. Build a manifest for every Claude prototype.
2. Map each item to an existing canonical route, a missing state, a component, or archive-only status.
3. Select only P0 Oslo family journeys for redesign.
4. Rebuild approved screens in Figma with shared components and tokens.
5. Implement approved routes in Codex one task and one pull request at a time.

See `NEXT_STEPS.md` for the proposed execution plan.