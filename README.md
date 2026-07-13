# Huddle

Huddle is a privacy-first local family platform built as one React codebase for web-first delivery and AI-assisted development through Claude Code or Codex.

## Current status

The repository is in Sprint 0 foundation execution.

S0-001 through S0-010 are completed and merged. The current executable task is S0-011: create route guards.

This repository is not launch-ready and should not be represented as a working product. It contains a structured technical foundation, canonical documentation, visual corpus, and task contracts for continued implementation.

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
│   └── screens/                 # visual corpus, sets 1–63
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
    └── phase-0/
        └── S0-011.md
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

## Source of truth

1. Accepted ADRs and canonical engineering documentation.
2. Actual merged repository implementation.
3. Canonical visual corpus and screen registry.
4. Set55 flow maps.
5. Sprint 0 source material where not superseded.
6. Older/reference designs.

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
4. Execute the current task contract only.
5. Do not start the next task until the current task is merged and its gates pass.

## Launch readiness

The project is not yet launch-ready. See `docs/06-operations/launch-readiness.md`.