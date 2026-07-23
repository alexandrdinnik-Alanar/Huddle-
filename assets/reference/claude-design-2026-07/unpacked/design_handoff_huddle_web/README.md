# Handoff: Huddle — Web Platform Visual Design

## Overview
Huddle is a privacy-first local family platform: families discover each other for shared activities, join events, shop a pre-loved & new marketplace, and book trusted local experts. This package contains the **high-fidelity visual design** for the web product — home, catalog surfaces (marketplace, activities, events, community, services), the logged-in app, role dashboards, and the admin/moderation layer.

Target codebase: **`alexandrdinnik-Alanar/Huddle-`** (Next.js 16 App Router, React 19, TypeScript strict, CSS-variable tokens, Tailwind-compatible, modular monolith). The repo currently ships **55 route stubs as 178-byte placeholders** — this design is the furthest-along visual layer and should drive their implementation.

## About the Design Files
The files in this bundle are **design references authored in HTML** (a lightweight component format — `.dc.html` — that renders in a browser). They are **prototypes of intended look & behavior, not production code to copy verbatim.** The task is to **recreate them in the Huddle repo's existing environment** — React Server Components + `use client` where needed, under `src/app/(public|auth|app|admin)/…`, styling via the canonical CSS-variable tokens (no arbitrary brand values), composing `src/components` primitives. Business logic stays in `src/modules/<domain>`; route files orchestrate only.

Each `.dc.html` = one screen/section. Shared chrome (header, footer, sidebars, icon set) is factored into its own files and imported by the pages — mirror that with real React components.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, radii, shadows, hover/active states, scroll-reveal and micro-interactions are all specified. Recreate pixel-close using the repo's token system and component library.

## ⚠ Brand-token divergence — decision required
This redesign intentionally uses a **refined warm palette + a modern type pairing** that **differs from the repo's older locked brand doc** (`docs/00-source-of-truth/master-brand-system-audit.md`). Reconcile before implementation:

| | This design (recommended) | Repo's current locked doc |
|---|---|---|
| Display font | **Newsreader** | Playfair Display |
| Body font | **Hanken Grotesk** | Inter |
| Primary accent | **Copper `#BC7A45` / deep `#9E5A2C`** | Copper `#C47A4A` |
| Dark neutral | **Espresso `#3A342C`** | Deep Forest `#2F3E34` |
| Body text | **`#463F37`** | Charcoal `#4F4A43` |
| Secondary | **Soft Olive `#8A9076` / `#6E7459`** | Sage `#A2AC95` |

The design owner should confirm which is canonical and update the Figma master + `brand-system.md` accordingly. Everything below reflects **this design**.

## Design Tokens

### Color
```
--cream:        #F6F0E8   /* page background */
--warm-white:   #FCF9F3   /* cards, header, trust strips */
--sand:         #EFE4D4   /* soft fills */   --sand-2: #E6D7C2
--line:         #E7DAC7   /* hairlines */    --line-2: #DBC9B0 (borders)
--copper:       #BC7A45   /* primary accent, buttons */
--copper-deep:  #9E5A2C   /* links, accent text */
--copper-tint:  #F2E6D6   /* chips, soft accent bg */
--copper-glow:  #EDBB8B / #F0B57F / #F0D9BE  /* on-dark accents */
--olive:        #8A9076   /* secondary accent */   --olive-deep: #6E7459
--espresso:     #3A342C   /* darkest neutral, dark sections */
--text:         #463F37   /* body text */
--text-2:       #8A7C6C   /* secondary text */
--muted:        #A99B89   /* meta text */
```
Semantic: buttons/CTAs = `--copper` (hover `#A9663A`); links = `--copper-deep` (hover `--copper`); success/olive tags = `--olive-deep` on `#EAEBE1`; New tag = `--olive-deep`, Pre-owned tag = `--copper`.

### Typography
- **Newsreader** (serif, opsz 6..72, italics used for accent words) — h1 `clamp(38–82px)`, section titles 22–34px, card titles 19–22px. Weight 500 for display.
- **Hanken Grotesk** (sans) — body 13–17px, meta 10.5–12px, uppercase eyebrows 11px `letter-spacing:.16–.24em`.
- Headline accent pattern: a trailing phrase in `font-style:italic;color:var(--copper)`.

