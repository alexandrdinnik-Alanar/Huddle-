# S0-011 Handoff

## Task

- ID: `S0-011`
- Title: `Create route guards`
- Commit: `not committed`

## Summary

Added a fail-closed route-guard foundation that preserves the corrected S0-009
authentication-only boundary and S0-010 pure-permission boundary. No routes were wired,
and no identity reconciliation, role loading, active-user resolution, or onboarding
state was invented.

## Changed files

- `src/lib/guards/errors.ts`
- `src/lib/guards/index.ts`
- `src/lib/guards/ownership.ts`
- `src/lib/guards/route-guards.ts`
- `src/lib/guards/status.ts`
- `tests/unit/route-guards.test.ts`
- `docs/sprint-0/route-guards.md`
- `docs/execution/S0-011/HANDOFF.md`

## Guard classification and signatures

| Original guard | Classification | Signature / treatment |
| --- | --- | --- |
| `requirePublic` | Implemented now | `requirePublic(): void` |
| `requireAuth` | Implemented now | `requireAuth(): Promise<SupabaseAuthenticatedIdentity>` |
| `requireCompletedOnboarding` | Deferred | `requireCompletedOnboarding(): never` throws `DeferredGuardError` |
| `requireRole` | Explicit trusted role subject | `(subject: PermissionSubject, role: RoleKey): void` |
| `requireAnyRole` | Explicit trusted role subject | `(subject: PermissionSubject, roles: readonly RoleKey[]): void` |
| `requirePermission` | Explicit trusted role subject | `(subject: PermissionSubject, permission: PermissionKey): void` |
| `requireOwner` | Pure trusted comparison | `(trustedActorOwnerId: string, trustedResourceOwnerId: string): void` |
| `requireModerator` | Explicit trusted role subject | `(subject: PermissionSubject): void` |
| `requireAdmin` | Explicit trusted role subject | `(subject: PermissionSubject): void` |
| `requireSuperAdmin` | Explicit trusted role subject | `(subject: PermissionSubject): void` |

The additional pure status assertion is
`requireStatus(trustedStatus: UserStatus, allowedStatuses: readonly UserStatus[]): void`.
It is not active-user resolution.

## Semantics

- Authentication: `requireAuth` composes S0-009 `requireUser` and proves only a
  Supabase identity. It does not claim canonical app-user, role, status, or onboarding
  semantics.
- Public access: `requirePublic` is a no-op because no authoritative redirect policy
  exists.
- Roles: callers must supply a trusted `PermissionSubject` containing exact `RoleKey`
  values. No session, auth metadata, or database loading occurs. Empty role lists deny.
- Permissions: `requirePermission` directly composes S0-010's pure evaluator and reuses
  its `MissingPermissionError`.
- Ownership: `requireOwner` compares non-empty identifiers supplied from the same
  trusted canonical domain namespace. It does not load resources and does not equate a
  provider subject with domain `User.id`.
- Status: `requireStatus` asserts only an already trusted, pre-resolved `UserStatus`.
  It does not load a user or status.
- Onboarding: `requireCompletedOnboarding` explicitly fails as deferred pending P1-005.
  No fake default or inferred state is used.
- Active user: no `requireActiveUser` was created.

## Privilege boundaries

- Moderator: `MODERATOR`, `ADMIN`, `SUPER_ADMIN`
- Admin: `ADMIN`, `SUPER_ADMIN`
- Super-admin: `SUPER_ADMIN` only
- `SYSTEM`: denied by all three privileged guards; no bypass exists

Errors are deterministic and contain no PII: `GuardUnauthenticatedError`,
`MissingRoleError`, `MissingAnyRoleError`, `OwnershipDeniedError`,
`ModeratorDeniedError`, `AdminDeniedError`, `SuperAdminDeniedError`,
`StatusNotAllowedError`, and `DeferredGuardError`.

## Architecture and security impact

- S0-009 compliance: no canonical app-user claim, provider/domain-id equivalence, email
  reconciliation, role loading, status loading, or onboarding loading.
- S0-010 compliance: permission evaluation remains pure and requires an explicit trusted
  role-bearing subject.
- Authorization: new pure server-compatible checks; privileged enforcement must remain
  server-authoritative. Client checks are UX only.
- Route wiring: none.
- Schema impact: none.
- Migration impact: none.
- Database query impact: none.
- API changes: exports added under `src/lib/guards`.
- Security: guards fail closed; arbitrary role strings, Supabase metadata authorization,
  client-only authorization, and `SYSTEM` bypass are not accepted.

## Tests and quality gates

Focused tests cover authentication success/denial, exact and any-role checks, empty-list
denial, permission composition, all moderator/admin/super-admin boundaries, `SYSTEM`
denial, ownership equality/mismatch and provider/domain mismatch, trusted status
assertion, and deferred onboarding.

Results:

- `python scripts/verify-brand-assets.py`: passed (`repo_verified`, 12 records)
- `pnpm lint`: equivalent repository binary passed with no findings
- `pnpm typecheck`: equivalent repository binary passed with no findings
- `pnpm test`: equivalent repository binary passed (7 files, 44 tests)
- `pnpm build`: equivalent repository binary passed (54 pages generated)
- `git diff --check`: passed

The desktop runtime's `pnpm.cmd` wrapper refreshed `node_modules` but stopped before
running package scripts because pnpm reported ignored dependency build scripts. The same
locked, installed repository tools were then run directly from `node_modules/.bin` and
all passed. The wrapper-created `pnpm-workspace.yaml` was removed.

## Known limitations and follow-up risks

The authoritative runtime source for canonical application identity and trusted
application roles does not exist yet. P1-001 must establish identity reconciliation
before provider identities can map to domain users. P1-005 must establish onboarding
state. Until then, privileged route patterns are documentation only, active-user
enforcement remains deferred, and callers must not manufacture trusted subjects from
client-controlled data or Supabase metadata.
