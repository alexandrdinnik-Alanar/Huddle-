# REPO-001 — Repository integrity reconciliation

## Objective

Reconcile the repository execution pointers, missing Sprint 0 task contracts, launch-readiness status, visual-source inventory, and automated consistency checks without implementing product UI or changing runtime behavior.

## Context

The repository contains completed and merged work through `S0-014` and `VIS-001`, but several canonical pointers still describe `S0-011` or `VIS-001` as current. The roadmap names `S0-015` as the next task while the corresponding contracts for `S0-015` through `S0-018` are missing. The imported Claude Design corpus is also absent from the canonical visual-source inventory.

## Allowed changes

- `README.md`
- `NEXT_TASK.md`
- `docs/01-product/design-source-inventory.csv`
- `docs/06-operations/launch-readiness.md`
- `docs/06-operations/repository-integrity-audit-2026-07-23.md`
- `tasks/phase-0/S0-015.md`
- `tasks/phase-0/S0-016.md`
- `tasks/phase-0/S0-017.md`
- `tasks/phase-0/S0-018.md`
- `tasks/maintenance/REPO-001.md`
- `tests/unit/repository-integrity.test.ts`
- `docs/execution/REPO-001/HANDOFF.md`

## Required outcomes

1. Root README and `NEXT_TASK.md` agree that `VIS-001` is merged and `S0-015` is next.
2. Stable task contracts exist for `S0-015` through `S0-018`.
3. The task contracts preserve the Figma-first gate and do not authorize product feature work.
4. Launch-readiness status reflects completed repository foundations without claiming external environments or operational approvals that cannot be verified from Git.
5. The visual-source inventory classifies all 63 PNG sets, both Figma files, and the Claude Design reference corpus.
6. Automated tests verify execution-pointer, task-contract, route-registry, source-inventory, and toolchain consistency.
7. Open PR risks are documented without merging or deleting unrelated work.

## Explicit exclusions

- no product layout or page implementation;
- no Figma edits;
- no database schema or migration changes;
- no dependency changes;
- no authorization behavior changes;
- no merge of PR #27 or PR #30;
- no deletion of visual or project-memory sources.

## Quality gates

- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm build`
- `git diff --check`

## Completion

Write `docs/execution/REPO-001/HANDOFF.md` and stop. The next executable product-foundation task remains `S0-015`.