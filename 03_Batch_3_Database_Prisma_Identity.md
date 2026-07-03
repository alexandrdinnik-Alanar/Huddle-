# Huddle Sprint 0 — Codex Execution Batch 3

## Scope

Batch 3 includes:

- `S0-006 — Configure database and Prisma`
- `S0-007 — Implement User / Role / UserRole models`
- `S0-008 — Seed roles`

Goal: create the database and identity foundation for Huddle.

Do not build marketplace, events, family profile, reports, moderation, admin UI or product pages in this batch.

## Required enums

```text
UserStatus:
ACTIVE
PENDING_VERIFICATION
SUSPENDED
DELETED

RoleKey:
PARENT
SELLER
ORGANIZER
EXPERT
PARTNER
MUNICIPALITY_USER
MODERATOR
ADMIN
SUPER_ADMIN
SYSTEM
```

## S0-006 — Configure PostgreSQL and Prisma

```text
Task ID: S0-006
Task Title: Configure PostgreSQL and Prisma

Context:
Huddle uses PostgreSQL and Prisma. This task configures the database foundation only. Do not implement product feature models yet.

Technical decisions:
- Database: PostgreSQL
- ORM: Prisma
- Architecture: modular monolith
- Hosting later: Vercel
- Database hosting later: Supabase Postgres

Requirements:
1. Install and configure Prisma.
2. Create prisma/schema.prisma.
3. Configure PostgreSQL datasource using DATABASE_URL.
4. Configure Prisma client generator.
5. Add database client helper in lib/db/.
6. Add package scripts:
   - db:generate
   - db:migrate
   - db:push if useful for local development
   - db:seed
   - db:studio
7. Add DATABASE_URL to .env.example with placeholder value.
8. Do not add product models yet except those required in S0-007 if combined later.

Acceptance Criteria:
- Prisma is installed.
- prisma/schema.prisma exists.
- DATABASE_URL is referenced.
- Prisma client can be generated.
- Database client helper exists.
- .env.example includes DATABASE_URL placeholder.
- No secrets are committed.
- No marketplace/event/family/admin product models are added yet.
```

## S0-007 — User, Role, UserRole

```text
Task ID: S0-007
Task Title: Implement identity base models

Context:
Implement the identity foundation from Huddle Database Schema v1. This task only covers User, Role and UserRole.

Required models:

User:
- id: String primary key with cuid or uuid default
- email: String unique
- emailVerifiedAt: DateTime optional
- name: String optional
- avatarUrl: String optional
- status: UserStatus default PENDING_VERIFICATION
- preferredLanguage: String optional
- createdAt: DateTime default now
- updatedAt: DateTime updatedAt
- deletedAt: DateTime optional
- roles relation to UserRole

Role:
- id: String primary key with cuid or uuid default
- key: RoleKey unique
- name: String
- description: String optional
- createdAt: DateTime default now
- updatedAt: DateTime updatedAt
- users relation to UserRole

UserRole:
- id: String primary key with cuid or uuid default
- userId: String
- roleId: String
- assignedById: String optional
- assignedAt: DateTime default now
- revokedAt: DateTime optional
- user relation to User
- role relation to Role
- assignedBy relation to User optional

Requirements:
- Add indexes for User.status, UserRole.userId, UserRole.roleId, UserRole.assignedById.
- Support multi-role users.
- Preserve revoked role history using revokedAt.
- Generate migration.

Acceptance Criteria:
- User, Role and UserRole models exist.
- UserStatus and RoleKey enums exist.
- User email unique constraint exists.
- Role key unique constraint exists.
- User can have multiple roles.
- UserRole supports assignedById and revokedAt.
- Migration runs.
- Prisma client generates successfully.

Out of Scope:
- Permission model.
- RolePermission model.
- FamilyProfile.
- Marketplace.
- Events.
- Admin UI.
- Child profiles.
```

## S0-008 — Seed roles

```text
Task ID: S0-008
Task Title: Seed initial Huddle roles

Context:
Huddle uses a multi-role model. Seed core roles into the Role table. The seed must be safe to re-run.

Required roles:
- PARENT
- SELLER
- ORGANIZER
- EXPERT
- PARTNER
- MUNICIPALITY_USER
- MODERATOR
- ADMIN
- SUPER_ADMIN
- SYSTEM

Requirements:
1. Create prisma/seed.ts.
2. Use Prisma client.
3. Upsert roles by key.
4. Include readable role names and descriptions.
5. Make the seed idempotent.
6. Add or verify package script: db:seed.
7. Do not create real users.
8. Do not create admin credentials.
9. Do not create fake marketplace/events data.

Acceptance Criteria:
- prisma/seed.ts exists.
- Running seed creates all roles.
- Running seed twice does not duplicate roles.
- Role keys match RoleKey enum.
- No users are created.
- No fake product data is created.
```

## Batch 3 completion gate

```text
[ ] Prisma configured
[ ] DATABASE_URL placeholder exists
[ ] database client helper exists
[ ] UserStatus enum exists
[ ] RoleKey enum exists
[ ] User model exists
[ ] Role model exists
[ ] UserRole model exists
[ ] migration runs
[ ] Prisma client generates
[ ] role seed exists
[ ] seed creates all roles
[ ] seed is idempotent
[ ] no users seeded
[ ] no fake data seeded
[ ] no product models added prematurely
[ ] build passes
[ ] typecheck passes
[ ] lint passes
```
