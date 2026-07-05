# Security and Access

Authorization model:

```text
RoleKey + Capability + ScopedGrant + object policy
```

Client visibility is never authorization. Privileged reads and mutations require server-side checks.
