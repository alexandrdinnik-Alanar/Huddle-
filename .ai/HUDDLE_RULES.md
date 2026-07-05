# Huddle Shared AI Engineering Rules

Status: canonical execution rules for Claude Code and Codex.  
Date: 2026-07-04

## Product baseline

Huddle is a privacy-first local family infrastructure platform. The codebase is one React application, not separate implementations per agent.

## Locked stack

- **UI library:** React 19.2 baseline
- **Framework:** Next.js 16.2.x App Router (React framework layer)
- **Language:** TypeScript strict mode
- **Package manager:** pnpm with committed lockfile
- **Architecture:** Modular monolith
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Auth:** Supabase Auth
- **DB hosting:** Supabase Postgres initial target
- **Storage:** Supabase Storage behind MediaStorage adapter
- **Hosting:** Vercel initial target
- **Validation:** Schema-first validated DTO boundary
- **Authorization:** RBAC + Capability + ScopedGrant + object policy
- **Testing:** Vitest-compatible unit/integration + Playwright E2E; exact dependency versions locked in S0-001
- **Styling:** CSS variables from canonical Huddle tokens; Tailwind-compatible, no arbitrary brand values
- **Agent execution:** Claude Code or Codex against one codebase and one task contract

## Non-negotiable architecture

1. React UI only. Do not introduce Vue, Svelte, Angular, a second SPA, or a separate frontend framework.
2. Next.js App Router is the React framework layer. Do not create Pages Router.
3. Use React Server Components by default. Add `use client` only where browser state, effects, event handlers or client-only APIs are required.
4. Modular monolith. Domain business logic lives in `src/modules/<domain>`; route files orchestrate but do not own business rules.
5. Server authorization is mandatory: role + capability + scoped grant + object policy. Client visibility is not authorization.
6. Validate every external input at a DTO boundary.
7. Persist canonical state before realtime broadcast.
8. Use transactional outbox/idempotent consumers for cross-domain side effects where required.
9. No universal `MarketplaceItem`. Listings, Catalog, Orders, Payments and Affiliate are separate bounded contexts.
10. One messaging core for all conversation contexts.
11. Family matching is opt-in and privacy-by-default; no exact child birthdate or home address in discovery.
12. Municipality reporting is aggregate/de-identified only; default minimum cohort threshold 10.
13. No live payments/payouts before provider/commercial/legal ADR gate.
14. No fake admin controls. Every production control needs backend behavior, capability, audit and rollback path.
15. Never log secrets, message text, child identifiers, exact address or unnecessary sensitive free text.

## Source-of-truth order

1. Accepted ADRs and Developer Implementation Bible.
2. Actual repository implementation.
3. Canonical visual sets and Screen Implementation Registry.
4. Set55 flow maps.
5. Sprint 0 source pack only where not superseded.
6. Older/reference visual sets.

## Task discipline

- Execute exactly one task ID per branch.
- Read the task file before editing.
- Do not silently expand scope.
- Do not start a dependent task early.
- Do not modify agent instruction files inside a feature task.
- New production dependencies require explicit approval and a written reason in the handoff.
- Run required quality gates before handoff.
- Stop after the task is complete; do not begin the next task.

## Required handoff

Create `docs/execution/<TASK-ID>/HANDOFF.md` containing:

- summary;
- changed files;
- schema/migration impact;
- API changes;
- authorization changes;
- tests run and results;
- known limitations;
- follow-up risks;
- exact commit SHA if available.
