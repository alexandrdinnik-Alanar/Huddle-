# S0-009 HANDOFF

## Task ID

`S0-009`

## Summary

Implemented the Supabase auth skeleton foundation under `src/lib/auth/**` with browser and server client helpers, session lookup, repository auth types, and authenticated-user guard helpers. The implementation intentionally stops short of fabricating application-user resolution because the current merged repository does not yet contain an authoritative Supabase identity bridge or an authoritative persisted `onboardingCompleted` source.

This handoff reflects the architecture-corrected `S0-009` contract: `S0-009` is a Supabase auth/session skeleton only. Canonical application-user reconciliation is deferred to `P1-001`, and onboarding completion persistence/derivation is deferred to `P1-005`.

## Exact changed files

- `.env.example`
- `NEXT_TASK.md`
- `package.json`
- `pnpm-lock.yaml`
- `tasks/phase-0/S0-009.md`
- `docs/02-architecture/s0-009-auth-skeleton-resolution.md`
- `src/lib/auth/client.ts`
- `src/lib/auth/server.ts`
- `src/lib/auth/session.ts`
- `src/lib/auth/current-user.ts`
- `src/lib/auth/types.ts`
- `docs/execution/S0-009/HANDOFF.md`

## Packages added and exact versions

- `@supabase/ssr` `0.12.0`
- `@supabase/supabase-js` `2.110.0`

## Env vars added

- `NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY`

Existing database placeholder remains:

- `DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/huddle_dev?schema=public`

## Service-role key requirement

`SUPABASE_SERVICE_ROLE_KEY` was not required and was not added. The S0-009 skeleton uses only public Supabase client environment variables.

## Client helper behavior

`src/lib/auth/client.ts` exports `getSupabaseBrowserClient()`.

- browser-safe only
- uses `createBrowserClient(...)`
- reads only `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- caches a single browser client instance
- performs no privileged operations

## Server helper behavior

`src/lib/auth/server.ts` exports `getSupabaseServerClient()`.

- server-only module
- uses `createServerClient(...)`
- reads only `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- integrates with Next.js App Router cookie access via `next/headers`
- safely tolerates Server Component contexts where cookie writes are not permitted
- does not expose secrets to the client bundle
- does not introduce a custom session system

## `getSession` behavior

`src/lib/auth/session.ts` exports `getSession(): Promise<AuthSession | null>`.

- resolves the current Supabase session using `supabase.auth.getSession()`
- returns `null` when no session exists
- throws explicit `AuthError("SESSION_LOOKUP_FAILED", ...)` if Supabase session retrieval fails
- does not perform any application-user lookup
- does not mint custom tokens or cookies

## Original blocker

Before contract correction, `S0-009` could not truthfully complete because the prior task contract required:

- canonical Supabase identity to application `User` reconciliation
- role resolution from `User` / `UserRole` / `Role`
- revoked-role filtering
- `onboardingCompleted`

The merged repository did not provide sufficient accepted authority to implement those requirements safely in Sprint 0.

## Architecture decision and scope correction

Authoritative decision document:

- `docs/02-architecture/s0-009-auth-skeleton-resolution.md`

Corrected scope:

- keep `S0-009` as Supabase browser/server/session foundation only
- defer canonical application-user reconciliation to `P1-001`
- defer onboarding completion persistence/derivation to `P1-005`
- do not introduce `AuthIdentity` in `S0-009`
- do not use provider subject as canonical domain `User.id`
- do not use email matching as canonical identity mapping without future explicit authority

## `getCurrentUser` behavior

`src/lib/auth/current-user.ts` exports `getCurrentUser(): Promise<SupabaseAuthenticatedIdentity | null>`.

- uses Supabase server auth only
- verifies the authenticated user with `supabase.auth.getUser()`
- returns `null` when there is no authenticated Supabase user
- returns only the corrected safe identity shape when authenticated
- does not query Prisma
- does not resolve application `User`
- does not resolve roles
- does not resolve onboarding completion
- throws explicit `AuthError("AUTH_USER_LOOKUP_FAILED", ...)` only when Supabase authenticated-user lookup fails

## Safe identity shape after contract correction

Corrected `S0-009` requires only the safe authenticated Supabase identity surface that is directly available from Supabase session/user state.

Final shape:

- `id`
- `email`

This is not canonical application `User` data.

Exact nullability:

- `id: string`
- `email: string | null`

## Deferred items

Deferred to `P1-001`:

- canonical Supabase identity to application `User` reconciliation
- `AuthIdentity` implementation
- application-user role resolution from `User` / `UserRole` / `Role`
- revoked-role filtering

Deferred to `P1-005`:

- onboarding completion persistence
- onboarding completion derivation
- canonical completion semantics for future onboarding-dependent guards

## Supabase identity to app `User` mapping strategy and evidence

