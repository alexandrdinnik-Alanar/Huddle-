# Huddle Sprint 0 Codex Execution Pack — FULL



---

# Source: 00_README.md

# Huddle Sprint 0 Codex Execution Pack v1.0

## Purpose

This package contains the executable Codex task pack for Huddle Sprint 0.

Sprint 0 is a foundation sprint only. It creates the engineering base before any real product feature work.

## Locked technical decisions

| Area | Decision |
|---|---|
| Architecture | Modular monolith |
| Framework | Next.js + TypeScript |
| Database | PostgreSQL |
| ORM | Prisma |
| Auth | Supabase Auth |
| Database hosting | Supabase Postgres |
| Storage | Supabase Storage |
| Hosting | Vercel |
| Email | Resend later |
| Monitoring | Sentry later |
| Styling | Token-based / Tailwind-compatible system |
| Roles | Database-backed Role/UserRole |
| Permissions | Static code map in Sprint 0 |

## Files

1. `01_Batch_1_Repo_Routes.md` — repository and route groups
2. `02_Batch_2_Brand_Tokens_UI.md` — approved brand assets, design tokens, primitive UI
3. `03_Batch_3_Database_Prisma_Identity.md` — PostgreSQL, Prisma, User/Role/UserRole, role seed
4. `04_Batch_4_Auth_Permissions_Guards.md` — Supabase Auth skeleton, permissions, route guards
5. `05_Batch_5_API_Validation_Audit.md` — API response helpers, validation, AuditLog
6. `06_Batch_6_Layouts_Placeholders_QA_README.md` — layouts, placeholders, QA checklist, developer README
7. `Huddle_Sprint_0_Codex_Execution_Pack_FULL.md` — combined file
8. `manifest.json` — package inventory

## Execution order

Run batches in exact order:

```text
Batch 1 → Batch 2 → Batch 3 → Batch 4 → Batch 5 → Batch 6
```

Do not skip Batch 4. Auth, permissions and guards are mandatory before real app/admin/API work.

## Sprint 0 out of scope

Do not build:

- full marketplace UI;
- listing detail implementation;
- create listing flow;
- event registration;
- admin moderation UI;
- payments;
- partner dashboard;
- municipality dashboard;
- community feed;
- native mobile app;
- AI recommendations;
- fake production data.

## Brand rules

Use only approved Huddle assets.

Non-negotiable:

- do not generate a new Huddle logo;
- do not type “Huddle” as a logo;
- do not recolor the approved copper logo;
- do not attach the icon to the wordmark as a new lockup;
- icon may be used only as watermark, ornament, seal or decorative element.

## Sprint 0 final gate

Sprint 0 is complete only when:

```text
[ ] app starts locally
[ ] build passes
[ ] typecheck passes
[ ] lint passes
[ ] route groups exist
[ ] all canonical placeholders load
[ ] approved logo component exists
[ ] design tokens exist
[ ] primitive UI components exist
[ ] Prisma configured
[ ] migrations run
[ ] roles seed
[ ] auth skeleton exists
[ ] permission helpers exist
[ ] route guards exist
[ ] /app protected pattern exists
[ ] /admin protected pattern exists
[ ] API helpers exist
[ ] validation helper exists
[ ] AuditLog model/helper exists
[ ] base layouts exist
[ ] QA checklist exists
[ ] developer README complete
[ ] no out-of-scope product features built
```

## After Sprint 0

Next phase:

```text
Sprint 1 — Public Web + Auth + Onboarding + Family Core
```


---

# Source: 01_Batch_1_Repo_Routes.md

# Huddle Sprint 0 — Codex Execution Batch 1

## Scope

Batch 1 includes:

- `S0-001 — Initialize project repository`
- `S0-002 — Create route group architecture`

Goal: create the technical shell of Huddle without product feature implementation.

## S0-001 — Initialize project repository

### Codex prompt

