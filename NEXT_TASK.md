# NEXT TASK

S0-001, S0-002, S0-003, S0-004, S0-005, S0-006, S0-007, S0-008 and S0-009 are merged.

Current task:

```text
S0-010 - Create permission helpers
```

Status:

```text
READY - S0-009 is merged. S0-010 depends on S0-009 and must implement only pure static permission helpers. Do not implement route guards, DB permission models, auth wiring, feature code, or any S0-011 work.
```

Task contract:

```text
tasks/phase-0/S0-010.md
```

Canonical visual identity source:

```text
Brand_Guidelines.zip
```

The uploaded package is authoritative for Huddle colors, logotype, icon/community mark, typography direction and broader visual identity. Older set50-derived visual values are reference-only when conflicting.

Tracking title: `Create permission helpers`

Sprint 0 source title: `Create Huddle permission helper system`

S0-010 must implement only the Sprint 0 static permission-helper system on top of the merged S0-009 auth/session skeleton. Do not implement route guards, Permission/RolePermission DB models, auth wiring, protected-route implementation, feature code, or any S0-011 work in this task.

S0-010 must respect the corrected S0-009 architecture boundary:

- defer canonical Supabase identity -> application `User` reconciliation to `P1-001`
- defer onboarding completion persistence/derivation to `P1-005`
- do not assume `src/lib/auth/**` provides resolved application roles
- do not import `SupabaseAuthenticatedIdentity` as if it were a canonical app user
- do not implement route guards or any S0-011 behavior here
