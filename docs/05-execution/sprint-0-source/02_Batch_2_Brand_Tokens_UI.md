# Huddle Sprint 0 — Codex Execution Batch 2

## Scope

Batch 2 includes:

- `S0-003 — Add approved brand assets and logo components`
- `S0-004 — Implement design token foundation`
- `S0-005 — Create primitive UI components`

Goal: create brand-safe visual and component foundation without building product screens.

## S0-003 — Approved brand assets and logo components

### Codex prompt

```text
Task ID: S0-003
Task Title: Add approved Huddle brand assets and logo components

Context:
Huddle must use approved brand assets only. Do not create, generate, type, redraw, or recolor any Huddle logo.

Required asset folders:
public/brand/logotype/
public/brand/icon/

Approved wordmark files to support:
- Huddle_logotype_copper_transparent_APPROVED.png
- Huddle_logotype_dark_green_transparent.png
- Huddle_logotype_white_transparent.png
- Huddle_logotype_copper_on_deep_green.png
- Huddle_logotype_dark_green_on_ivory.png
- Huddle_logotype_white_on_deep_green.png

Approved icon files to support:
- Huddle_icon_copper_transparent_SELECTED.png
- Huddle_icon_black_transparent.png
- Huddle_icon_white_transparent.png
- Huddle_icon_copper_on_deep_green.png
- Huddle_icon_dark_green_on_ivory.png
- Huddle_icon_white_on_deep_green.png

Create components:
components/huddle/BrandLogo.tsx
components/huddle/IconWatermark.tsx

BrandLogo requirements:
- Renders approved wordmark asset.
- Supports variants: copperTransparent, darkGreenTransparent, whiteTransparent, copperOnDeepGreen, darkGreenOnIvory, whiteOnDeepGreen.
- Supports alt text.
- Supports width/height or className.
- Does not render text logo.
- Does not recolor asset.

IconWatermark requirements:
- Renders approved Huddle icon asset as decorative element.
- Supports approved variants.
- Defaults to aria-hidden when decorative.
- Does not attach to BrandLogo as a lockup.
- Can be used as background/watermark/seal.

Acceptance Criteria:
- BrandLogo component exists.
- IconWatermark component exists.
- Components reference approved assets only.
- No SVG/text recreation of the logo.
- No CSS filter/recolor applied to logo assets.
- No generated logo.
- Components compile.
- README or docs note explains brand asset rules.
```

## S0-004 — Design token foundation

### Codex prompt

```text
Task ID: S0-004
Task Title: Implement Huddle design token foundation

Context:
Huddle UI must use semantic design tokens. Do not hardcode random colors in components.

Brand direction:
- warm ivory / cream base
- copper brand accent
- deep green primary CTA
- soft beige / sand / sage surfaces
- charcoal primary text
- calm, premium, Scandinavian family-tech tone

Create token files:
lib/design-tokens/tokens.ts
lib/design-tokens/css-variables.css

Required token groups:
1. Color
2. Typography
3. Spacing
4. Radius
5. Shadow
6. Breakpoints
7. Z-index

Create semantic color tokens:
- color.background.base
- color.background.soft
- color.background.sage
- color.background.deepGreen
- color.surface.card
- color.surface.elevated
- color.text.primary
- color.text.secondary
- color.text.muted
- color.text.inverse
- color.brand.copper
- color.brand.green
- color.cta.primary
- color.cta.primaryHover
- color.cta.secondary
- color.border.subtle
- color.border.strong
- color.status.success
- color.status.warning
- color.status.danger
- color.status.info

Acceptance Criteria:
- tokens.ts exists.
- css-variables.css exists.
- Tokens are semantic, not only raw values.
- Components can import/use tokens.
- No random SaaS blue as primary CTA.
- Deep green is primary action color.
- Copper is brand accent, not generic button color everywhere.
- Ivory/cream is base background.

Out of Scope:
- No dark mode.
- No theme editor.
- No production product screens.
```

### Starter token values

```text
brand.ivory: #F7F1E8
brand.ivorySoft: #FBF7EF
brand.copper: #B8734A
brand.deepGreen: #173F35
brand.sage: #DDE7D8
brand.sand: #E8D8C3
brand.beige: #EFE3D2
text.primary: #1F2A24
text.secondary: #5C655F
text.muted: #7D8580
text.inverse: #FFFFFF
border.subtle: #DDD1C0
status.success: #2F6F4E
status.warning: #B7791F
status.danger: #A33A2C
status.info: #3F6475
```

## S0-005 — Primitive UI components

### Codex prompt

```text
Task ID: S0-005
Task Title: Create primitive UI components

Context:
Create the foundation primitive components for Huddle. Use design tokens from S0-004. Do not build product-specific screens yet.

Create components in:
components/ui/

Required primitive components:
- Button
- Input
- Textarea
- Select
- Checkbox
- Switch
- Modal
- Toast
- Badge
- Card
- Tabs
- Skeleton
- EmptyState
- ErrorState

Requirements:
- Use semantic design tokens.
- Support className override where appropriate.
- Support accessible labels where appropriate.
- Support disabled state.
- Support loading state for Button.
- Support error state for form inputs.
- Support focus-visible states.
- Avoid random hardcoded styling.
- Avoid external UI kits unless already decided.
- Keep components simple and internal.

Button variants: primary, secondary, ghost, danger.
Button sizes: sm, md, lg.
Badge variants: neutral, success, warning, danger, info.
Card variants: default, elevated, soft.

Acceptance Criteria:
- All primitive components exist.
- Components compile.
- Components use tokens.
- Button has variants and sizes.
- Inputs support error state.
- Badge supports status variants.
- Card supports variants.
- EmptyState and ErrorState exist.
- Components do not implement marketplace/events/admin feature logic.

Out of Scope:
- No ListingCard.
- No EventCard.
- No AdminTable.
- No AppShell.
- No marketplace UI.
- No event UI.
```

## Batch 2 completion gate

```text
[ ] approved brand assets are placed in repo
[ ] BrandLogo component exists
[ ] IconWatermark component exists
[ ] design tokens exist
[ ] CSS variables exist
[ ] primitive UI components exist
[ ] components compile
[ ] build passes
[ ] typecheck passes
[ ] no product features built
[ ] no fake logo created
[ ] no logo recolor
```