```text
You are implementing Sprint 0 for Huddle, a privacy-first local family infrastructure platform.

Task ID: S0-001
Task Title: Initialize Huddle project repository

Context:
Huddle is a modular monolith with public web, authenticated family app, seller/organizer tools and admin console.
Do not build product features yet.

Technical decisions:
- Framework: Next.js + TypeScript
- Architecture: modular monolith
- Database: PostgreSQL
- ORM: Prisma
- Auth: Supabase Auth
- Hosting: Vercel
- Storage: Supabase Storage
- Email: Resend
- Monitoring: Sentry
- Styling: token-based styling / Tailwind-compatible system

Requirements:
1. Create a Next.js TypeScript application.
2. Configure package scripts: dev, build, lint, typecheck.
3. Configure linting and formatting.
4. Add .env.example.
5. Add .gitignore.
6. Add README skeleton.
7. Create initial folder structure:

app/
components/
modules/
lib/
prisma/
docs/

8. Inside docs/, create:

docs/product/
docs/architecture/
docs/api/
docs/security/
docs/figma/
docs/sprint-0/

9. Do not implement marketplace, events, auth, database schema or admin features yet.

Acceptance Criteria:
- App runs locally.
- TypeScript compile passes.
- Build command exists.
- Lint command exists.
- Typecheck command exists.
- README explains basic setup.
- .env.example exists.
- No secrets are committed.
- Folder structure exists.
- No product features are implemented.

Out of Scope:
- Marketplace UI.
- Events UI.
- Auth implementation.
- Database schema.
- Admin console implementation.
- Payment logic.
- Partner dashboard.
- Municipality dashboard.
```

### Review checklist

```text
[ ] App starts locally
[ ] No product features added
[ ] No fake Huddle logo generated
[ ] No database schema invented yet
[ ] No auth system invented yet
[ ] No marketplace/events pages beyond placeholders
[ ] .env.example has placeholders only
[ ] README is basic but clear
[ ] Folder structure matches plan
[ ] TypeScript passes
[ ] Build passes
[ ] Lint passes
```

## S0-002 — Create route group architecture

### Codex prompt

```text
Task ID: S0-002
Task Title: Create Huddle route group architecture

Context:
Use the Huddle Canonical Sitemap. Create route groups and placeholder pages only. Do not implement full feature logic.

Required route group structure:

app/
  (public)/
  (auth)/
  (app)/
  (admin)/
  api/

Create placeholder pages for these routes:

Public:
/
 /marketplace
 /events
 /activities
 /services
 /safety
 /privacy
 /family-guides/newborn
 /family-guides/toddler
 /family-guides/preschool
 /family-guides/school-age
 /family-guides/teen-family
 /seasonal-guides

Auth:
 /signup
 /login
 /onboarding

App:
 /app
 /app/search
 /app/saved
 /app/notifications
 /app/account
 /app/family
 /app/privacy
 /app/safety
 /app/marketplace
 /app/events

Admin:
 /admin
 /admin/reports
 /admin/listings
 /admin/events
 /admin/users
 /admin/audit-log

Each placeholder page should display:
- screen name
- route
- priority
- temporary placeholder notice
- short note: “Feature implementation is out of scope for Sprint 0.”

Acceptance Criteria:
- All listed routes load.
- Public routes are separated from auth/app/admin routes.
- App routes are under /app.
- Admin routes are under /admin.
- Placeholder content is clearly marked as temporary.
- No feature implementation is added.
- No database calls are added.
- No auth logic is added yet.

Security Note:
Admin route may exist as a placeholder in this task, but after S0-011 route guards are implemented, it must require moderator/admin access.
```

## Batch 1 completion gate

```text
[ ] Next.js app exists
[ ] folder structure exists
[ ] docs folders exist
[ ] route groups exist
[ ] all P0 placeholders load
[ ] build passes
[ ] typecheck passes
[ ] lint passes
[ ] no product features built
```


---

# Source: 02_Batch_2_Brand_Tokens_UI.md

# Huddle Sprint 0 — Codex Execution Batch 2

## Scope

Batch 2 includes:

- `S0-003 — Add approved brand assets and logo components`
- `S0-004 — Implement design token foundation`
- `S0-005 — Create primitive UI components`

Goal: create brand-safe visual and component foundation without building product screens.

## S0-003 — Approved brand assets and logo components

### Codex prompt

