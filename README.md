# Huddle

Huddle is a privacy-first local family platform built as one React codebase for web-first delivery and AI-assisted development through Claude Code or Codex.

## Current status

The repository is in a documentation-first, pre-Sprint-0 state. The next executable task is `S0-001`.

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
        └── S0-001.md
```

Runtime application folders are intentionally created by `S0-001`, not as empty placeholders:

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
4. Execute `tasks/phase-0/S0-001.md` only.
5. Do not start S0-002 until S0-001 is merged and its gates pass.

## Launch readiness

The project is not yet launch-ready. See `docs/06-operations/launch-readiness.md`.