Status: blocked by authoritative-source gap in the merged repository.

Evidence:

- `docs/02-architecture/adr-register.csv`
  - `ADR-004` says Supabase Auth is the identity provider and application `User` is the canonical business identity.
- `docs/02-architecture/domain-entity-catalog.csv`
  - `User` implementation note: `Business identity; never use provider user id as domain foreign key.`
  - `AuthIdentity` is defined as the bridge with `provider, providerSubject, verifiedEmail/Phone metadata.`
- `prisma/schema.prisma`
  - contains `User`, `Role`, and `UserRole`
  - does not contain an `AuthIdentity` model or equivalent bridge currently available to this task

Result for corrected `S0-009`:

- do not fabricate a provider-user-id-to-`User` join
- do not alter schema or add migrations
- do not claim reconciliation exists in Sprint 0
- no canonical application-user reconciliation exists in `S0-009`

## `onboardingCompleted` resolution and evidence

Status: blocked by authoritative-source gap in the merged repository.

Evidence:

- `tasks/phase-0/S0-009.md` requires `onboardingCompleted` in the return shape
- `prisma/schema.prisma` does not contain `onboardingCompleted`
- no authoritative merged persistence or derivation source was found in the task-authority set

Result for corrected `S0-009`:

- do not invent storage
- do not infer onboarding state from unrelated fields
- remove `onboardingCompleted` from the Sprint 0 required safe-identity shape
- no `onboardingCompleted` resolution exists in `S0-009`

## Role resolution behavior

Role resolution does not exist in `S0-009`. It is explicitly deferred until canonical application-user reconciliation exists.

## Revoked role handling

Revoked-role filtering does not exist in `S0-009`. It is explicitly deferred until canonical application-user reconciliation exists.

## `requireUser` behavior

`requireUser()`:

- requires an authenticated Supabase identity
- throws `UnauthenticatedError` if no authenticated session exists
- delegates to `getCurrentUser()`
- returns only `SupabaseAuthenticatedIdentity`
- performs no application-user lookup
- performs no role or permission checks

## `requireActiveUser` behavior

`requireActiveUser()` is not exported as part of the final corrected `S0-009` API.

## Error handling

Defined error types:

- `AuthError`
- `UnauthenticatedError`

Error behavior:

- authentication failures are explicit
- session lookup failure is explicit
- authenticated-user lookup failure is explicit
- no provider tokens or secrets are leaked in errors
- no fake fallback user data is returned

## Schema impact

None.

## Migration impact

None.

## API changes

None.

## Authorization changes

None. This task does not implement permission helpers, role guards, or route protection.

## Security impact

- no secrets committed
- no service-role key added
- no custom password storage
- no custom token signing
- no custom session persistence
- no trust in client-provided roles
- no application-user reconciliation
- no role resolution
- no onboarding-completion inference

## Privacy impact

- only the required safe authenticated-identity shape is returned
- no raw provider metadata returned
- no session-token logging
- no PII logging introduced

## Tests and quality gates

### Canonical gates

- `python scripts/verify-brand-assets.py` - passed
- `pnpm.cmd lint` - passed
- `pnpm.cmd typecheck` - passed
- `pnpm.cmd test` - passed
- `pnpm.cmd build` - passed

Additional setup validation:

- Supabase browser helper present - passed
- Supabase server helper present - passed
- `getSession` present - passed
- `getCurrentUser` present - passed
- `requireUser` present - passed
- no `requireActiveUser` export in `S0-009` API - passed
- no Prisma import in `src/lib/auth/current-user.ts` - passed
- no `src/lib/db` import in `src/lib/auth/client.ts` - passed
- no service-role key usage in auth helpers - passed
- no `status` field in safe identity type - passed
- no `roles` field in safe identity type - passed
- no `onboardingCompleted` field in safe identity type - passed
- no `AuthIntegrationBlockedError` remains - passed
- no `Permission` / `RolePermission` work - passed
- no route guard work - passed
- server/client boundary respected in auth helpers - passed

## Current implementation status after contract correction

- browser client foundation is implemented
- server client foundation is implemented
- session retrieval is implemented
- safe authenticated-identity type is implemented
- `getCurrentUser()` is aligned to corrected `S0-009` scope
- `requireUser()` is aligned to corrected `S0-009` scope
- obsolete blocked app-user behavior has been removed from `src/lib/auth/**`

## Known limitations

- canonical application-user reconciliation is not implemented in `S0-009`
- onboarding completion is not implemented in `S0-009`
- role resolution and revoked-role filtering are not implemented in `S0-009`

## Follow-up risks

- implementing downstream authorization or route guards before the identity bridge exists would create incorrect assumptions
- inventing `onboardingCompleted` outside authoritative schema or source documents would silently expand domain behavior

## Exact commit SHA

`not committed`
