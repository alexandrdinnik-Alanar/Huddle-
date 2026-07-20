# Huddle Claims & Source Register v2.1 — Working

Дата: 2026-07-18  
Статус: рабочая структура, не финальный внешний документ  
Назначение: контролировать все утверждения, цифры, источники, гипотезы и формулировки, которые используются в Huddle documents.

## Правило

Если утверждение может повлиять на доверие инвестора, грантодателя, муниципалитета, партнёра, родителя или регулятора — оно должно быть здесь.

## Claim status options

- `Verified` — источник проверен и ссылка сохранена.
- `Needs live verification` — источник известен, но ссылка/актуальность ещё не проверена.
- `Owner confirmed` — подтверждено Александром или владельцем направления, но не внешним источником.
- `Planning assumption` — плановая модель, не факт.
- `Hypothesis` — гипотеза для validation/pilot.
- `Internal only` — можно использовать внутри, но не наружу.
- `Not approved` — нельзя использовать.

## Evidence strength

- `E4 Official` — официальный источник / государственная статистика / официальный отчёт.
- `E3 Strong external` — авторитетный внешний отчёт.
- `E2 Controlled internal` — внутренний документ Huddle с ответственным владельцем.
- `E1 Founder context` — контекст от Александра.
- `E0 None` — источника нет.

## Working register

