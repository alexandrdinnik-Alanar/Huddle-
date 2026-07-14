# Audit logging foundation

S0-014 provides the append-only audit primitive for future privileged and security-sensitive Huddle mutations. It does not create an audit API, viewer, or admin workflow.

## When audit is required later

Future implementations must create audit events for:

- role, capability, and scoped-grant changes;
- moderation cases, enforcement, and appeals;
- privacy exports, deletion requests, consent, and retention actions;
- admin changes to users, listings, events, reports, or configuration;
- sensitive ownership or status transitions;
- security controls and system/background jobs with material impact.

## Usage

```ts
const result = await createAuditLog({
  actorId: currentUser.id,
  actorRole: currentRole,
  action: "role.assignment.created",
  targetType: "UserRole",
  targetId: assignment.id,
  metadata: {
    previousStatus: "PENDING",
    resultStatus: "ACTIVE",
  },
  requestContext: {
    ipAddress,
    userAgent,
  },
});
```

System/background actions omit `actorId`; `actorRole` then defaults to `SYSTEM`.

The default mode returns `{ success: false }` instead of throwing when persistence fails. This prevents an audit infrastructure outage from automatically breaking an unrelated user-facing action. Workflows that legally or operationally require fail-closed audit persistence must set `throwOnError: true` and handle the transaction boundary explicitly.

## Metadata minimization

Use metadata only for stable IDs, event/status codes, booleans, counts, scopes, versions, and hashes. The helper removes known sensitive key categories and applies limits to nesting, collection size, and strings.

Sanitization is defense in depth, not permission to pass complete DTOs or request bodies. Callers must never submit secrets, messages, email/phone values, exact addresses, precise location, or child data.

IP addresses are retained only when syntactically valid. User-Agent values are trimmed and bounded. Future privacy/retention policy must determine whether these fields should be disabled, hashed, or shortened by deployment jurisdiction.

## Append-only and access rules

Application code receives only the create helper. It must not update or delete audit rows. Audit logs are restricted data and must never be exposed publicly.

S0-014 does not implement database grants, retention jobs, export approval, public/admin endpoints, or `/admin/audit-log`. Those require later task contracts, authorization, and audit-of-audit-access decisions.
