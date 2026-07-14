# BRAND-001 — Adopt canonical Huddle brand system

## Objective

Make the approved Huddle Family visual identity the canonical source for repository styling and brand assets.

## Approved palette

- Warm Cream: `#F6F0E8`
- Sand Beige: `#E8D9C9`
- Copper Clay: `#C98A5C`
- Soft Olive: `#8A9076`
- Graphite Taupe: `#7C6D63`
- White: `#FFFFFF`

## Approved identity

- Primary family-facing lockup: Huddle wordmark with centered `FAMILY` descriptor and decorative stars.
- Approved community icon: circular Huddle family/community mark.
- Domain: `Huddle-Family.com`.
- `Closer by Design` is retired and must not be used in new production UI or public-facing materials.

## Scope

1. Replace legacy dark-green and off-palette design tokens with canonical palette values.
2. Preserve compatibility aliases temporarily where existing code references old token names.
3. Update global foundation styling to use Soft Olive, Copper Clay, Warm Cream, Sand Beige, Graphite Taupe, and White only.
4. Update metadata and favicon/logo paths to the canonical Huddle Family asset locations.
5. Add repository documentation for approved brand usage and asset placement.
6. Store the approved Brand Guidelines and Logo Master Package under `assets/brand/` when binary upload is available.

## Acceptance criteria

- No deep-green brand token remains in the canonical token definitions.
- New UI styling uses only approved palette tokens.
- Metadata identifies the product as Huddle Family and uses `Huddle-Family.com`.
- Repository contains a canonical brand usage document and asset manifest.
- The handoff records any binary-upload limitation separately from code completion.
