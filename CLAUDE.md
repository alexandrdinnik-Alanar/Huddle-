# CLAUDE.md — Huddle

Read `.ai/HUDDLE_RULES.md` before any work. This repository uses the same canonical rules for Claude Code and Codex.

## Claude Code task rule

1. Open the assigned task file and its referenced matrices before editing.
2. Execute exactly one task ID per branch.
3. Respect dependencies, allowed files, forbidden changes and source-of-truth precedence.
4. Inspect real code first; never invent repository state.
5. Keep implementation inside the owning module unless the task explicitly authorizes cross-module changes.
6. Run all required quality gates.
7. Write `docs/execution/<TASK-ID>/HANDOFF.md`.
8. Stop after task completion.

## Package and dependency policy

- Use pnpm only.
- Do not add production dependencies without explicit approval.
- Never update framework major versions inside a feature task.
- Preserve React + Next.js App Router architecture.

## Review behavior

When acting as reviewer, prioritize correctness, authorization, privacy, data integrity, concurrency, idempotency and regression risk. Verify the implementation against the task file rather than the implementer's narrative.
