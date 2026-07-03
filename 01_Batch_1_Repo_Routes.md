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