```text
Task ID: S0-003
Task Title: Add approved Huddle brand assets and logo components

Context:
Huddle must use approved brand assets only. Do not create, generate, type, redraw, or recolor any Huddle logo.

Required asset folders:
public/brand/logotype/
public/brand/icon/

Approved wordmark files to support:
- Huddle_logotype_copper_transparent_APPROVED.png
- Huddle_logotype_dark_green_transparent.png
- Huddle_logotype_white_transparent.png
- Huddle_logotype_copper_on_deep_green.png
- Huddle_logotype_dark_green_on_ivory.png
- Huddle_logotype_white_on_deep_green.png

Approved icon files to support:
- Huddle_icon_copper_transparent_SELECTED.png
- Huddle_icon_black_transparent.png
- Huddle_icon_white_transparent.png
- Huddle_icon_copper_on_deep_green.png
- Huddle_icon_dark_green_on_ivory.png
- Huddle_icon_white_on_deep_green.png

Create components:
components/huddle/BrandLogo.tsx
components/huddle/IconWatermark.tsx

BrandLogo requirements:
- Renders approved wordmark asset.
- Supports variants: copperTransparent, darkGreenTransparent, whiteTransparent, copperOnDeepGreen, darkGreenOnIvory, whiteOnDeepGreen.
- Supports alt text.
- Supports width/height or className.
- Does not render text logo.
- Does not recolor asset.

IconWatermark requirements:
- Renders approved Huddle icon asset as decorative element.
- Supports approved variants.
- Defaults to aria-hidden when decorative.
- Does not attach to BrandLogo as a lockup.
- Can be used as background/watermark/seal.

Acceptance Criteria:
- BrandLogo component exists.
- IconWatermark component exists.
- Components reference approved assets only.
- No SVG/text recreation of the logo.
- No CSS filter/recolor applied to logo assets.
- No generated logo.
- Components compile.
- README or docs note explains brand asset rules.
```

## S0-004 — Design token foundation

### Codex prompt

```text
Task ID: S0-004
Task Title: Implement Huddle design token foundation

Context:
Huddle UI must use semantic design tokens. Do not hardcode random colors in components.

Brand direction:
- warm ivory / cream base
- copper brand accent
- deep green primary CTA
- soft beige / sand / sage surfaces
- charcoal primary text
- calm, premium, Scandinavian family-tech tone

Create token files:
lib/design-tokens/tokens.ts
lib/design-tokens/css-variables.css

Required token groups:
1. Color
2. Typography
3. Spacing
4. Radius
5. Shadow
6. Breakpoints
7. Z-index

Create semantic color tokens:
- color.background.base
- color.background.soft
- color.background.sage
- color.background.deepGreen
- color.surface.card
- color.surface.elevated
- color.text.primary
- color.text.secondary
- color.text.muted
- color.text.inverse
- color.brand.copper
- color.brand.green
- color.cta.primary
- color.cta.primaryHover
- color.cta.secondary
- color.border.subtle
- color.border.strong
- color.status.success
- color.status.warning
- color.status.danger
- color.status.info

Acceptance Criteria:
- tokens.ts exists.
- css-variables.css exists.
- Tokens are semantic, not only raw values.
- Components can import/use tokens.
- No random SaaS blue as primary CTA.
- Deep green is primary action color.
- Copper is brand accent, not generic button color everywhere.
- Ivory/cream is base background.

Out of Scope:
- No dark mode.
- No theme editor.
- No production product screens.
```

### Starter token values

```text
brand.ivory: #F7F1E8
brand.ivorySoft: #FBF7EF
brand.copper: #B8734A
brand.deepGreen: #173F35
brand.sage: #DDE7D8
brand.sand: #E8D8C3
brand.beige: #EFE3D2
text.primary: #1F2A24
text.secondary: #5C655F
text.muted: #7D8580
text.inverse: #FFFFFF
border.subtle: #DDD1C0
status.success: #2F6F4E
status.warning: #B7791F
status.danger: #A33A2C
status.info: #3F6475
```

## S0-005 — Primitive UI components

### Codex prompt

```text
Task ID: S0-005
Task Title: Create primitive UI components

Context:
Create the foundation primitive components for Huddle. Use design tokens from S0-004. Do not build product-specific screens yet.

Create components in:
components/ui/

Required primitive components:
- Button
- Input
- Textarea
- Select
- Checkbox
- Switch
- Modal
- Toast
- Badge
- Card
- Tabs
- Skeleton
- EmptyState
- ErrorState

Requirements:
- Use semantic design tokens.
- Support className override where appropriate.
- Support accessible labels where appropriate.
- Support disabled state.
- Support loading state for Button.
- Support error state for form inputs.
- Support focus-visible states.
- Avoid random hardcoded styling.
- Avoid external UI kits unless already decided.
- Keep components simple and internal.

Button variants: primary, secondary, ghost, danger.
Button sizes: sm, md, lg.
Badge variants: neutral, success, warning, danger, info.
Card variants: default, elevated, soft.

Acceptance Criteria:
- All primitive components exist.
- Components compile.
- Components use tokens.
- Button has variants and sizes.
- Inputs support error state.
- Badge supports status variants.
- Card supports variants.
- EmptyState and ErrorState exist.
- Components do not implement marketplace/events/admin feature logic.

Out of Scope:
- No ListingCard.
- No EventCard.
- No AdminTable.
- No AppShell.
- No marketplace UI.
- No event UI.
```