### Spacing / radius / shadow
- Page gutter `40px`; max content width `1280px` (docs 1100px).
- Radius: cards `16–22px`, feature tiles `22–26px`, pills/buttons `24–30px`, chips `16–22px`, avatars/icon-chips `50%`.
- Shadows (warm, brown-tinted): card `0 10px 26px rgba(150,110,70,.07)`; hover `0 18px 38px rgba(150,110,70,.14)`; hero image `0 24px 56px rgba(120,86,52,.20)`; dark CTA `0 12px 26px rgba(188,122,69,.28)`.
- Hover lift: `translateY(-4px)` on cards; image zoom `scale(1.06–1.07)` with `.5–.6s cubic-bezier(.2,.7,.2,1)`.

## Shared components (build these first)
- **SiteHeader** — top utility bar (espresso) + main bar: wordmark, nav (active state = copper text + 2px copper underline), search pill, EN/NOK, user/heart/bag icons with count badge. Prop: `active` (shop/community/activities/events/services/…), optional `breadcrumb`.
- **SiteFooter** — newsletter card, app-store badges (Apple/Google SVG glyphs), social icons (Instagram/Facebook/TikTok/YouTube inline SVG), 7 link columns on a warm gradient with the icon watermark, espresso legal bar.
- **AppHeader** — logged-in top bar (wordmark, app nav, search, mail/heart/bag, avatar). Prop `active`.
- **DashboardSidebar / PartnerSidebar / AdminSidebar** — left rails; active item = copper-tint bg + copper text. AdminSidebar is espresso (`#2A251F`).
- **Icon** — shared line-icon set (SVG, `icon-name` + `color` + `size` props). Names used: home, user, people, heart, search, bag, tag, calendar, book, toy, bed, shirt, leaf, pin, lock, truck, refresh, check, star, chat, mail, gear, clock, coin, chart, signal, handshake, bookmark, pulse, sparkle, flag. **No emoji anywhere** — always this set.

