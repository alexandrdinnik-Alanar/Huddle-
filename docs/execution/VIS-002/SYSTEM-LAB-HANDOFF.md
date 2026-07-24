# VIS-002 System Lab Foundation — Handoff

Status: coded reference laboratory; not production UI and not Figma-approved.

## Purpose

This System Lab is the first coded reconstruction built after the complete Huddle corpus reconciliation. It must not be confused with the discarded A/B/C art-direction experiments.

The route is:

```text
/system-lab
```

## Source fidelity

The lab is derived from repeated evidence across the full source corpus:

- Hanken Grotesk as the dominant UI/body family;
- Newsreader as the dominant display/editorial family;
- Warm Cream and White as the primary canvas and elevated surfaces;
- recurring copper, olive, graphite, sand-border, radius and warm-shadow families;
- shared AppHeader, SiteHeader, SiteFooter, DashboardSidebar, AdminSidebar and PartnerSidebar patterns;
- the supplemental screens' repeated dark olive navigation/shell treatment.

It does not copy prototype pseudo-elements or inline HTML into production components.

## Included foundation

- public navigation example;
- source-evidence summary;
- color-role comparison;
- typography specimen;
- radius and elevation comparison;
- buttons, fields, statuses and privacy notice;
- activity, marketplace and family-card foundations;
- responsive family/app shell;
- responsive admin shell;
- mobile navigation replacement;
- reduced-motion support.

## Explicit governance behavior

The lab displays the unresolved dark-shell evidence, but it does not add a production dark token to the canonical repository token file.

Decision `DSD-001` remains open because:

- the supplied platform screens repeatedly use dark olive/deep-green shell surfaces;
- the current locked brand source restricts deep-green visual brand colors and large dark surfaces.

The comparison remains visible until the source-of-truth conflict is explicitly resolved.

## Boundaries

- no production route is restyled;
- no database, auth, API or schema changes;
- no route candidate is silently added;
- no token is marked approved by this lab;
- no Figma node or production status is claimed;
- the current canonical global tokens are not modified.

## Review criteria

1. Does the lab visibly match the established Huddle platform family rather than a new art direction?
2. Does Hanken Grotesk + Newsreader accurately express the supplied design system?
3. Are copper, olive, cream, borders and elevation normalized without losing character?
4. Should dark olive shells become an approved functional system exception?
5. Do public, family and admin examples feel like one related platform?
6. Does the mobile restructuring preserve hierarchy and usability?

## Next step after review

Apply approved corrections, then convert the candidate values into governed variables and reusable components. Figma governance and product-owner approval remain required before production screens can be marked `PRODUCTION` or implemented route-by-route.
