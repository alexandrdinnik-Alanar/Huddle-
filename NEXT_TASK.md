# NEXT TASK

S0-001 through S0-012 are completed and merged.

Current task:

```text
S0-013 - Create validation schema pattern
```

Status:

```text
IN PROGRESS - S0-012 is merged. S0-013 creates the reusable schema-first request validation boundary only. Do not build real APIs or product flows.
```

Task contract:

```text
tasks/phase-0/S0-013.md
```

Dependency: `S0-012`

S0-013 must create only:

- a typed `validateRequestBody(schema, body)` helper;
- a safe `formatValidationError(error)` helper;
- deterministic mapping to API code `VALIDATION_ERROR`;
- privacy-safe placeholder profile and listing schemas;
- focused documentation and tests.

S0-013 must not:

- create real profile, listing, marketplace, event, report, admin, family, community, or messaging APIs;
- add database queries, Prisma models, or migrations;
- add exact address or sensitive child fields;
- implement S0-014 audit work;
- expose submitted values in validation error details.
