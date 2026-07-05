# Runtime Baseline

Status: S0-001 foundation baseline.

## Locked runtime line

- Node.js: 22.x
- Package manager: pnpm 10.12.1
- React: 19.2.4
- React DOM: 19.2.4
- Next.js: 16.2.0
- TypeScript: 5.9.x resolved by lockfile

## Rationale

Next.js 16.2 is the approved Sprint 0 framework line. React is pinned to 19.2.4 rather than 19.2.0–19.2.3 because the React team published follow-up security fixes for the React Server Components line.

## Source notes

- Official Next.js 16.2 release: March 18, 2026.
- Official React security guidance: 19.2.4 contains the backported fixes for the disclosed follow-up React Server Components vulnerabilities.

Exact transitive dependency versions are authoritative in `pnpm-lock.yaml` after bootstrap.
