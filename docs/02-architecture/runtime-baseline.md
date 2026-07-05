# Runtime Baseline

Status: S0-001 foundation baseline.

## Locked runtime line

- Node.js: 22.x
- Package manager: pnpm 10.12.1
- React: 19.2.4
- React DOM: 19.2.4
- Next.js: 16.2.0
- TypeScript: 5.9.3

## Resolved foundation tooling

The committed `pnpm-lock.yaml` resolves the initial toolchain to:

- Playwright: 1.61.1
- `@types/node`: 22.20.0
- `@types/react`: 19.2.17
- `@types/react-dom`: 19.2.3
- ESLint: 9.39.4
- `eslint-config-next`: 16.2.0
- Prettier: 3.9.4
- Vitest: 4.1.9

## Rationale

Next.js 16.2 is the approved Sprint 0 framework line. React is pinned to 19.2.4 rather than 19.2.0–19.2.3 because the React team published follow-up security fixes for the React Server Components line.

## Source notes

- Official Next.js 16.2 release: March 18, 2026.
- Official React security guidance: 19.2.4 contains the backported fixes for the disclosed follow-up React Server Components vulnerabilities.

Exact direct and transitive dependency resolution is authoritative in the committed `pnpm-lock.yaml`.
