# Validation pattern

S0-013 establishes the schema-first DTO boundary for future Huddle request handlers. It does not create a real API or product flow.

## Contract

Every external request body starts as `unknown` and must be validated before domain logic receives it. Use a strict Zod schema and `validateRequestBody`:

```ts
const validation = validateRequestBody(schema, body);

if (!validation.success) {
  return handleApiError(validation.error);
}

const dto = validation.data;
```

Success returns the parsed and normalized schema output. Failure returns an `ApiError` with:

- code `VALIDATION_ERROR`;
- HTTP status `400`;
- message `Invalid request body.`;
- safe details containing only field paths and schema-authored messages.

Passing that error to `handleApiError` produces the S0-012 envelope:

```json
{
  "data": null,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request body.",
    "details": {
      "fieldErrors": {},
      "formErrors": []
    }
  }
}
```

## Schema rules

- use `.strict()` for request DTO objects so unknown keys are rejected;
- trim user-facing strings where whitespace is not meaningful;
- define explicit length and numeric bounds;
- keep domain authorization and database checks outside schema parsing;
- do not use validation success as proof of permission.

The example profile and listing schemas demonstrate structure only. They are not production domain contracts.

## Privacy rules

Validation errors must never echo submitted values. Do not log request bodies or formatted validation details when they may contain sensitive paths.

The listing placeholder deliberately permits only approximate location fields. Exact pickup address and home address are excluded. Both examples exclude child names, birthdays, schools, and other sensitive child data.

## Limitations

`validateRequestBody` is synchronous and intended for deterministic DTO parsing. Database uniqueness, ownership, permissions, moderation, and external service checks belong to later domain and authorization layers.
