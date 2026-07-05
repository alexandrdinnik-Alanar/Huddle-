# Repository Layout Contract

The runtime repository is created by S0-001. Do not create empty placeholder folders only for appearance.

```text
.
├── src/
│   ├── app/                 # Next.js App Router; routing and orchestration only
│   ├── components/          # shared React UI primitives/composites
│   ├── modules/             # domain business logic by bounded context
│   └── lib/                 # cross-cutting infrastructure adapters/helpers
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── tasks/                   # atomic execution contracts
├── docs/
│   ├── 00-source-of-truth/
│   ├── 01-product/
│   ├── 02-architecture/
│   ├── 03-security-access/
│   ├── 04-api/
│   ├── 05-execution/
│   ├── 06-operations/
│   ├── execution/
│   └── 99-archive/
├── .ai/
├── .github/
├── AGENTS.md
├── CLAUDE.md
├── NEXT_TASK.md
└── README.md
```

## Ownership rules

- `src/app/**`: route composition, layouts, page/server-action orchestration; no domain business rules.
- `src/components/**`: reusable presentation and interaction components; no persistence access.
- `src/modules/<domain>/**`: domain services, policies, repositories, DTOs and invariants.
- `src/lib/**`: infrastructure shared across modules; adapters must not own product rules.
- `prisma/**`: schema and migrations only through approved tasks.
- `tasks/**`: immutable task contract history; task edits require explicit scope.
- `docs/execution/<TASK-ID>/**`: implementation handoffs and review records.

## Planned module roots

```text
src/modules/
├── identity/
├── family/
├── matching/
├── connections/
├── community/
├── groups/
├── messaging/
├── listings/
├── catalog/
├── orders/
├── payments/
├── experiences/
├── services/
├── bookings/
├── trust-safety/
├── notifications/
├── support/
├── analytics/
├── privacy/
├── municipality/
└── platform-ops/
```

Cross-domain behavior must use public module services or domain events; modules must not reach into another module's internal persistence implementation.