| ID | Claim | Category | Current status | Evidence strength | Required action | Allowed use |
|---|---|---|---|---|---|---|
| C-001 | Huddle is pre-validation and is preparing to validate one Oslo city-cell before broader build-out. | Project status | Owner confirmed | E2 Controlled internal | Keep wording consistent across all docs. | Internal, controlled external |
| C-002 | Planned operating/applicant company is ALANAR AS, not yet incorporated. | Legal/company | Owner confirmed | E1 Founder context | Update after incorporation evidence exists. | Internal, controlled external |
| C-003 | Huddle should not state that ALANAR AS is incorporated until evidence exists. | Legal/company | Verified internal rule | E2 Controlled internal | Add to document QA gate. | All documents |
| C-004 | The current planning model includes a staged NOK 20m foundation/pre-seed round. | Finance | Planning assumption | E2 Controlled internal | Reconcile with current financial model before investor use. | Internal, investor prep |
| C-005 | Huddle has not raised NOK 20m. | Finance | Owner confirmed | E2 Controlled internal | Use as negative control wording. | Internal, QA |
| C-006 | Oslo-first launch is the current geographic strategy. | Strategy | Owner confirmed | E2 Controlled internal | Confirm exact first districts later. | All internal, controlled external |
| C-007 | 90-day validation target includes 40–60 parent interviews. | Validation | Planning assumption | E2 Controlled internal | Confirm owner and calendar. | Internal, pilot prep |
| C-008 | 90-day validation target includes 20–30 organizer conversations. | Validation | Planning assumption | E2 Controlled internal | Confirm owner and calendar. | Internal, pilot prep |
| C-009 | 90-day validation target includes 10–20 municipality/NGO conversations. | Validation | Planning assumption | E2 Controlled internal | Confirm owner and calendar. | Internal, pilot prep |
| C-010 | Huddle’s first proof should be evidence-before-scale, not full national rollout. | Strategy | Owner confirmed | E2 Controlled internal | Use as central strategy. | All documents |
| C-011 | 94% of Norwegian children aged 9–11 had their own mobile phone in 2024. | External statistic | Verified source | E4 Official | Source: Medietilsynet, Barn og medier 2024, published 2024-08-12. URL: https://www.medietilsynet.no/fakta/rapporter/barn-og-medier/barn-medievaner-2024/ | Controlled external |
| C-012 | Problematic social-media use among adolescents in the WHO European region increased from 7% in 2018 to 11% in 2022. | External statistic | Verified source | E4 Official | Source: WHO Europe, Teens, screens and mental health, 2024-09-25. URL: https://www.who.int/europe/news-room/25-09-2024-teens--screens-and-mental-health | Controlled external |
| C-013 | Organised sport participation differs by income/background and may create access inequality. | External statistic | Verified source | E4 Official | Source: Statistics Norway, Fattigere barn driver mindre med idrett. URL: https://www.ssb.no/sosiale-forhold-og-kriminalitet/levekar/artikler/fattigere-barn-driver-mindre-med-idrett | Controlled external |
| C-014 | Cost is a barrier to children’s sports participation for many families: 45% of parents report equipment and travel costs as a barrier, rising to 62% in the lowest income quartile. | External statistic | Verified source | E4 Official | Source: Statistics Norway, Fattigere barn driver mindre med idrett. URL: https://www.ssb.no/sosiale-forhold-og-kriminalitet/levekar/artikler/fattigere-barn-driver-mindre-med-idrett | Controlled external |
| C-015 | Huddle is designed around adult-controlled family participation. | Product/safety | Owner confirmed | E2 Controlled internal | Keep as design principle. | All documents |
| C-016 | Huddle should not claim to be fully GDPR-ready/compliant before legal/privacy review. | Legal/privacy | Verified internal rule | E2 Controlled internal | Add as external wording rule. | All documents |
| C-017 | No public child profiles by default is a planned safety principle. | Product/safety | Planning assumption | E2 Controlled internal | Confirm in MVP PRD and privacy review. | Internal, controlled external |
| C-018 | Marketplace revenue, activity fees, expert commission and B2B revenue are planned revenue layers, not proven revenue. | Finance/business model | Planning assumption | E2 Controlled internal | Reconcile with finance model. | Internal, investor prep |
| C-019 | Huddle can support municipalities with privacy-safe aggregated local insight. | Municipality/public value | Hypothesis | E2 Controlled internal | Define exact data boundaries with privacy advisor. | Internal, municipality prep |
| C-020 | Huddle’s public-value impact must be validated through pilot before being stated as measured impact. | Social impact | Verified internal rule | E2 Controlled internal | Add to grant QA. | All grant documents |
| C-021 | 638 existing website screens are reference-only and not editable production design. | Design/source control | Owner confirmed | E2 Controlled internal | Keep separate from final design system. | Internal |
| C-022 | Final Huddle Brand Guidelines package contains 42 final pages and is the current brand source of truth. | Brand | Owner confirmed | E2 Controlled internal | Link final package location and checksum if needed. | Internal, controlled external |
| C-023 | Only approved logo, icon and updated color palette may be used in new Huddle materials. | Brand | Owner confirmed | E2 Controlled internal | Enforce in Brand QA. | All materials |
| C-024 | Direct grant eligibility depends on whether the route supports ordinary Norwegian AS. | Funding/legal | Needs live verification | E0 None until source added | Verify per grant before application. | Internal |
| C-025 | Some NGO/private foundation routes may require NGO/municipality partner route. | Funding/legal | Needs live verification | E0 None until source added | Verify current eligibility before outreach. | Internal |
| C-026 | Organised sports participation in Norway is higher among children aged 6–11 than 12–15: 78% vs 64% in SSB’s 2024 Barn si fritid reporting. | External statistic | Verified source | E4 Official | Source: Statistics Norway, Meir skigåing blant barn frå høginntektsfamiliar. URL: https://www.ssb.no/kultur-og-fritid/idrett-og-friluftsliv/statistikk/barn-si-fritid/artiklar-om-barn-si-fritid/meir-skigaing-blant-barn-fra-hoginntektsfamiliar | Controlled external |
| C-027 | 72% of Norwegian 9–12-year-olds use social media according to Medietilsynet’s Barn og medier 2024 news summary. | External statistic | Verified source | E4 Official | Source: Medietilsynet, Sju av ti under aldersgrensen er på sosiale medier, published 2024-08-12. URL: https://www.medietilsynet.no/nyheter/aktuelt/sju-av-ti-under-aldersgrensen-er-pa-sosiale-medier/ | Controlled external |
| C-028 | Innovation Norway Oppstartstilskudd 1 is an ongoing grant route for startup companies, with max amount NOK 150,000, aimed at clarifying whether there is a paying market for an innovative business idea. | Funding route | Verified source | E4 Official | Source checked 2026-07-18: Innovation Norway, Oppstartstilskudd 1. URL: https://www.innovasjonnorge.no/tjeneste/oppstartstilskudd-1 | Internal, grant prep |
| C-029 | Innovation Norway Oppstartstilskudd 2 is an ongoing grant route for startup companies, with amount up to NOK 1 million, aimed at technical and business clarification toward a profitable business model. | Funding route | Verified source | E4 Official | Source checked 2026-07-18: Innovation Norway, Oppstartstilskudd 2. URL: https://www.innovasjonnorge.no/tjeneste/oppstartstilskudd-2 | Internal, grant prep |
| C-030 | Research Council IPN Industry & Services 2026 is active/open-ended, has funding scale NOK 1m–16m, project duration 12–48 months, and requires a project owner registered in the Norwegian Register of Business Enterprises with economic activity in Norway plus a collaborating company partner or R&D provider. | Funding route | Verified source | E4 Official | Source checked 2026-07-18: Research Council of Norway, Innovation Project for the Industrial Sector: Industry and services 2026. URL: https://www.forskningsradet.no/en/call-for-proposals/2026/innovation-project-for-the-industrial-sector-industry-and-services-2026/ | Internal, grant prep |
| C-031 | SkatteFUNN is a rights-based tax deduction scheme for Norwegian companies, allowing application for 19% tax deduction of R&D project costs; companies must be registered in Brønnøysundregisteret and taxable to Norway. | Funding route | Verified source | E4 Official | Source checked 2026-07-18: Research Council of Norway, SkatteFUNN. URL: https://www.forskningsradet.no/skattefunn/ | Internal, finance/grant prep |

## Approved wording bank

Use:

> Huddle is pre-validation. The current plan is to validate one Oslo city-cell before broader build-out.

Do not use:

> Huddle has already proven national scalability.

Use:

> The current planning model is a staged NOK 20 million foundation round.

Do not use:

> Huddle has raised NOK 20 million.

Use:

> Huddle is designed around adult-controlled family participation.

Do not use before legal/privacy review:

> Huddle is fully safe, fully compliant or GDPR-ready.

## First source pass priorities

1. Medietilsynet source for children/mobile/screen context.
2. WHO Europe source for problematic social-media use.
3. Statistics Norway or relevant Norwegian public source for participation/cost/access barriers.
4. Official grant/funding pages for Innovation Norway, Forskningsrådet/SkatteFUNN, Oslo municipality and NGO/private foundation routes.
5. Brønnøysundregistrene / Altinn source for AS incorporation facts if used in external documents.

## Definition of done for v2.1

This register becomes v2.1-ready when:

- each external statistic has a URL;
- each URL has access date;
- each source has owner;
- each claim has allowed-use status;
- all investor/grant/pitch documents link back to relevant claim IDs;
- every planning assumption is clearly labelled.
