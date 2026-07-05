# AGENTS.md — Huddle

Read `.ai/HUDDLE_RULES.md` before any work. If it is absent, stop and report repository setup is incomplete.

## Codex task rule

1. Locate the assigned task under `docs/execution-pack/tasks/**/<TASK-ID>.md` or the task path provided by the user.
2. Execute only that task.
3. Respect dependencies, allowed files and forbidden changes.
4. Inspect the actual repository before changing code; never assume a file exists.
5. Prefer the smallest coherent implementation that satisfies the task contract.
6. Run every command listed in the task quality gate.
7. Create the required handoff file.
8. Do not begin another task.

## Repository commands

Use pnpm. Do not switch package managers.

Typical gates:
- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm build`
- task-specific Prisma/E2E commands when listed

## Review behavior

When assigned as reviewer, do not rewrite the feature by default. Review against the task contract, ADRs, security/privacy rules and tests. Record blocking findings first.
