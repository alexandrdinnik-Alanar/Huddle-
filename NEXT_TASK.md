# NEXT TASK

S0-001 through S0-011 are completed and merged.

Current task:

```text
S0-012 - Create API response and error helpers
```

Status:

```text
READY - S0-011 is merged. S0-012 depends on S0-011 and must create reusable API response, error, pagination, and API type helpers only. Do not build real product APIs.
```

Task contract:

```text
tasks/phase-0/S0-012.md
```

Tracking title: `Create API response and error helpers`

Sprint 0 source title: `Create standard API response and error helpers`

Dependency: `S0-011`

Source precedence:

1. accepted ADRs and repository architecture rules
2. actual merged repository implementation through S0-011
3. roadmap for ordering, dependency, and tracking title
4. Sprint 0 source for detailed S0-012 scope where not superseded

S0-012 must create only backend API foundation helpers:

- standard `{ data, error }` response envelope
- typed API error codes
- safe API error normalization
- pagination helper
- API response types
- documentation and focused tests

S0-012 must not:

- build marketplace, event, report, admin, family, community, messaging, or other product APIs
- create real business endpoints
- add Prisma models or migrations
- change authentication or route-guard architecture
- expose raw internal errors, stack traces, secrets, tokens, or PII
- trust client-provided authorization state
- implement S0-013 validation work
- implement S0-014 audit work

A placeholder example route is optional only if strictly useful and explicitly justified; it is not required by default.
