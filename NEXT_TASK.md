# NEXT TASK

`S0-001` through `S0-014` and `VIS-001` are completed and merged.

Current task:

```text
S0-015 — Create base layouts
```

Status:

```text
READY — VIS-001 is merged. S0-015 may create structural layout foundations only and must preserve the mandatory Figma-first approval gate.
```

Task contract:

```text
tasks/phase-0/S0-015.md
```

Dependency: `VIS-001`

S0-015 may create only:

- `PublicLayout`;
- `AuthLayout`;
- `AppLayout`;
- `AdminLayout`;
- optional structural header, footer, navigation, and sidebar helpers;
- focused tests and the required handoff.

S0-015 must not:

- implement marketplace, activities, events, community, messaging, admin, finance, municipality, or other product features;
- invent new Figma-dependent visual decisions;
- copy PNG or Claude Design prototypes into production code;
- invent app-user reconciliation or trusted roles;
- treat client-side navigation visibility as authorization;
- begin S0-016 implementation.

Any material visual decision required by S0-015 must be drawn and approved in the canonical Figma master, then recorded with exact node IDs before implementation.

After S0-015 is merged and its gates pass, the next task is `S0-016 — Create canonical placeholder pages`.