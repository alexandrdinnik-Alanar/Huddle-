# S0-010 HANDOFF

## Task ID

`S0-010`

## Summary

Implemented the Sprint 0 static permission-helper foundation under `src/lib/permissions/**` using explicit `PermissionKey` values, a deterministic static `rolePermissions` map, pure permission evaluators, and focused unit coverage. The implementation respects the corrected `S0-009` boundary by operating only on explicit trusted role-bearing input and by avoiding auth identity mapping, app-user reconciliation, Prisma queries, and route guards.

## Exact changed files

- `src/lib/permissions/errors.ts`
- `src/lib/permissions/helpers.ts`
- `src/lib/permissions/index.ts`
- `src/lib/permissions/permissions.ts`
- `src/lib/permissions/role-permissions.ts`
- `src/lib/permissions/roles.ts`
- `tests/unit/permissions.test.ts`
- `docs/execution/S0-010/HANDOFF.md`

## Exact PermissionKey values

- `app.access`
- `family.self`
- `marketplace.self`
- `events.self`
- `reports.self`
- `saved.self`
- `notifications.self`
- `listings.own.manage`
- `events.own.manage`
- `admin.access`
- `reports.moderate`
- `content.moderate`
- `users.manage`
- `admin.manage`
- `audit.read`
- `roles.manage`
- `settings.manage`

## Every RoleKey and its treatment

- `PARENT`: explicit baseline self permissions for app/family/marketplace/events/reports/saved/notifications.
- `SELLER`: inherits parent-like baseline plus `listings.own.manage`.
- `ORGANIZER`: inherits parent-like baseline plus `events.own.manage`.
- `EXPERT`: explicit empty/stub permission set due missing explicit Sprint 0 permission rules.
- `PARTNER`: explicit empty/stub permission set per Sprint 0 source.
- `MUNICIPALITY_USER`: explicit empty/stub permission set per Sprint 0 source.
- `MODERATOR`: `admin.access`, `reports.moderate`, `content.moderate`; no superadmin-only permissions.
- `ADMIN`: moderator permissions plus `users.manage`, `admin.manage`, `audit.read`; no superadmin-only permissions.
- `SUPER_ADMIN`: all admin permissions plus `roles.manage`, `settings.manage`.
- `SYSTEM`: explicit empty/special-handling permission set; not treated as a normal interactive user and not granted all permissions by default.

## EXPERT handling and source ambiguity

`EXPERT` is present in the required `RoleKey` set from Sprint 0 source, but the same source section does not define explicit permission rules for it. The narrowest safe treatment was chosen:

- `EXPERT` is explicitly accounted for
- `EXPERT` receives an empty/stub permission set in `S0-010`
- no expert-specific permissions were invented from intuition

Evidence source:

- `docs/05-execution/sprint-0-source/Huddle_Sprint_0_Codex_Execution_Pack_FULL.md`

## rolePermissions mapping summary

- static code map only
- `RoleKey -> readonly PermissionKey[]`
- deterministic and environment-independent
- no DB lookup
- no network lookup
- no mutable global state

## Helper functions implemented

- `getUserPermissions(user)`
- `hasRole(user, role)`
- `hasAnyRole(user, roles)`
- `hasPermission(user, permission)`
- `requirePermission(user, permission)`
- `requireAnyPermission(user, permissions)`

## Input shape

Permission helpers operate on:

```ts
{
  roles: readonly RoleKey[];
}
```

The helpers do not accept `SupabaseAuthenticatedIdentity` and do not imply canonical app-user reconciliation.

## Multi-role aggregation behavior

- permission sets are aggregated by union across all supplied roles
- duplicate roles do not duplicate permissions
- unknown roles grant no permissions

## Deduplication behavior

- deduplication is handled with a `Set`
- output contains no duplicate `PermissionKey` values

## Stable ordering behavior

- output ordering is deterministic
- role traversal uses a canonical `ALL_ROLE_KEYS` order
- per-role permission arrays are explicit and stable
- permission union preserves first-seen order within the canonical traversal

## Error types

- `PermissionError`
- `MissingPermissionError`
- `MissingAnyPermissionError`

## Empty-list semantics

- `hasAnyRole(user, [])` returns `false`
- `requireAnyPermission(user, [])` throws `MissingAnyPermissionError`

## S0-009 architecture-boundary compliance

- no `src/lib/auth/**` imports
- no use of `SupabaseAuthenticatedIdentity`
- no app-user reconciliation
- no auth identity mapping
- no onboarding completion logic
- no role loading from auth/current-user helpers
- no Prisma queries
- no route guards

## Schema impact

None.

## Migration impact

None.

## API changes

None.

## Authorization changes

Introduces only pure static permission evaluation helpers. No route, middleware, UI, or API enforcement is implemented in `S0-010`.

## Security impact

- no arbitrary string roles are trusted by design intent
- unknown roles do not grant permissions
- `MODERATOR` and `ADMIN` do not receive superadmin-only permissions
- `SYSTEM` is not treated as an implicit all-powerful normal role
- no secrets
- no PII logging

## Tests and quality gates

### Canonical gates

- `python scripts/verify-brand-assets.py` - passed
- `pnpm.cmd lint` - passed
- `pnpm.cmd typecheck` - passed
- `pnpm.cmd test` - passed
- `pnpm.cmd build` - passed

### Task-specific validation

- every current `RoleKey` accounted for - passed
- `PermissionKey` values explicit - passed
- `rolePermissions` map deterministic - passed
- multi-role aggregation deduplicates - passed
- stable output ordering - passed
- unknown roles do not grant permissions - passed
- `MODERATOR` has no superadmin-only permissions - passed
- `ADMIN` has no superadmin-only permissions unless explicitly sourced - passed
- `SUPER_ADMIN` contains admin permissions plus superadmin-only permissions - passed
- `SYSTEM` is not implicit all-powerful normal role - passed
- no `Permission` model - passed
- no `RolePermission` model - passed
- no Prisma queries in permission helpers - passed
- no `src/lib/auth` dependency - passed
- no route guard work - passed
- no feature code introduced - passed

## Exact results

- unit coverage added for `RoleKey` accounting, explicit `PermissionKey` values, deterministic aggregation, empty-list semantics, unknown-role handling, and role-boundary checks
- all required checks passed locally

## Known limitations

- `EXPERT` remains source-ambiguous and is intentionally stubbed with no permissions
- `PARTNER`, `MUNICIPALITY_USER`, and `SYSTEM` remain minimal/stub in Sprint 0
- no route enforcement or runtime role loading exists in this task

## Follow-up risks

- future work must not treat these helpers as role loaders or auth guards
- if later authority defines `EXPERT`, `PARTNER`, `MUNICIPALITY_USER`, or `SYSTEM` permissions, the static map must be updated deliberately
- `S0-011` must not assume more than this static evaluator layer provides

## Exact commit SHA

`not committed`
