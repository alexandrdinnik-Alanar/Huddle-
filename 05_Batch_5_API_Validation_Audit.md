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
