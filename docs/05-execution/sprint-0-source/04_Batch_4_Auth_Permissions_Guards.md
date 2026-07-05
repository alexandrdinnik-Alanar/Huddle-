# Huddle Sprint 0 — Codex Execution Batch 4

## Scope

Batch 4 includes:

- `S0-009 — Create auth skeleton`
- `S0-010 — Create permission helpers`
- `S0-011 — Create route guards`

Goal: create the access-control foundation for Huddle.

## S0-009 — Supabase Auth skeleton

```text
Task ID: S0-009
Task Title: Create Supabase Auth skeleton

Context:
Huddle uses Supabase Auth. This task creates the auth foundation only. Do not build full signup/login UX and do not create custom auth logic.

Requirements:
1. Install/configure Supabase client packages if not already present.
2. Create auth helper files:
   - lib/auth/client.ts
   - lib/auth/server.ts
   - lib/auth/session.ts
   - lib/auth/current-user.ts
   - lib/auth/types.ts
3. Add environment placeholders to .env.example:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - SUPABASE_SERVICE_ROLE_KEY only if needed server-side, clearly marked as server-only
4. Create getSession() helper.
5. Create getCurrentUser() helper.
6. getCurrentUser() should return safe app user data: id, email, name, status, roles, onboardingCompleted.
7. Use the database User/UserRole/Role models to resolve app roles.
8. Create requireUser() helper.
9. Create requireActiveUser() helper.
10. Do not create real users.
11. Do not create admin credentials.
12. Do not build full auth pages.

Acceptance Criteria:
- Supabase client setup exists.
- getSession(), getCurrentUser(), requireUser(), requireActiveUser() exist.
- .env.example includes Supabase placeholders only.
- No secrets are committed.
- No custom password/session system is created.
- No fake users are created.
- Build/typecheck pass.
```

## S0-010 — Permission helpers

```text
Task ID: S0-010
Task Title: Create Huddle permission helper system

Context:
Huddle uses a multi-role permission model. For Sprint 0, implement permissions as a static code map. Do not create Permission or RolePermission database tables yet.

Required roles:
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

Create files:
- lib/permissions/roles.ts
- lib/permissions/permissions.ts
- lib/permissions/role-permissions.ts
- lib/permissions/helpers.ts
- lib/permissions/errors.ts

Create:
1. RoleKey type or enum matching Prisma RoleKey.
2. PermissionKey type.
3. rolePermissions map.
4. getUserPermissions(user)
5. hasRole(user, role)
6. hasAnyRole(user, roles)
7. hasPermission(user, permission)
8. requirePermission(user, permission)
9. requireAnyPermission(user, permissions)

Rules:
- PARENT gets app/family/marketplace/events/reports/saved/notifications self permissions.
- SELLER gets parent-like permissions plus own listing management.
- ORGANIZER gets parent-like permissions plus own event management.
- MODERATOR gets admin access, reports moderation and content moderation permissions, but no superadmin permissions.
- ADMIN gets moderator permissions plus user/admin/audit permissions.
- SUPER_ADMIN gets all admin plus superadmin permissions.
- PARTNER and MUNICIPALITY_USER are mostly empty/stub for Sprint 0.
- SYSTEM is explicit and not treated as normal user.

Acceptance Criteria:
- Static rolePermissions map exists.
- Permission helpers exist.
- Parent has app access.
- Seller can manage own listings.
- Organizer can manage own events.
- Moderator cannot manage roles.
- Admin can access admin operations.
- Super Admin can manage roles/settings.
- No database Permission table is created.
```

## S0-011 — Route guards

```text
Task ID: S0-011
Task Title: Create Huddle route guards

Context:
Huddle needs reusable route and access guards for public, app, seller, organizer, admin and super admin areas. Use the auth helpers from S0-009 and permission helpers from S0-010.

Create files:
- lib/guards/route-guards.ts
- lib/guards/ownership.ts
- lib/guards/status.ts

Required guards:
- requirePublic()
- requireAuth()
- requireCompletedOnboarding()
- requireRole(role)
- requireAnyRole(roles)
- requirePermission(permission)
- requireOwner(currentUserId, ownerId)
- requireModerator()
- requireAdmin()
- requireSuperAdmin()

Behavior:
- requireAuth() denies logged-out users.
- requireCompletedOnboarding() denies users without completed onboarding.
- requireRole() checks current user roles.
- requirePermission() checks permission map.
- requireOwner() checks resource ownership.
- requireModerator() allows MODERATOR, ADMIN, SUPER_ADMIN.
- requireAdmin() allows ADMIN and SUPER_ADMIN.
- requireSuperAdmin() allows SUPER_ADMIN only.
- Suspended users should be blocked from restricted actions through requireActiveUser() where relevant.

Protect route patterns:
- /app should require authenticated active user.
- /admin should require moderator/admin/super admin.
- /admin/settings should require super admin later.

Add simple usage examples in docs/sprint-0/route-guards.md.

Acceptance Criteria:
- All required guards exist.
- Guards use auth/permission helpers.
- /app route placeholder uses auth guard pattern or documented wrapper.
- /admin route placeholder uses admin guard pattern or documented wrapper.
- Parent cannot access admin route.
- Logged-out user cannot access app route.
- Moderator can access admin base but not super admin settings.
- Super Admin can access super admin guard.
- Build/typecheck pass.
```

## Batch 4 completion gate

```text
[ ] Supabase Auth skeleton exists
[ ] getSession() exists
[ ] getCurrentUser() exists
[ ] requireUser() exists
[ ] requireActiveUser() exists
[ ] static permission map exists
[ ] permission helpers exist
[ ] route guards exist
[ ] /app is protected or guard pattern is implemented
[ ] /admin is protected or guard pattern is implemented
[ ] parent cannot access admin
[ ] moderator cannot access superadmin guard
[ ] no custom auth system created
[ ] no secrets committed
[ ] no Permission/RolePermission tables created
[ ] build passes
[ ] typecheck passes
[ ] lint passes
```