## Batch 2 completion gate

```text
[ ] approved brand assets are placed in repo
[ ] BrandLogo component exists
[ ] IconWatermark component exists
[ ] design tokens exist
[ ] CSS variables exist
[ ] primitive UI components exist
[ ] components compile
[ ] build passes
[ ] typecheck passes
[ ] no product features built
[ ] no fake logo created
[ ] no logo recolor
```


---

# Source: 03_Batch_3_Database_Prisma_Identity.md

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


---

# Source: 04_Batch_4_Auth_Permissions_Guards.md

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


---

# Source: 05_Batch_5_API_Validation_Audit.md

# Huddle Sprint 0 — Codex Execution Batch 5

## Scope

Batch 5 includes:

- `S0-012 — Create API response and error helpers`
- `S0-013 — Create validation pattern`
- `S0-014 — Create audit helper and AuditLog base`

Goal: create backend foundation for safe, consistent API implementation.

Do not build real marketplace APIs, events APIs, reports APIs or admin APIs.

## Standard API response format

Success:

```json
{ "data": {}, "error": null }
```

List:

```json
{
  "data": {
    "items": [],
    "pagination": {
      "page": 1,
      "pageSize": 20,
      "total": 120,
      "hasMore": true
    }
  },
  "error": null
}
```

Error:

```json
{
  "data": null,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request body.",
    "details": {}
  }
}
```

Required error codes:

```text
UNAUTHORIZED
FORBIDDEN
NOT_FOUND
VALIDATION_ERROR
CONFLICT
RATE_LIMITED
RESOURCE_REMOVED
RESOURCE_UNAVAILABLE
OWNERSHIP_REQUIRED
STATUS_NOT_ALLOWED
SUSPENDED_USER
MODERATION_REQUIRED
SERVER_ERROR
```

## S0-012 — API response and error helpers

```text
Task ID: S0-012
Task Title: Create standard API response and error helpers

Context:
Huddle needs consistent API responses before implementing real endpoints. This task creates reusable response and error helpers only. Do not build product APIs yet.

Create files:
- lib/api/response.ts
- lib/api/errors.ts
- lib/api/pagination.ts
- lib/api/types.ts
- docs/sprint-0/api-response-format.md

Create helpers:
- apiSuccess(data, init?)
- apiList(items, pagination, init?)
- apiError(code, message, details?, status?)
- handleApiError(error)
- createPagination({ page, pageSize, total })

Requirements:
1. Use consistent data/error envelope.
2. Use appropriate HTTP status codes.
3. Ensure error codes are typed.
4. Avoid leaking raw internal errors to clients.
5. Include examples in docs/sprint-0/api-response-format.md.
6. Add one placeholder test/example route only if useful, but do not build real product API.

Acceptance Criteria:
- API response helpers exist.
- Error code constants/types exist.
- Pagination helper exists.
- Error response format is consistent.
- Server errors do not expose stack traces to clients.
- Documentation exists.
- Build/typecheck pass.
```

## S0-013 — Validation pattern

```text
Task ID: S0-013
Task Title: Create validation schema pattern

Context:
Huddle needs reusable request validation before implementing real APIs and forms. Use schema-based validation. Do not build product flows yet.

Recommended library:
- Zod

Create files:
- lib/validation/validate.ts
- lib/validation/errors.ts
- lib/validation/schemas/example-profile.schema.ts
- lib/validation/schemas/example-listing.schema.ts
- docs/sprint-0/validation-pattern.md

Requirements:
1. Install/configure Zod if not already present.
2. Create validateRequestBody(schema, body) helper.
3. Create formatValidationError(error) helper.
4. Create validation result type.
5. Create example profile update schema: name optional string, preferredLanguage optional string.
6. Create example listing schema as placeholder only: title, description, priceAmount optional, categoryId, approximateArea optional, city optional, country optional.
7. Do not create real listing API.
8. Do not create real profile API.
9. Validation errors must map to API error code VALIDATION_ERROR.
10. Add documentation showing how future APIs should use validation.

Security / Privacy Notes:
- Listing example must not include exact pickup address.
- Do not add child name, child birthday, school or sensitive child data fields.
```

