# Huddle — project notes

## Standing task: generate more photography when image credits return
The higgsfleld image workspace ran out of credits mid-redesign. When credits are available again:
- Generate distinct **product** photos (balance bike, plush bear, water bottle, high chair, dress, play kitchen) on cream backgrounds, and more **community/activity** shots (festival, expert consult, sports, music class).
- Replace any reused photos on Home, then roll the same photographic system across Marketplace, Community, Events, Activities, Services.
- Tool: `higgsfleld__generate_image` (model `nano_banana_2`, set `aspect_ratio`); retrieve URLs via `higgsfleld__show_generations` (has a `url` column). Binaries can't be downloaded in-sandbox — embed by URL via `<img src>` / `<image-slot src>`.

## Brand tokens
cream #F6F0E8 · warm-white #FCF9F3 · sand #EFE4D4/#E6D7C2 · line #E7DAC7/#DBC9B0 · copper #BC7A45 / deep #9E5A2C · copper-tint #F2E6D6 · olive #8A9076 / deep #6E7459 · espresso #3A342C · text #463F37 / #8A7C6C / muted #A99B89.
Fonts: Playfair Display (display) + Inter (body). Assets: `assets/Huddle_wordmark.png`, `assets/Huddle_icon.png` (+ white variants). Line icons: `Icon.dc.html`.

## Design direction (2026)
Warm/earthy, organic anti-grid shapes (arches, rings), grain/texture, mature glassmorphism, oversized editorial type, immersive full-bleed photography, kinetic/scroll reveals. Positioning: **families find each other for shared activities & time together** (connection-first, not marketplace-first).
