# HANDOFF - S0-007

## Task ID

`S0-007`

## Summary

Implemented the identity-base Prisma schema for `User`, `Role`, and `UserRole` on top of the S0-006 PostgreSQL and Prisma foundation. Added the required enums, relations, indexes, uniqueness constraints, and an explicit reviewable migration without introducing auth, permissions, or feature-domain models.

## Exact changed files

- `prisma/schema.prisma`
- `prisma/migrations/20260707_s0_007_identity_base_models/migration.sql`
- `docs/execution/S0-007/HANDOFF.md`

## Enums added

- `UserStatus`
- `RoleKey`

## Exact enum values

### `UserStatus`

- `ACTIVE`
- `PENDING_VERIFICATION`
- `SUSPENDED`
- `DELETED`

### `RoleKey`

- `PARENT`
- `SELLER`
- `ORGANIZER`
- `EXPERT`
- `PARTNER`
- `MUNICIPALITY_USER`
- `MODERATOR`
- `ADMIN`
- `SUPER_ADMIN`
- `SYSTEM`

## Models added

- `User`
- `Role`
- `UserRole`

## Exact model fields at high level

### `User`

- `id`
- `email`
- `emailVerifiedAt`
- `name`
- `avatarUrl`
- `status`
- `preferredLanguage`
- `createdAt`
- `updatedAt`
- `deletedAt`
- `roles`
- `assignedRoles`

### `Role`

- `id`
- `key`
- `name`
- `description`
- `createdAt`
- `updatedAt`
- `users`

### `UserRole`

- `id`
- `userId`
- `roleId`
- `assignedById`
- `assignedAt`
- `revokedAt`
- `user`
- `role`
- `assignedBy`

## Relations added

- `User.roles` -> `UserRole[]` for role assignments
- `User.assignedRoles` -> `UserRole[]` for assignment attribution history
- `Role.users` -> `UserRole[]` for role assignment membership
- `UserRole.user` -> `User`
- `UserRole.role` -> `Role`
- `UserRole.assignedBy` -> optional `User`

## Indexes added

- `User.status`
- `UserRole.userId`
- `UserRole.roleId`
- `UserRole.assignedById`

## Uniqueness constraints

- `User.email`
- `Role.key`

## Migration name/path

- `prisma/migrations/20260707_s0_007_identity_base_models/migration.sql`

## Whether migration was executed

No.

## Where migration was executed

Not executed against any database.

## Whether any database connection was used

No.

## Whether Prisma Client generation passed

Yes.

## Schema impact

- added `UserStatus` enum
- added `RoleKey` enum
- added `User` model
- added `Role` model
- added `UserRole` model
- added the required relations, indexes, and uniqueness constraints for identity-base role assignment structure

## Migration impact

- created an explicit reviewable SQL migration for S0-007 identity-base scope only
- no destructive migration actions were executed
- no schema reset was performed
- no production database connection was used

## API changes

None.

## Authorization changes

None.

## Privacy/security impact

- no secrets added
- no production credentials used
- no real personal data added
- no auth or permission logic added
- multi-role storage preserved without collapsing roles into a single field
- revocation history preserved through `revokedAt`

## Tests and quality gates

- `python scripts/verify-brand-assets.py`
- `pnpm.cmd db:generate`
- `pnpm.cmd lint`
- `pnpm.cmd typecheck`
- `pnpm.cmd test`
- `pnpm.cmd build`
- migration validation via `pnpm.cmd prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script --output prisma/migrations/20260707_s0_007_identity_base_models/migration.sql`

## Exact results

- `python scripts/verify-brand-assets.py` - success
- `pnpm.cmd db:generate` - success
- `pnpm.cmd lint` - success
- `pnpm.cmd typecheck` - success
- `pnpm.cmd test` - success
- `pnpm.cmd build` - success
- migration validation command - success
- `next build` auto-modified `next-env.d.ts` and `tsconfig.json`; both were restored from `HEAD`
- `tsconfig.tsbuildinfo` was removed after build validation

## Known limitations

- the migration was generated as explicit SQL from schema diff and was not applied to a live database in this task
- no seed data was introduced; role seeding belongs to `S0-008`

## Follow-up risks

- `S0-008` must seed `Role` rows that match the `RoleKey` enum exactly
- later auth and permission tasks must use this structure without collapsing role history
- later tasks must preserve the distinction between identity structure and authorization logic

## Exact commit SHA

`not committed`
