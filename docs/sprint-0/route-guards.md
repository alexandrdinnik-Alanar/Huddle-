# Route Guards

S0-011 provides server-compatible guard primitives without inventing unresolved identity,
role, status, or onboarding infrastructure.

## Architecture boundaries

S0-009's `requireUser()` proves only that a Supabase identity exists. Its result contains
the provider subject id and email; it is not a canonical application `User`, and its id
must not be used as a domain `User.id`. S0-011 performs no app-user reconciliation,
email matching, role loading, active-status loading, or onboarding loading.

S0-010 permission helpers are pure evaluators. Role and permission guards accept an
explicit trusted `PermissionSubject` shaped as `{ roles: readonly RoleKey[] }`.
The trusted runtime source of those application roles is not implemented yet.

## Guard behavior

- `requirePublic()` has no prerequisite and no redirect behavior.
- `requireAuth()` delegates to S0-009 `requireUser()` and returns only its authenticated
  Supabase identity.
- `requireRole()` and `requireAnyRole()` check exact `RoleKey` membership. An empty
  requested-role list is denied.
- `requirePermission()` delegates to S0-010's pure permission guard.
- `requireModerator()` accepts `MODERATOR`, `ADMIN`, or `SUPER_ADMIN`.
- `requireAdmin()` accepts `ADMIN` or `SUPER_ADMIN`.
- `requireSuperAdmin()` accepts only `SUPER_ADMIN`.
- `SYSTEM` has no privileged bypass.
- `requireOwner()` compares two explicit trusted identifiers. Callers must supply
  identifiers from the same canonical domain namespace; passing a Supabase subject as a
  domain owner id is prohibited.
- `requireStatus()` only checks an explicit trusted, pre-resolved `UserStatus`. It does
  not resolve a user or load status.
- `requireCompletedOnboarding()` always throws a deferred-guard error. Authoritative
  onboarding state and completion semantics remain deferred to P1-005.
- `requireActiveUser()` does not exist. Runtime active-user resolution remains deferred.

## Server-side patterns

An `/app` server boundary may call `await requireAuth()`. This is authentication-only;
it does not establish roles, active status, onboarding completion, or canonical app-user
identity.

An `/admin` server boundary may eventually obtain trusted, pre-resolved application
roles from an authoritative server source and pass that subject to `requireModerator()`
or `requireAdmin()`. That runtime role source is not implemented in S0-011, so no actual
admin route is wired.

An `/admin/settings` server boundary may eventually pass the same kind of authoritative
subject to `requireSuperAdmin()`. It must not derive roles from Supabase metadata,
localStorage, request bodies, or other client-controlled state.

Privileged reads, mutations, and route access require server-authoritative enforcement.
Client-side checks may improve the user experience, but they are never authorization.

## Current limitations

S0-011 does not implement canonical identity reconciliation (P1-001), runtime role
resolution, active-user resolution, or onboarding state (P1-005). The public guard is
therefore intentionally a no-op rather than a redirect policy, and route trees remain
unchanged.
