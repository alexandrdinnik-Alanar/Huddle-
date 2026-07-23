# Huddle

Huddle is a privacy-first local family platform built as one React codebase for web-first delivery and AI-assisted development through Claude Code or Codex.

## Current status

The repository is in Sprint 0 foundation execution.

`S0-001` through `S0-014` are completed and merged. The current executable task is `VIS-002 — Create the Huddle production design foundation`.

No approved Huddle product design currently exists. VIS-002 uses a **VS Code-first, Figma-governed** process: coded art-direction concepts are compared in a private Design Lab, the selected direction is refined into a reusable system, and only then is the approved foundation recorded in Figma.

`S0-015 — Create base layouts` remains blocked until the Public, Auth, App, and Admin layout frames are approved and recorded with stable Figma node IDs.

This repository is not launch-ready and should not be represented as a working product. It contains a structured technical foundation, canonical brand assets and tokens, reference visual corpora, route placeholders, and task contracts for continued implementation.

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
│   ├── screens/                 # 638 reference artifacts, sets 1–63
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
│   └── (design-lab)/design-lab/ # private VIS-002 concepts; not production UI
├── components/
├── modules/
└── lib/

prisma/
tests/
```

## Design workflow

The current VIS-002 workflow is:

```text
Claude/PNG structural references
  → art-direction research
  → three responsive coded concepts in /design-lab
  → product-owner selection
  → canonical tokens and component language
  → Public/Auth/App/Admin layout designs
  → Figma governance and stable node IDs
  → S0-015 production implementation
```

The `/design-lab` route is an internal, `noindex` comparison environment. It may contain fictional content and experimental styling but must not modify or authorize production routes.

## Design authority

There is currently no approved route-level Figma design.

The locked repository brand system is authoritative for approved logo assets, palette, accessible semantic tokens, and brand rules. PNG screen sets and the Claude Design corpus are reference materials only.

Coded Design Lab concepts are review evidence, not production authority. A design becomes production authority only after product-owner approval, transfer into the canonical Figma file, and registration of its exact page name and node ID in the appropriate repository registry.

## Source of truth

1. Accepted ADRs and canonical engineering documentation.
2. Actual merged repository implementation.
3. Locked brand system and approved brand assets.
4. Product-owner decisions recorded during VIS-002.
5. Future approved Figma frames recorded in the Screen Implementation Registry.
6. Canonical visual corpus and Set55 flow maps as reference inputs.
7. Sprint 0 source material where not superseded.
8. Older, imported, or duplicate designs.

## Development workflow

```text
one task ID
  → one branch
  → one implementation agent
  → quality gates
  → HANDOFF.md
  → independent review
  → merge
```

Claude Code and Codex use the same architecture and task contracts.

## Start here

1. Read `AGENTS.md` or `CLAUDE.md`.
2. Read `.ai/HUDDLE_RULES.md`.
3. Read `NEXT_TASK.md`.
4. Open the exact task contract named there.
5. Execute the current task contract only.
6. Do not start the next task until the current task is merged and its gates pass.

## Launch readiness

The project is not launch-ready. Repository foundations and external operational prerequisites are tracked separately in `docs/06-operations/launch-readiness.md`.
