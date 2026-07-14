# Huddle Brand System — Canonical Source of Truth

Status: approved and locked

## Brand identity

The approved family-facing identity is the **Huddle Family** lockup: the original Huddle wordmark with the centered `FAMILY` descriptor and decorative stars.

The approved community mark is the circular Huddle icon.

The public domain is **Huddle-Family.com**.

The phrase **Closer by Design** is retired. It must not be introduced into new production UI, marketing, metadata, vehicle graphics, presentations, or public-facing assets.

## Canonical palette

| Token | Name | Value | Primary use |
|---|---|---:|---|
| `--color-warm-cream` | Warm Cream | `#F6F0E8` | Primary background |
| `--color-sand-beige` | Sand Beige | `#E8D9C9` | Secondary surfaces |
| `--color-copper-clay` | Copper Clay | `#C98A5C` | Brand accent and primary CTA |
| `--color-soft-olive` | Soft Olive | `#8A9076` | Secondary CTA and supportive accent |
| `--color-graphite-taupe` | Graphite Taupe | `#7C6D63` | Primary typography and structural contrast |
| `--color-white` | White | `#FFFFFF` | Elevated surfaces and inverse content |

### Recommended distribution

- 60% warm neutrals
- 20% copper
- 10% soft olive
- 5% graphite taupe
- 5% white

Do not add black, deep green, saturated gold, or unrelated gray values as visual brand colors.

Functional status colors may exist for accessibility and system feedback, but they are not part of the visual brand palette and must not replace the canonical brand tokens.

## Styling principles

- Warm, calm, Scandinavian, premium, human, and family-centered.
- Warm Cream is the default page background.
- Graphite Taupe is the default text color.
- Copper Clay communicates identity and primary action.
- Soft Olive supports secondary actions and calm emphasis.
- Sand Beige creates visual layering without introducing dark blocks.
- Avoid large black or deep-green surfaces.
- Do not redraw, stretch, recolor, crop, or regenerate the approved logo.

## Repository integration

Canonical CSS variables live in:

`src/lib/design-tokens/css-variables.css`

Public logo and icon assets must live under:

`public/brand/`

Expected runtime paths:

```text
public/brand/
├── huddle-family-logo.png
├── huddle-family-logo.webp
├── huddle-wordmark.png
├── huddle-icon.png
└── icons/
    ├── favicon.ico
    ├── apple-touch-icon.png
    ├── icon-192.png
    └── icon-512.png
```

Source and delivery packages belong under:

```text
assets/brand/
├── guidelines/
├── logo-master/
└── README.md
```

## Asset quality rules

- Use approved source files only.
- Preserve transparency and clear space.
- Do not upscale small raster exports for production placement.
- Web assets should use 2× display resolution where practical.
- Print assets must be prepared independently from web exports.
- A raster image wrapped in SVG is not considered a true vector master.
- SVG/EPS/AI files may be labeled as master vector only after manual vector reconstruction and visual approval.
