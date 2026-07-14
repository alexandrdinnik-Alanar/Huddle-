# NEXT TASK

S0-001 through S0-014 are completed and merged.

Current task:

```text
VIS-001 - Canonical design source reconciliation
```

Status:

```text
IN PROGRESS - S0-014 is merged. VIS-001 reconciles Figma, PNG references, routes, and implementation state without changing Figma or building UI.
```

Task contract:

```text
tasks/design/VIS-001.md
```

Dependency: `S0-014`

VIS-001 must create only:

- a canonical design source-of-truth document;
- a classified visual-source inventory;
- a P0 route-to-Figma-to-React registry;
- the mandatory Figma-first approval gate;
- focused handoff documentation.

VIS-001 must not:

- edit Figma nodes, variables, styles, or components;
- implement layouts, pages, or product components;
- delete or move visual assets;
- treat PNG references as production designs;
- begin S0-015 implementation.

After VIS-001 is merged, the next task is S0-015. Any new visual decision required by S0-015 must be drawn and approved in the canonical Figma master before React implementation.
