# Huddle

Huddle is a privacy-first local family platform built as one React codebase for web-first delivery and AI-assisted development through Claude Code or Codex.

## Current status

The repository is in Sprint 0 foundation execution.

`S0-001` through `S0-014` are completed and merged. The current executable task is `VIS-002 — Reconcile and productionize the complete Huddle design corpus`.

Huddle already has a broad full-platform reference design corpus, but no approved editable route-level production design currently exists in Figma. `S0-015 — Create base layouts` remains blocked until the combined corpus is reconciled, representative responsive patterns are validated, approved Figma frames are created, and stable node IDs are recorded.

The current source baseline includes 315 HTML prototype records, 205 PNG files, 12 PDF files, 105 canonical routes, 286 mapped route-screen/state records, and a supplemental 100-screen `Site.zip` delta. The supplemental package must not replace or restart the earlier canonicalization work.

This repository is not launch-ready and should not be represented as a working product. It contains a structured technical foundation, canonical brand assets and tokens, a broad reference visual corpus, route placeholders, and task contracts for continued implementation.

## Technology baseline

- React 19.2 baseline
- Next.js 16.2.x App Router
- TypeScript strict
- pnpm
- PostgreSQL + Prisma
- Supabase Auth
- Supabase Postgres initial target
- Supabase Storage behind an adapter
- Vercel initial deployment target
- modular monolith

## Repository map

```text
.
├── README.md
├── AGENTS.md
├── CLAUDE.md
├── NEXT_TASK.md
├── .ai/
│   └── HUDDLE_RULES.md
├── .github/
│   └── pull_request_template.md
├── assets/
│   ├── screens/                 # reference visual artifacts
│   └── reference/               # isolated non-production source corpora
├── docs/
│   ├── 00-source-of-truth/
│   ├── 01-product/
│   ├── 02-architecture/
│   ├── 03-security-access/
│   ├── 04-api/
│   ├── 05-execution/
│   ├── 06-operations/
│   ├── execution/               # per-task handoffs
│   └── 99-archive/
└── tasks/
    ├── README.md
    ├── design/
    │   ├── VIS-001.md
    │   └── VIS-002.md
    ├── maintenance/
    │   └── REPO-001.md
    └── phase-0/
        ├── S0-015.md
        ├── S0-016.md
        ├── S0-017.md
        └── S0-018.md
```

Runtime application folders are governed by merged Sprint 0 tasks and the current task contract. Do not create or modify runtime folders outside the active task scope.

```text
src/
├── app/
├── components/
├── modules/
└── lib/

prisma/
tests/
```

## Design authority

The complete audited HTML, PNG and PDF corpus establishes the working Huddle product and visual direction. It must be reconciled and professionally normalized rather than replaced by isolated screenshots or unrelated art-direction experiments.

The established direction uses warm cream and off-white surfaces, dark forest-green navigation and primary actions, copper/orange Huddle accents, natural family photography, restrained rounded geometry, thin neutral borders and compact product layouts across public, family, organizer, partner and municipality surfaces.

There is currently no approved editable route-level Figma design. A Figma frame becomes production authority only after product-owner approval and registration of its exact page name and node ID in `docs/01-product/screen-route-registry.csv`.

## Source of truth

1. Accepted ADRs and canonical engineering documentation.
2. Actual merged repository implementation.
3. Product-owner decisions and the reconciled complete Huddle design corpus.
4. Locked brand system and approved brand assets.
5. Product-owner-approved Figma frames recorded in the Screen Implementation Registry.
6. Canonical route and source inventories.
7. Older, imported, duplicate or superseded designs.

## Development workflow

```text
source inventory
→ corpus reconciliation
→ route and component decisions
→ responsive coded validation
→ Figma governance and approval
→ scoped task contract
→ branch
→ pull request
→ CI
→ review
→ merge
```

Claude Code and Codex use the same architecture and task contracts.

## Launch readiness

The project is not launch-ready. Repository foundations and external operational prerequisites are tracked separately in `docs/06-operations/launch-readiness.md`.
