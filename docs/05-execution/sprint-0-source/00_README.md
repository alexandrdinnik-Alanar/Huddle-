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
