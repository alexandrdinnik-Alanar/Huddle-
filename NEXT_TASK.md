# NEXT TASK

S0-001, S0-002, S0-003, S0-004, S0-005, S0-006, S0-007 and S0-008 are merged.

Current task:

```text
S0-009 - Create Supabase Auth skeleton
```

Status:

```text
IN PROGRESS - S0-009 contract was architecture-corrected. S0-009 remains a Supabase auth/session skeleton only. Canonical Supabase identity -> application User reconciliation is deferred to P1-001, and onboarding completion persistence/derivation is deferred to P1-005. Do not mark S0-009 complete until the code and handoff reflect the corrected scope.
```

Task contract:

```text
tasks/phase-0/S0-009.md
```

Canonical visual identity source:

```text
Brand_Guidelines.zip
```

The uploaded package is authoritative for Huddle colors, logotype, icon/community mark, typography direction and broader visual identity. Older set50-derived visual values are reference-only when conflicting.

Tracking title: `Create Supabase Auth skeleton`

Sprint 0 source title: `Create auth skeleton`

S0-009 must implement only the Supabase auth skeleton on top of the merged S0-008 identity base. Its contract was architecture-corrected to distinguish authenticated Supabase identity from canonical application User. Do not build full auth UX, custom password or session systems, permission helpers, route guards, protected-route implementation, or any S0-010/S0-011 work in this task.

Architecture correction for S0-009:

- defer canonical Supabase identity -> application `User` reconciliation to `P1-001`
- defer onboarding completion persistence/derivation to `P1-005`
- do not treat provider subject or shared provider/domain id as canonical application `User` identity
- do not use email matching as canonical identity mapping without future explicit authority
