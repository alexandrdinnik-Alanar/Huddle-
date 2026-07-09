# S0-012 Handoff — API response and error helpers

## Task ID

`S0-012`

## Summary

Implemented the reusable Huddle API response foundation with typed response envelopes, typed error codes, deterministic HTTP status mapping, safe error normalization, pagination metadata, documentation, and focused unit tests.

No real product API was created.

## Exact changed files

- `NEXT_TASK.md`
- `tasks/phase-0/S0-012.md`
- `src/lib/api/types.ts`
- `src/lib/api/errors.ts`
- `src/lib/api/pagination.ts`
- `src/lib/api/response.ts`
- `src/lib/api/index.ts`
- `tests/unit/api-response.test.ts`
- `docs/sprint-0/api-response-format.md`
- `docs/execution/S0-012/HANDOFF.md`

## Helper signatures

- `apiSuccess<T>(data: T, init?: ResponseInit): Response`
- `apiList<T>(items: readonly T[], pagination: Pagination, init?: ResponseInit): Response`
- `apiError(code: ApiErrorCode, message: string, details?: unknown, status?: number): Response`
- `handleApiError(error: unknown): Response`
- `createPagination({ page, pageSize, total }: CreatePaginationInput): Pagination`

## Response types

- `ApiErrorCode`
- `ApiErrorBody`
- `ApiSuccessEnvelope<T>`
- `ApiErrorEnvelope`
- `Pagination`
- `ApiListData<T>`
- `ApiResponseEnvelope<T>`

## Error codes

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

## HTTP status mapping

- `UNAUTHORIZED` -> 401
- `FORBIDDEN` -> 403
- `NOT_FOUND` -> 404
- `VALIDATION_ERROR` -> 400
- `CONFLICT` -> 409
- `RATE_LIMITED` -> 429
- `RESOURCE_REMOVED` -> 410
- `RESOURCE_UNAVAILABLE` -> 503
- `OWNERSHIP_REQUIRED` -> 403
- `STATUS_NOT_ALLOWED` -> 409
- `SUSPENDED_USER` -> 403
- `MODERATION_REQUIRED` -> 403
- `SERVER_ERROR` -> 500

## Pagination semantics

`createPagination` accepts only safe integer inputs with:

- `page >= 1`
- `pageSize >= 1`
- `total >= 0`

`hasMore` is deterministic: `page * pageSize < total`.

Invalid pagination input throws `RangeError` instead of returning misleading metadata.

## Unknown-error behavior

Unknown thrown values normalize to:

- code: `SERVER_ERROR`
- status: 500
- message: `An unexpected server error occurred.`

Raw unknown messages and stacks are not returned.

## Redaction behavior

Unknown errors do not serialize:

- stack traces
- raw error messages
- tokens
- secrets
- internal filesystem paths
- arbitrary thrown objects

Recognized `ApiError` instances are treated as explicitly client-safe application errors and preserve their code, message, details, and status.

## Recognized error mappings

S0-012 introduces `ApiError` as the recognized safe API error primitive.

No auth, permission, or route-guard errors are automatically reinterpreted in this task. This avoids changing S0-009, S0-010, or S0-011 semantics.

## Schema impact

None.

## Migration impact

None.

## Database impact

None. No database query is introduced.

## Auth impact

None. S0-009 identity boundaries remain unchanged.

## Permission impact

None. S0-010 pure permission semantics remain unchanged.

## Guard impact

None. S0-011 route-guard behavior remains unchanged.

## API changes

Added reusable API foundation helpers only. No real product endpoint was added.

## Security impact

- unknown errors fail closed
- stack traces are not exposed
- unknown raw messages are not exposed
- no token/session serialization
- no database or internal-path leakage by default
- required error codes are typed and deterministic

## Tests and quality gates

Focused unit tests cover:

- success envelope
- list envelope
- error envelope
- exact required error-code baseline
- explicit status mapping
- pagination boundaries
- invalid pagination input
- safe `ApiError` preservation
- unknown `Error` redaction
- thrown string/object normalization

Canonical quality gates are delegated to GitHub CI for the branch/PR:

- brand asset verification
- lint
- typecheck
- tests
- build

Record final results from the PR CI before merge.

## Known limitations

- no real product APIs
- no validation schemas; S0-013
- no AuditLog/audit helper; S0-014
- no automatic mapping of auth/permission/guard errors
- `ApiError` callers are responsible for supplying client-safe explicit messages/details

## Follow-up risks

- future endpoints must not pass unsanitized details into explicit `ApiError`
- future validation mapping must preserve the S0-012 envelope
- future API middleware must not expose raw exceptions before `handleApiError`

## Commit SHA

Final implementation SHA is recorded by the GitHub PR head after this handoff file is committed.
