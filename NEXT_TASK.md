# NEXT TASK

`S0-001` through `S0-014` are completed and merged.

`VIS-001` is historical, but its claim that approved Figma designs already existed was incorrect and is superseded by the corrected design source of truth.

Current task:

```text
VIS-002 — Create the canonical Figma production foundation
```

Status:

```text
READY — no approved Huddle product design currently exists in Figma. Create the production design foundation before React layout implementation.
```

Task contract:

```text
tasks/design/VIS-002.md
```

Dependency: `S0-014`

VIS-002 must create and obtain approval for:

- the canonical Figma file and page structure;
- brand and semantic variables based on the locked repository brand system;
- typography, spacing, radius, elevation, and responsive foundations;
- reusable shell and navigation components;
- desktop and mobile Public layout frames;
- desktop and mobile Auth layout frames;
- desktop and mobile App layout frames;
- desktop and mobile Admin layout frames;
- stable Figma page names and node IDs recorded in the repository.

VIS-002 must not:

- claim that existing empty or unverified Figma pages are approved designs;
- copy Claude Design HTML into Figma or React as production output;
- treat repository PNG files as approved production screens;
- implement React layouts or product features;
- begin S0-015 before product-owner approval is recorded.

Blocked task:

```text
S0-015 — Create base layouts
```

S0-015 may start only after VIS-002 is approved, the layout frame node IDs are recorded, the repository correction is merged, and all required checks pass.
