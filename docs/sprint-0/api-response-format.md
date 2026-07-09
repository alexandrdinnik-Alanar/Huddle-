# Huddle Sprint 0 API Response Format

## Purpose

S0-012 defines a reusable API response foundation before real product endpoints are implemented.

This task does not create marketplace, event, report, admin, family, community, messaging, booking, or payment APIs.

## Success envelope

```json
{
  "data": {
    "id": "item-1"
  },
  "error": null
}
```

Use `apiSuccess(data, init?)`.

## List envelope

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

Use `apiList(items, pagination, init?)`.

Pagination metadata is created with:

```ts
createPagination({ page, pageSize, total })
```

Inputs must be safe integers. `page >= 1`, `pageSize >= 1`, and `total >= 0`.

## Error envelope

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

Use `apiError(code, message, details?, status?)` for explicit client-safe errors.

## Required error codes

- `UNAUTHORIZED`
- `FORBIDDEN`
- `NOT_FOUND`
- `VALIDATION_ERROR`
- `CONFLICT`
- `RATE_LIMITED`
- `RESOURCE_REMOVED`
- `RESOURCE_UNAVAILABLE`
- `OWNERSHIP_REQUIRED`
- `STATUS_NOT_ALLOWED`
- `SUSPENDED_USER`
- `MODERATION_REQUIRED`
- `SERVER_ERROR`

## HTTP status policy

| Error code | HTTP status |
| --- | ---: |
| `UNAUTHORIZED` | 401 |
| `FORBIDDEN` | 403 |
| `NOT_FOUND` | 404 |
| `VALIDATION_ERROR` | 400 |
| `CONFLICT` | 409 |
| `RATE_LIMITED` | 429 |
| `RESOURCE_REMOVED` | 410 |
| `RESOURCE_UNAVAILABLE` | 503 |
| `OWNERSHIP_REQUIRED` | 403 |
| `STATUS_NOT_ALLOWED` | 409 |
| `SUSPENDED_USER` | 403 |
| `MODERATION_REQUIRED` | 403 |
| `SERVER_ERROR` | 500 |

## Unknown errors

Use `handleApiError(error)` at a future server endpoint boundary.

Recognized `ApiError` instances preserve their explicit safe code, message, details, and status.

Unknown values fail closed to:

```json
{
  "data": null,
  "error": {
    "code": "SERVER_ERROR",
    "message": "An unexpected server error occurred."
  }
}
```

Unknown errors do not expose raw messages, stack traces, tokens, secrets, internal filesystem paths, database URLs, Prisma error objects, Supabase error objects, or arbitrary thrown objects.

## Example future usage

```ts
import { ApiError, apiSuccess, handleApiError } from "@/lib/api";

export async function GET(): Promise<Response> {
  try {
    return apiSuccess({ ready: true });
  } catch (error) {
    return handleApiError(error);
  }
}
```

Explicit expected failures may use `ApiError`:

```ts
throw new ApiError("NOT_FOUND", "Resource not found.");
```

The message and optional details supplied to `ApiError` must already be client-safe.

## Security boundary

These helpers format responses. They do not:

- authenticate users
- reconcile Supabase identities to canonical app users
- load roles
- resolve permissions
- guard routes
- query the database
- validate request schemas
- write audit logs

Authorization remains server-authoritative. Client-side checks are not privileged enforcement.

## Sprint boundary

S0-012 creates no real product API. Validation schemas belong to S0-013. AuditLog and audit helpers belong to S0-014.