## Screens / Views
Full route-by-route status is in **`ProjectCoverage.dc.html`** (built from the repo's `canonical-route-map.csv`, 108 routes). Highlights of what's designed here:

### Home (`/`) — flagship, hifi
- **Hero — "Discovery Bar":** full-bleed family photo, dark bottom-weighted scrim, grain overlay, concentric-ring brand motif top-right. Oversized Newsreader headline ("Where families find *their people.*"). A glass **tabbed search bar** (Families / Activities / Events) — clicking a tab swaps the active pill, the hint text, and the Search button's destination (small JS controller).
- **Marquee band:** italic Newsreader keywords auto-scrolling (`@keyframes` translateX, 30s linear).
- **Category bento:** 4-col grid — a 2×2 photo feature ("Playdates & Groups") + photo tiles (Outdoor, Weekend Events, Classes & Workshops, Baby & Toddler) each with a labelled chip (icon + kicker) over a bottom-gradient, + a full-width espresso Marketplace banner (`grid-column:1/-1`).
- **How Huddle works:** 3 photo step-cards on a dashed connector; each has a colored number badge (copper/olive/espresso), an icon chip, title, description, and a step chip (≈ 2 minutes / Smart-matched / In real life).
- **Community + Services banners:** mirrored split cards (photo + colored copy panel) with a floating stat/verified chip.
- **Families you'll click with:** **horizontal scroller** (see Interactions) of family match cards — photo/monogram, % match badge, name, distance, interest chips, "Say hi" button.
- **From the Marketplace:** **horizontal scroller** of product cards — gradient thumbnail + category icon, New/Pre-owned tag, wishlist heart, name, price (copper), city.
- **Pull quote**, **Activities & events this month** (image-led date cards + partner CTA), **trust strip** (icons + labels), footer.

### Catalog pages (hifi)
- **Marketplace (`/marketplace`)** — editorial hero w/ stats, condition pills, filter chip bar, results count, 12-product editorial grid (image slot + tag + wishlist + name + price + city), Shop-by-category (icon+gradient tiles), Shop-by-age-stage, 3 collection banners, sell CTA, trust row.
- **Activities (`/activities`)** — hero + floating search bar, category pills (icon + label), Featured-this-week & Recommended card rows, promo cards, by-age-stage, parent-led + map placeholder, organiser CTA.
- **Events (`/events`)** — hero with tilted floating date cards, horizontal date strip, 7 category sections of event cards (date chip + title + age + place), featured festival + app banners, organiser CTA.
- **Community (`/app/community`)** — hero + stat card, tab pills, browse-by-age circles, upcoming events, groups, experts (Icon star ratings), organisations, articles, app CTA.
- **Services (`/services`)** — expert & bundle discovery.

### App, role dashboards, admin
Member app (dashboard, messages, saved, search, family matching, groups, listings, bookings, events, activities), role dashboards (seller/organizer/partner/municipality), and the admin/moderation/finance layer are built and on-brand; see the coverage doc for the exact file↔route map and the Missing/Partial list.

## Interactions & Behavior
- **Scroll reveal:** elements marked `data-om-reveal` start `opacity:0;translateY(22px)` and animate in via IntersectionObserver (threshold .08); `prefers-reduced-motion` disables it. A polling setup script wires nodes that stream in late.
- **Hero Ken-Burns:** hero `<img>` runs a slow `scale(1.08→1)` over 22s.
- **Hero discovery tabs:** JS updates active pill styling, hint text, and Search `href` per tab (Families→matching, Activities, Events).
- **Horizontal scrollers (Families, Marketplace):** native `overflow-x:auto` with the **scrollbar hidden** (`scrollbar-width:none` + `::-webkit-scrollbar{display:none}`); **prev/next arrow buttons** (`data-arrow` + `data-target`) call `scrollBy({behavior:'smooth'})`; **drag-to-scroll** via mousedown/move/up on `.om-scroll`; a capture-phase click guard cancels the click after a drag. Cards use `scroll-snap-align:start`.
- **Hover:** cards lift + shadow deepen; images zoom; buttons darken/translate; nav underline + color.
- **Image slots:** empty photo areas use a drag-and-drop `<image-slot>` web component with a descriptive placeholder and a stable `id` (drop persists). In React, replace with the repo's image component + real media.

## State Management (for the React build)
- Hero tab selection (families/activities/events) → local `useState`; drives hint + search route.
- Scrollers → refs + scroll handlers (or a small `useDragScroll` hook); no global state.
- Filter bars / condition pills / date strips → local selection state feeding the query for that surface's server component.
- Auth/role gating (member vs seller/organizer/partner/municipality/admin) → server-side per the repo's RBAC + capability model; client visibility ≠ authorization.
- Data (listings, events, activities, matches, products) is presently static placeholder content — wire to the repo's domain modules/DTOs.

## Assets
- **Logos/marks:** `assets/Huddle_wordmark.png`, `assets/Huddle_icon.png`, `assets/Huddle_icon_white_transparent.png`, `assets/Huddle_logo_white_transparent.png` (repo equivalents live under `public/brand/`). Use the repo's approved brand binaries in production.
- **Icon set:** `Icon.dc.html` (inline SVG line icons) — port to an `<Icon name>` React component.
- **Photography:** 6 on-brand family/lifestyle photos are embedded by URL (higgsfield CDN, `d8j0ntlcm91z4.cloudfront.net/...`). These are **temporary references**; product/category/service/expert cards await a full unique photo set (blocked on the image plan). Replace all with real, rights-cleared media.
- **image-slot.js** — the drop-in placeholder web component (design-time only).

## Files in this bundle
- `README.md` (this file)
- Flagship pages: `Home.dc.html`, `Marketplace.dc.html`, `Activities.dc.html`, `Community.dc.html`, `Events.dc.html`, `ServicesHome.dc.html`
- Shared: `SiteHeader.dc.html`, `SiteFooter.dc.html`, `AppHeader.dc.html`, `DashboardSidebar.dc.html`, `PartnerSidebar.dc.html`, `AdminSidebar.dc.html`, `Icon.dc.html`, `image-slot.js`
- Analysis: `ProjectCoverage.dc.html` (route-by-route status), `SiteAudit.dc.html` (issue log)
- Brand: `brand_guidelines.txt`
- `assets/` — logos + icon marks

The **complete set of ~133 screens** lives in the design project root (same `.dc.html` format); the coverage doc maps every one to its canonical route. Ask if you want the full set bundled.
