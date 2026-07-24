# VIS-002 — Homepage Reconstruction Specification

Status: implementation lab, not production approval  
Route: `/system-lab`  
Visual authority for this lab: product-owner selected Huddle homepage reference from `assets/screens/set-01-core`.

## Purpose

Reconstruct the selected Huddle public-home direction as a responsive coded composition. This task does not invent a new art direction. It converts the approved reference structure into reusable page sections and component candidates that can later be governed in Figma and implemented on `/` after explicit approval.

## Design character to preserve

- premium but welcoming family-commerce atmosphere;
- warm cream and paper surfaces;
- copper identity accents;
- dark olive functional bars and primary actions;
- editorial serif display hierarchy paired with compact sans-serif UI text;
- natural family, product and community photography;
- thin warm-neutral borders, restrained shadows and moderate radii;
- high content density without dashboard-like visual noise;
- one ecosystem combining marketplace, community, activities, events and services.

The selected reference resolves the public-home direction. Dark olive is treated in this lab as a functional navigation/action surface, not as a replacement logo color or an unrestricted new brand palette.

## Canonical page anatomy

1. Internal lab status bar — lab only; removed from production.
2. Utility bar — delivery, sustainability and app promotion.
3. Main header — logo, product-area navigation, global search, locale and account utilities.
4. Hero — editorial proposition, two primary journeys, family photography, product proof and personalized app proof.
5. Trust strip — curation, parent trust, sustainability, community, payments, returns and quality.
6. Category rail — marketplace and discovery entry points.
7. Featured Marketplace — six product-card candidates.
8. Community and App promotional pair.
9. Life-stage discovery rail.
10. Activities & Events plus partner acquisition.
11. Transaction and service guarantee strip.
12. Newsletter, app-download and social-proof cards.
13. Multi-column footer.

## Responsive rules

### Desktop

- maximum content width: 1200 px;
- minimum page gutters: 32 px;
- asymmetric hero with photography occupying the larger visual field;
- six-column product grid;
- five-column life-stage grid;
- 2:1 activities/partner split;
- brand block plus seven footer columns.

### Tablet

- navigation reduces before switching to mobile;
- recommendation proof may be removed before the primary product proof;
- trust and category rails use four columns;
- product grid uses three columns;
- activities and partner modules stack;
- footer reduces to the highest-priority columns.

### Mobile

- utility content reduces to one message;
- header becomes logo plus menu trigger;
- hero copy precedes the family image and floating product proof;
- product, category, life-stage and event collections become horizontal rails;
- trust items use a two-column matrix;
- promo panels stack with copy before imagery;
- footer becomes two columns with lower-priority columns omitted from this first lab.

## Component candidates

- `UtilityBar`
- `PublicHeader`
- `GlobalSearch`
- `HeroEditorialCopy`
- `HeroProductProof`
- `RecommendationProof`
- `TrustStrip`
- `CategoryRail`
- `ProductCard`
- `PromoPanel`
- `LifeStageCard`
- `EventCard`
- `PartnerAcquisitionCard`
- `NewsletterCard`
- `AppDownloadCard`
- `SocialProofCard`
- `PublicFooter`

These remain candidates until responsive review, accessibility review and Figma approval are complete.

## Typography

The source corpus strongly supports Newsreader for editorial display and Hanken Grotesk for UI/body use. This branch does not add font files or silently authorize a runtime dependency. Until licensing, delivery and performance are approved, the lab uses serif and system-sans fallbacks while preserving the intended hierarchy.

## Image policy

The route uses SVG view-box crops from the existing product-owner supplied reference PNG. This validates layout, focal points and content density without adding duplicate raster files. The crops remain temporary reference material:

- not approved production photography;
- not reusable outside this internal lab;
- must be replaced by licensed, high-resolution sources with documented alt text and focal points;
- cannot be used to claim pixel-perfect production parity.

## Accessibility requirements

- semantic landmarks and navigation labels;
- visible keyboard focus in the production component pass;
- minimum 44 px targets for mobile controls where practical;
- final semantic colors checked for WCAG contrast;
- meaningful image labels;
- keyboard-accessible horizontal rails;
- reduced-motion support;
- no information communicated by color alone.

## H1 acceptance criteria

- desktop, tablet and mobile layouts are present on the internal route;
- all thirteen sections from the selected reference are represented;
- hierarchy and block order match the selected reference;
- no A/B/C alternative art direction remains in the route;
- no production route or global design token changes;
- reference crops are documented as temporary;
- lint, typecheck, tests and build pass;
- direct screenshots are reviewed before merge.

## Next gate

After H1 review:

1. correct composition, scale, crop and responsive feedback;
2. formalize typography and semantic colors;
3. replace temporary imagery;
4. create matching specimens for Marketplace listing, Activity detail and Events listing;
5. govern approved components and frames in Figma;
6. only then schedule implementation of the public production route.