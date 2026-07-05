# AGENTS.md — Huddle

Read `.ai/HUDDLE_RULES.md` before work.

1. Read `NEXT_TASK.md` unless a task ID is already assigned.
2. Open the task file under `tasks/`.
3. Inspect the actual repository before editing.
4. Execute one task ID per branch.
5. Respect the task dependencies and scope.
6. Run the required checks.
7. Write `docs/execution/<TASK-ID>/HANDOFF.md`.
8. Stop after the assigned task.

Use pnpm only. Keep React UI on Next.js App Router. Keep domain rules in `src/modules/<domain>`. Do not use client-side visibility as authorization.
