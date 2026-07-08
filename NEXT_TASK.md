# NEXT TASK

S0-001 through S0-010 are completed and merged.

Current task:

```text
S0-011 - Create route guards
```

Status:

```text
READY - S0-010 is merged. S0-011 depends on S0-010 and must create the corrected official route-guard contract and implementation within the S0-009/S0-010 architecture boundaries.
```

Task contract:

```text
tasks/phase-0/S0-011.md
```

Tracking title: `Create route guards`

Sprint 0 source title: `Create Huddle route guards`

Source precedence:

1. accepted ADRs and architecture corrections
2. actual merged repository implementation through S0-010
3. roadmap for ordering, dependency, and tracking title
4. Sprint 0 source for S0-011 intent where not superseded

S0-011 must respect the accepted S0-009 architecture correction:

- `getCurrentUser()` and `requireUser()` provide authenticated Supabase identity only
- identity shape is `id` and `email`
- no canonical application `User` reconciliation exists in S0-009
- no resolved application roles exist in S0-009
- no active-user status exists in S0-009
- no onboarding completion source exists in S0-009
- P1-001 remains deferred
- P1-005 remains deferred

S0-011 must respect the accepted S0-010 pure-permission boundary:

- permission helpers are pure evaluators
- permission-helper input is an explicit trusted role-bearing subject
- minimal permission subject shape is `{ roles: readonly RoleKey[] }`
- S0-010 does not authenticate
- S0-010 does not load roles
- S0-010 does not query the database
- S0-010 does not reconcile identities
- S0-010 does not guard routes

S0-011 must not implement P1-001 work, P1-005 work, S0-012 work, fake runtime role loading, app-user reconciliation, active-user resolution, onboarding state, route-wide fake admin wiring, or client-only privileged authorization.

S0-011 must require server-authoritative authorization. Client-side checks may only support user experience and must not be treated as privileged enforcement.
