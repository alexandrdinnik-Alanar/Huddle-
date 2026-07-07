# HANDOFF - S0-006

## Task ID

`S0-006`

## Summary

Configured the repository-level PostgreSQL + Prisma foundation only. Added Prisma package configuration, a foundation `schema.prisma`, a Next.js-safe database client helper, install-time Prisma Client generation for clean CI environments, and database scripts without introducing product or identity models.

## Exact changed files

- `package.json`
- `pnpm-lock.yaml`
- `.env.example`
- `prisma/schema.prisma`
- `src/lib/db/client.ts`
- `src/lib/db/index.ts`
- `docs/execution/S0-006/HANDOFF.md`

## Prisma packages added and versions

- `prisma` `6.19.0`
- `@prisma/client` `6.19.0`

## Schema impact

- Added Prisma generator configuration only
- Added PostgreSQL datasource using `DATABASE_URL`
- Added no models, enums, relations or feature schema

## Migration impact

- No migration files created
- No destructive migration work performed

## API changes

None.

## Authorization changes

None.

## Environment variables

- `DATABASE_URL`

## Package scripts

- `postinstall`
- `db:generate`
- `db:migrate`
- `db:seed`
- `db:studio`

`db:push` was intentionally not added in S0-006 to avoid encouraging non-reviewable schema updates during foundation setup.

## Database helper behavior

- Uses the standard Prisma Client singleton pattern for Next.js development
- Avoids repeated `PrismaClient` instances during Next.js development via `globalThis` caching
- Does not cache through `globalThis` in production
- Contains no credentials
- Performs no database queries at module import time

## Tests and quality gates run

- `python scripts/verify-brand-assets.py`
- `pnpm.cmd db:generate`
- `pnpm.cmd lint`
- `pnpm.cmd typecheck`
- `pnpm.cmd test`
- `pnpm.cmd build`
- `node_modules/.bin/prisma.cmd generate`
- `node_modules/.bin/eslint.cmd .`
- `node_modules/.bin/tsc.cmd --noEmit`
- `node_modules/.bin/vitest.cmd run`
- `node_modules/.bin/next.cmd build`

## Exact results

- Original CI failure:
  - step: `pnpm typecheck`
  - error: `src/lib/db/client.ts(1,10): error TS2305: Module '"@prisma/client"' has no exported member 'PrismaClient'.`
- Root cause:
  - the CI workflow did not have an explicit repository-level Prisma Client generation guarantee before `typecheck`
  - `src/lib/db/client.ts` imports `PrismaClient` from generated `@prisma/client` typings
  - a clean checkout therefore depended on generated client artifacts existing already, which is not a safe CI assumption
- Exact fix:
  - added root `postinstall: "prisma generate"` in `package.json`
  - kept the workflow unchanged so `pnpm install --frozen-lockfile` now generates Prisma Client before `lint`, `typecheck`, `test`, and `build`
- `python scripts/verify-brand-assets.py` - success
- initial `pnpm.cmd db:generate` attempt - blocked by local `ERR_PNPM_IGNORED_BUILDS` policy before script execution
- initial `pnpm.cmd lint` attempt - blocked by local `ERR_PNPM_IGNORED_BUILDS` policy before script execution
- initial `pnpm.cmd typecheck` attempt - blocked by local `ERR_PNPM_IGNORED_BUILDS` policy before script execution
- initial `pnpm.cmd test` attempt - blocked by local `ERR_PNPM_IGNORED_BUILDS` policy before script execution
- initial `pnpm.cmd build` attempt - blocked by local `ERR_PNPM_IGNORED_BUILDS` policy before script execution
- final `pnpm.cmd db:generate` rerun - passed
- final `pnpm.cmd lint` rerun - passed
- final `pnpm.cmd typecheck` rerun - passed
- final `pnpm.cmd test` rerun - passed
- final `pnpm.cmd build` rerun - passed
- `node_modules/.bin/prisma.cmd generate` - passed with temporary session `DATABASE_URL` placeholder
- `node_modules/.bin/eslint.cmd .` - passed
- `node_modules/.bin/tsc.cmd --noEmit` - passed
- `node_modules/.bin/vitest.cmd run` - passed
- `node_modules/.bin/next.cmd build` - passed
- `next build` auto-modified `next-env.d.ts` and `tsconfig.json`; both were restored to their original repository content and no generated `tsconfig.tsbuildinfo` was kept

## Known limitations

- The schema intentionally contains no identity or product models in S0-006.
- `db:seed` is a foundation placeholder and will be replaced by real role seeding in S0-008.

## Follow-up risks

- S0-007 must add only approved identity models on top of this foundation.
- Local `pnpm` build-script policy may block standard command execution and require fallback validation reporting.

## Whether migrations were created

No.

## Whether any database-side command was executed

No database-side command was executed. Prisma client generation was run, but no migration, push, studio session or live database connection command was executed.

## Exact commit SHA

Not committed.
