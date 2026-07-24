# NEXT TASK

`S0-001` through `S0-014` are completed and merged.

`VIS-001` is historical. Its claim that approved Figma designs already existed was incorrect.

PRs #34 and #35 are closed as superseded because they introduced unrelated visual directions instead of continuing the established Huddle platform design.

Current task:

```text
VIS-002 — Reconcile and productionize the complete Huddle design corpus
```

Status:

```text
IN PROGRESS — preserve the completed 315-prototype / 105-route baseline, reconcile the supplemental 100-screen Site.zip delta, then reconstruct and approve the established full-platform design system.
```

Task contract:

```text
tasks/design/VIS-002.md
```

Dependency: `S0-014`

## Verified working baseline

- 315 HTML prototype records;
- 234 unique HTML contents;
- 205 PNG files;
- 12 PDF files;
- 542 files in the earlier Claude archive;
- 105 canonical routes;
- 286 prototype records already mapped to route candidates;
- 100 supplemental screens in `Site.zip`.

The 100 supplemental screens are not a replacement corpus and must not restart the old audit.

## First-pass Site.zip result

- 19 exact image overlaps;
- 24 existing-route visual variants;
- 52 new states on existing routes;
- one direct candidate for the known `/app/seller/payouts` design gap;
- two route-embedded component references;
- six supplemental route candidates requiring product-owner decisions.

See:

```text
docs/execution/VIS-002/CORPUS-RECONCILIATION.md
```

## VIS-002 must complete

- preserve existing inventory and traceability;
- reconcile every supplemental screen;
- resolve route candidates and conflicting variants;
- extract one shared token and component system from the complete corpus;
- preserve the established cream / forest-green / copper visual language;
- validate representative responsive patterns in VS Code/Storybook;
- reconstruct editable governed components and frames in Figma;
- obtain product-owner approval;
- record stable Figma page names and exact node IDs.

## VIS-002 must not

- reduce the project to the newest 100 screens;
- add 100 to 315 and call the result a canonical page count;
- restart the completed Claude audit;
- introduce an unrelated art direction;
- copy raw HTML directly into production React;
- mark reference screenshots as production;
- begin S0-015 before approval is recorded.

Blocked task:

```text
S0-015 — Create base layouts
```

S0-015 may start only after the complete corpus is reconciled, representative responsive frames are approved, node IDs are recorded, and the VIS-002 repository correction is merged.