## S0-014 — AuditLog model and audit helper

```text
Task ID: S0-014
Task Title: Create AuditLog model and audit helper

Context:
Huddle requires audit logging for future admin, moderation, privacy and role actions. This task creates the AuditLog base model and helper only. Do not build admin moderation features yet.

Database:
- PostgreSQL
- Prisma

Add Prisma model:

AuditLog:
- id: String primary key with cuid or uuid default
- actorId: String optional
- actorRole: String optional
- action: String
- targetType: String
- targetId: String optional
- metadata: Json optional
- ipAddress: String optional
- userAgent: String optional
- createdAt: DateTime default now

Relations:
- actorId may relate to User if practical, but actorId must also support system actions.
- Do not make actorId required because SYSTEM/background actions may exist.

Indexes:
- actorId
- action
- targetType + targetId
- createdAt

Create files:
- lib/audit/audit.ts
- lib/audit/types.ts
- docs/sprint-0/audit-logging.md

Create helper:
createAuditLog({ actorId, actorRole, action, targetType, targetId, metadata, requestContext })

Requirements:
- Add AuditLog model to Prisma schema.
- Generate migration.
- Create createAuditLog() helper.
- Helper should handle system actor.
- Helper should minimize sensitive metadata.
- Helper should not throw in a way that breaks user-facing action unless explicitly configured.
- Document when audit must be used later.
- Do not build admin audit UI yet.

Security / Privacy Notes:
- Do not store raw sensitive personal data in metadata by default.
- Do not log child data.
- Do not log exact addresses.
- Do not expose audit logs publicly.
```

## Batch 5 completion gate

```text
[ ] API response helpers exist
[ ] error codes exist
[ ] pagination helper exists
[ ] validation helper exists
[ ] validation error formatter exists
[ ] example schemas exist
[ ] AuditLog model exists
[ ] AuditLog migration runs
[ ] createAuditLog() exists
[ ] audit helper supports system actor
[ ] docs exist for API response / validation / audit
[ ] no real product APIs built
[ ] no audit UI built
[ ] build passes
[ ] typecheck passes
[ ] lint passes
```


---

# Source: 06_Batch_6_Layouts_Placeholders_QA_README.md

# Huddle Sprint 0 — Codex Execution Batch 6

## Scope

Batch 6 includes:

- `S0-015 — Create base layouts`
- `S0-016 — Create canonical placeholder pages`
- `S0-017 — Create Sprint 0 QA checklist`
- `S0-018 — Create developer README`

Goal: close Sprint 0 by creating layout foundations, canonical placeholders, QA checklist and developer setup documentation.

## S0-015 — Base layouts

```text
Task ID: S0-015
Task Title: Create base layouts for Huddle

Context:
Create layout foundations for Huddle Sprint 0. Use existing design tokens, primitive UI components and approved BrandLogo component. Do not build product features.

Create files:
- components/layout/PublicLayout.tsx
- components/layout/AuthLayout.tsx
- components/layout/AppLayout.tsx
- components/layout/AdminLayout.tsx

Optional supporting files:
- components/layout/PublicHeader.tsx
- components/layout/PublicFooter.tsx
- components/layout/AppNavigation.tsx
- components/layout/AdminSidebar.tsx
- components/layout/AdminHeader.tsx
- components/layout/index.ts

Requirements:
1. PublicLayout uses BrandLogo, public navigation placeholder, footer placeholder, design tokens.
2. AuthLayout uses BrandLogo, centered auth content area, privacy/trust note placeholder.
3. AppLayout provides authenticated app shell, top bar placeholder, bottom navigation placeholder, safety/privacy entry point placeholder.
4. AdminLayout provides admin shell, admin sidebar placeholder, admin header placeholder, audit/security note placeholder.
5. All layouts accept children.
6. All layouts use token-based styling.
7. Do not use generated logos.
8. Do not implement real product features.

Acceptance Criteria:
- PublicLayout, AuthLayout, AppLayout, AdminLayout exist and compile.
- Layouts use BrandLogo where appropriate.
- Layouts use design tokens.
- App layout is visually distinct from public layout.
- Admin layout is visually distinct from app layout.
- No real marketplace/events/admin feature UI is built.
```

