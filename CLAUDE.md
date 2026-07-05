# CLAUDE.md — Huddle

Read `.ai/HUDDLE_RULES.md` before work.

1. Read `NEXT_TASK.md` unless a specific task ID is assigned.
2. Open the assigned contract under `tasks/`.
3. Inspect the real repository before editing.
4. Execute exactly one task ID per branch.
5. Respect dependencies, allowed files, forbidden changes and source-of-truth precedence.
6. Keep business rules inside `src/modules/<domain>` when runtime code exists.
7. Run every required quality gate.
8. Write `docs/execution/<TASK-ID>/HANDOFF.md`.
9. Stop after the assigned task.

Use pnpm only. Preserve React + Next.js App Router architecture. Client-side visibility is not authorization.
