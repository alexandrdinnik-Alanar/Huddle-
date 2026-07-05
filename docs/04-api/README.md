# API

This section owns canonical HTTP/API contracts.

- `api-contract-map.csv` — method, route, capability, request/response contract, domain event, priority and implementation notes.

Rules:
- `/api/v1/**` is the current contract namespace.
- Validate external input at the trusted boundary.
- Authorize on the server before privileged reads or mutations.
- Use idempotency for financial, order and retry-prone mutations.
- Persist canonical state before realtime broadcast.
- API route handlers orchestrate; domain rules live in `src/modules/<domain>`.
