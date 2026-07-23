# Huddle Repository Integrity Audit — 2026-07-23

## Status

Repository foundation is usable, but it was not safe to continue automatically before this reconciliation because execution pointers, remaining task contracts, launch-readiness status, and visual-source coverage were inconsistent.

This audit covers repository-visible evidence only. It does not claim that external infrastructure, legal approvals, commercial decisions, finance assumptions, or public claims are verified merely because related documents exist in Git.

## Verified foundation

The repository contains:

- one React 19.2 / Next.js 16.2 App Router codebase;
- TypeScript strict mode;
- pnpm with a committed lockfile;
- CI for install, brand verification, lint, typecheck, tests, and build;
- Prisma/PostgreSQL foundation with User, Role, UserRole, and AuditLog models;
- Supabase authentication/session foundation;
- permission, route-guard, API response, validation, and audit helpers;
- 55 unique placeholder routes;
- an approved Figma production authority and screen-route registry;
- 638 PNG reference artifacts across sets 1–63;
- an isolated Claude Design reference corpus imported through Git LFS.

## Critical inconsistencies found

### 1. Root execution pointers were stale

`README.md` still named S0-011 as current. `NEXT_TASK.md` still named VIS-001 as in progress even though VIS-001 was merged and its handoff identifies S0-015 as next.

**Resolution:** both files now identify `S0-015 — Create base layouts` as the next executable task.

### 2. Required task contracts were missing

The roadmap and Sprint 0 Batch 6 source name S0-015 through S0-018, but no stable files existed under `tasks/phase-0/` for those tasks. This violated the repository rule that an agent must open the exact task contract before editing.

**Resolution:** restored and reconciled contracts now exist for:

- `tasks/phase-0/S0-015.md`;
- `tasks/phase-0/S0-016.md`;
- `tasks/phase-0/S0-017.md`;
- `tasks/phase-0/S0-018.md`.

The contracts preserve current architecture boundaries, the Figma-first gate, the existing 55-route placeholder implementation, and the deferred app-user/role-resolution boundary.

### 3. Launch-readiness status was obsolete

The launch document still described the repository as pre-Sprint-0 and left already merged foundation work unchecked.

**Resolution:** repository-verifiable work is now marked separately from external services and operational approvals. Supabase, PostgreSQL, Vercel, branch protection, monitoring, backups, and legal/operational readiness remain open unless independent evidence is recorded.

### 4. Visual-source inventory was incomplete

The canonical source inventory listed only a subset of PNG sets and omitted the imported Claude Design corpus.

**Resolution:** the inventory now includes:

- canonical and legacy Figma files;
- all PNG sets 1–63;
- set 54 as `DUPLICATE`;
- the Claude Design corpus as `REFERENCE`.

### 5. No automated protection against recurrence

CI checked code quality but did not check whether execution pointers, route counts, task contracts, source inventories, and tool versions stayed synchronized.

**Resolution:** `tests/unit/repository-integrity.test.ts` now checks:

- required canonical files and remaining Sprint 0 contracts;
- README/NEXT_TASK agreement;
- 105 unique canonical routes and 46 P0 routes;
- P0 screen-route coverage;
- exact Figma metadata for production-approved routes;
- all 63 visual sets plus Figma and Claude classifications;
- roadmap task sequence;
- Node/pnpm alignment;
- placeholder-only environment examples.

## Open pull request assessment

### PR #27 — Project memory execution pack

Do not merge as a normal source-of-truth update without a dedicated review task.

Risks:

- many working drafts are proposed directly under `docs/00-source-of-truth/`;
- the package includes finance, grant, investor, municipality, privacy, and public-claims material with different approval requirements;
- the PR is not organized around one executable repository task;
- canonical, working, external-ready, and archived statuses require explicit per-document classification;
- claims, finance assumptions, legal/privacy content, and external program eligibility require specialist review rather than repository-presence validation.

Recommended treatment: keep draft, split into controlled packages, and merge only documents whose status and owner are explicit.

### PR #30 — Claude Design canonicalization

Do not merge as currently structured.

Useful content exists in its prototype and route inventories, but the PR:

- overlaps the already merged VIS-001 design-source reconciliation;
- has no stable task ID in the canonical execution sequence;
- introduces a branch-specific GitHub Actions workflow with `contents: write`;
- contains a one-off embedded-data installer that is not a general repository capability;
- proposes separate design task naming that can conflict with the existing roadmap and Figma-first process.

Recommended treatment: keep draft, remove the write-capable one-off workflow, and migrate only validated inventory rows through a dedicated task that updates the canonical registries rather than creating a competing source of truth.

## Remaining blockers before normal product work

1. Merge this repository-integrity reconciliation after CI and review.
2. Execute S0-015 only, one branch and one handoff.
3. Complete S0-016 through S0-018 sequentially.
4. Provision and document safe development Supabase, PostgreSQL, and Vercel environments.
5. Establish trusted Supabase-subject to canonical app-user reconciliation before real role-protected product/admin flows.
6. Record branch-protection, secret ownership, monitoring, backup, and release procedures.
7. Resolve founder/legal/commercial decisions required for beta and payments.
8. Build approved production UI only from exact Figma node IDs recorded in the route registry.

## Non-blocking follow-up improvements

- Create a deterministic SHA-256 manifest for all 638 PNG reference artifacts so corpus integrity is machine-verifiable even though CI intentionally skips large assets.
- Add dependency update ownership and vulnerability scanning policy.
- Add a canonical decision/status register for product, legal, finance, grant, and external-facing documents.
- Define an archival policy for merged reference corpora and superseded generated inventories.
- Require task ID and source-status fields in documentation-only PRs.

## Decision

After this reconciliation merges, the repository is sufficiently organized to begin `S0-015`. It is not yet ready for Phase 1 product work, closed beta, commercial transactions, or public launch.