## S0-016 — Canonical placeholder pages

```text
Task ID: S0-016
Task Title: Create canonical placeholder pages

Context:
Create Sprint 0 placeholder pages for canonical Huddle routes. Use layouts from S0-015. Do not implement product features.

Public routes:
- /
- /marketplace
- /events
- /activities
- /services
- /safety
- /privacy
- /family-guides/newborn
- /family-guides/toddler
- /family-guides/preschool
- /family-guides/school-age
- /family-guides/teen-family
- /seasonal-guides

Auth routes:
- /signup
- /login
- /onboarding

App routes:
- /app
- /app/search
- /app/saved
- /app/notifications
- /app/account
- /app/family
- /app/privacy
- /app/safety
- /app/marketplace
- /app/events

Admin routes:
- /admin
- /admin/reports
- /admin/listings
- /admin/events
- /admin/users
- /admin/audit-log

Each placeholder page must display:
- screen name
- route
- priority
- build mode
- surface
- status
- Sprint 0 placeholder notice
- “Feature implementation is out of scope for Sprint 0.”

Layout mapping:
- Public routes use PublicLayout.
- Auth routes use AuthLayout.
- App routes use AppLayout.
- Admin routes use AdminLayout.

Security note:
If route guards are ready, /app should use auth guard pattern and /admin should use admin/moderator guard pattern. If not fully wired yet, add TODO comments referencing S0-011 guard helpers.
```

## S0-017 — Sprint 0 QA checklist

```text
Task ID: S0-017
Task Title: Create Sprint 0 QA checklist

Create file:
- docs/sprint-0/qa-checklist.md

The checklist must cover:
1. Repository: app starts, build/lint/typecheck pass, no secrets committed.
2. Routes: public/auth/app/admin routes load and route groups are correct.
3. Brand: approved BrandLogo/IconWatermark, no generated logo, no recolor, tokens available.
4. UI foundation: primitive components and states exist.
5. Database: Prisma, DATABASE_URL placeholder, User/Role/UserRole, migration, idempotent role seed.
6. Auth and permissions: Supabase skeleton, getCurrentUser, requireUser, permission map, route guards.
7. API foundation: response helpers, error codes, validation helper, AuditLog, audit helper.
8. Scope control: no marketplace/events/admin moderation/payments/partner/municipality features.
9. Known blockers: Supabase credentials, database URL, Vercel setup, Sentry DSN, Resend API key.

Acceptance Criteria:
- QA checklist exists.
- Checklist is detailed enough for manual review.
- Checklist includes pass/fail format.
- Checklist includes rejection criteria.
- Checklist includes Sprint 1 readiness gate.
```

## S0-018 — Developer README

```text
Task ID: S0-018
Task Title: Create developer README

Create or update:
- README.md

README must include:
1. Project overview.
2. Technical stack.
3. Setup steps.
4. Scripts.
5. Environment variables.
6. Folder structure.
7. Route architecture.
8. Brand rules.
9. Permission model summary.
10. Privacy / safety rules.
11. Sprint 0 scope.
12. Out of scope.
13. Sprint 1 readiness.

Acceptance Criteria:
- README.md exists.
- Setup instructions are clear.
- Scripts are documented.
- Env vars are documented.
- Brand rules are included.
- Permission model is summarized.
- Privacy/safety rules are included.
- Sprint 0 scope and out-of-scope are explicit.
- README does not imply product features are already built.
```

## Sprint 0 final gate

```text
[ ] app starts locally
[ ] build passes
[ ] typecheck passes
[ ] lint passes
[ ] route groups exist
[ ] placeholders load
[ ] approved logo component exists
[ ] design tokens exist
[ ] primitive UI components exist
[ ] Prisma configured
[ ] migrations run
[ ] roles seed
[ ] auth skeleton exists
[ ] permission helpers exist
[ ] route guards exist
[ ] /app protected pattern exists
[ ] /admin protected pattern exists
[ ] API helpers exist
[ ] validation helper exists
[ ] AuditLog model/helper exists
[ ] base layouts exist
[ ] QA checklist exists
[ ] README complete
[ ] no out-of-scope product features built
```
