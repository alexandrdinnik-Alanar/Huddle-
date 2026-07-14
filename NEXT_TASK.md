# NEXT TASK

S0-001 through S0-013 are completed and merged.

Current task:

```text
S0-014 - Create AuditLog model and audit helper
```

Status:

```text
IN PROGRESS - S0-013 is merged. S0-014 creates the append-only audit foundation only. Do not build an audit UI, admin workflow, or product API.
```

Task contract:

```text
tasks/phase-0/S0-014.md
```

Dependency: `S0-013`

S0-014 must create only:

- the Prisma `AuditLog` base model and migration;
- a testable `createAuditLog()` helper;
- support for user and system actors;
- metadata and request-context minimization;
- focused documentation and tests.

S0-014 must not:

- create a public or admin audit-log API;
- build `/admin/audit-log` UI;
- add moderation, privacy, role-management, or product workflows;
- log secrets, message bodies, child data, exact addresses, or raw request bodies;
- begin S0-015 or VIS-001 implementation.

After S0-014 is merged, the agreed next gate is a separate VIS-001 canonical design reconciliation before layout/page implementation.
