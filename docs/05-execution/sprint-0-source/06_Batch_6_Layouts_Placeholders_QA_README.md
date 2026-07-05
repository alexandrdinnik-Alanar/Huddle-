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
