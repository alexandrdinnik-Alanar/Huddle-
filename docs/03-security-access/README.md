# Security and Access

This section owns authorization and access-control documentation.

- `rbac-capability-matrix.csv` — canonical role/capability matrix.

Authorization model:

```text
RoleKey
  + Capability
  + ScopedGrant
  + object policy
```

Client visibility is never authorization. Every privileged read and every mutation must be checked on the server. Sensitive domains require negative-path tests and audit coverage.
