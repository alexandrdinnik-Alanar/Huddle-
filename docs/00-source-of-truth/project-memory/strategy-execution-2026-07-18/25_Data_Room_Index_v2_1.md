# Huddle Family — Data Room & Due Diligence Index

Version: v2.1  
Date: 2026-07-18  
Audience: founder, investors, grant/funding reviewers, municipality/public-sector partners, strategic advisors  
Status: internal control index; not an external data room release  
Source base: Document Map v1; Huddle Master Project Bible v0.3; Claims & Source Register v2.1; professional rewrite package v2  
QA rule: no data-room file should be shared externally until audience, access level, claims, legal/applicant status, privacy/safety and release log are checked

## Purpose

This index defines what Huddle must be able to provide during investor, grant, partner and advisor diligence.

The data room should make Huddle easy to verify. It should not mix facts, plans, hypotheses, forecasts and old materials.

## Current stage

Huddle is pre-validation and preparing to validate one Oslo city-cell before broader build-out. `[C-001]`

The planned operating/applicant company is ALANAR AS, not yet incorporated. `[C-002]` `[C-003]`

Any document that mentions incorporation, grants, eligibility, fundraising, finance, safety or compliance must preserve this boundary.

## Data-room operating rules

1. Use one active source per document category.
2. Keep superseded files out of the active release folder.
3. Separate actual facts, planning assumptions, hypotheses and future scenarios.
4. Attach claim IDs to material claims.
5. Do not state measured impact before pilot evidence exists. `[C-020]`
6. Do not state GDPR-ready/compliant before legal/privacy review. `[C-016]`
7. Do not place identifiable child or family data in investor/funding data rooms.
8. Keep investor, grant and municipality versions separate when they need different wording.
9. Add owner, status, next action and access level to every active document.
10. Log every external release.

## Status labels

- Final — approved source of truth.
- Controlled draft — usable for internal preparation, not approved for external sharing.
- Working baseline — useful internal material, requires revision before external use.
- Review required — exists but needs domain review.
- Missing — required but does not exist.
- Not applicable yet — depends on later stage.
- Superseded — retained for history, not active.

## Access levels

- Internal only — do not share outside active project team.
- Founder/advisor — can be discussed with close advisors under controlled context.
- Investor prep — can support investor preparation after QA, not automatic external release.
- Grant prep — can support grant preparation after live eligibility and budget review.
- Partner prep — can support municipality/NGO/B2B conversations after QA.
- External ready — can be shared in final export form after release log entry.

## 01 — Executive and company overview

| Document | Current status | Owner | Access level | External-ready? | Required before release | Active source/location |
|---|---|---|---|---|---|---|
| One-page Investor Summary v2.1 | Controlled draft | Founder + finance reviewer | Investor prep | No | Founder review, finance reconciliation, claims/source check, designed PDF | `21_Investor_One_Page_Summary_v2_1.md` |
| Master Project Bible v0.3 | Working baseline | Founder + project editor | Internal only | No | Founder voice confirmation, deeper claims pass, QA | `16_Huddle_Master_Project_Bible_v0_3_Founder_Voice_Pass.md` |
| Company profile | Missing | Founder | Founder/advisor | No | Confirm legal entity, address, ownership, company wording | TBD |
| Legal entity summary | Missing / review required | Legal/applicant owner | Internal only | No | ALANAR AS incorporation status and legal review | TBD |
| Founder bio | Missing | Founder + editor | Investor prep | No | Founder-approved version and photo/assets | TBD |
| Cap table / ownership summary | Missing | Founder + legal/finance | Internal only | No | Incorporation and ownership structure | TBD |
| IP ownership summary | Missing | Legal owner | Internal only | No | Confirm brand, design, code, contractor and agency rights | TBD |

## 02 — Strategy and source governance

| Document | Current status | Owner | Access level | External-ready? | Required before release | Active source/location |
|---|---|---|---|---|---|---|
| Document Map v1 | Working baseline | Project editor | Internal only | No | Keep updated after each new document | `03_Document_Map_v1.md` |
| Claims & Source Register v2.1 | Working baseline | Claims/source owner | Internal only | No | Add access dates, owners and remaining funding sources | `02_Claims_Source_Register_v2_1_Working.md` |
| External Packages Roadmap v0.1 | Working baseline | Project editor | Internal only | No | Link to each package status | `20_External_Packages_Roadmap_v0_1.md` |
| Team & AI Agent Operating Model v1 | Working baseline | Founder + ops owner | Internal only | No | Assign real owners and operating cadence | `04_Team_AI_Agent_Operating_Model_v1.md` |
| Superseded materials register | Missing | Project memory owner | Internal only | No | Identify old files that must not be reused | TBD |
| Decision log | Working baseline / Notion | Founder + ops owner | Internal only | No | Connect Notion/source links | Notion: Huddle OS Project Memory Execution Center |

## 03 — Market, problem and claims evidence

| Document | Current status | Owner | Access level | External-ready? | Required before release | Active source/location |
|---|---|---|---|---|---|---|
| External statistics source set | Working baseline | Claims/source owner | Investor/grant prep | No | Access-date pass and source-owner signoff | `02_Claims_Source_Register_v2_1_Working.md` |
| Norway family participation evidence | Working baseline | Claims/source owner | Grant prep | No | Verify wording against official source text | Claims `[C-013]` `[C-014]` `[C-026]` |
| Digital childhood context | Working baseline | Claims/source owner | Grant/investor prep | No | Verify access dates and translation wording | Claims `[C-011]` `[C-012]` `[C-027]` |
| Huddle-owned research findings | Missing | Research owner | Internal only | No | Complete 90-day validation | TBD |
| Family segmentation evidence | Working baseline | Research owner | Internal only | No | Validate segments in interviews | Master Bible + validation plan |
| Organiser evidence | Missing | Supply/partnership owner | Internal only | No | Complete organiser conversations | TBD |

## 04 — Product and technology

| Document | Current status | Owner | Access level | External-ready? | Required before release | Active source/location |
|---|---|---|---|---|---|---|
| MVP Product Requirements v2 | Working baseline | Product owner | Internal only | No | Close open MVP decisions and privacy constraints | `document_rewrite_2026_07_18/02_rewritten_professional_v1/06_Huddle_Family_MVP_Product_Requirements_v2.md` |
| MVP Product Requirements v2.1 | Missing | Product owner | Internal only | No | Update from Master Bible and pilot scope | TBD |
| Technical architecture | Missing / review required | Tech lead | Internal only | No | Define stack, data model, security and integrations | GitHub + future spec |
| Repository evidence | Review required | Tech lead | Internal only | No | Verify current GitHub state and branch/source control | `github-main/` |
| Security baseline | Missing | Tech lead + privacy advisor | Internal only | No | Auth, roles, access control, incident handling | TBD |
| Trust & Safety model | Working principles only | Trust & Safety owner | Internal only | No | Create operational policy and review gate | Master Bible + future T&S doc |
| Product screenshots/design references | Reference-only | Design owner | Internal only | No | Rebuild using final brand system if needed | `github-main/assets/screens/` |

## 05 — Validation and pilot

| Document | Current status | Owner | Access level | External-ready? | Required before release | Active source/location |
|---|---|---|---|---|---|---|
| 90-Day Validation Plan v2 | Working baseline | Research/ops owner | Founder/advisor | No | Owner, calendar, consent, repository | `document_rewrite_2026_07_18/02_rewritten_professional_v1/04_Huddle_Family_90_Day_Validation_Plan_v2.md` |
| Oslo City-Cell Pilot Proposal v2.1 | Controlled draft | Founder + pilot owner | Partner prep | No | Geography, budget, partner route, privacy review | `24_Oslo_City_Cell_Pilot_Proposal_v2_1.md` |
| Research protocol | Missing | Research owner | Internal only | No | Interview guide, consent, data handling | TBD |
| Consent templates | Missing / review required | Privacy/legal owner | Internal only | No | Legal/privacy review | TBD |
| Evidence repository | Missing | Research owner | Internal only | No | Create structured repository before interviews | TBD |
| Pilot measurement plan | Working baseline | Research + ops + partner lead | Partner prep | No | Define metrics, baselines, reporting boundaries | `24_Oslo_City_Cell_Pilot_Proposal_v2_1.md` |
| Day-90 decision memo | Not applicable yet | Founder + research owner | Internal only | No | Complete 90-day validation | TBD |

## 06 — Finance and business model

| Document | Current status | Owner | Access level | External-ready? | Required before release | Active source/location |
|---|---|---|---|---|---|---|
| Financial model vNext | v0.1 workbook created / review required | Finance/controller | Internal only | No | Add real cost inputs, grant rules, revenue assumptions and approval | `30_Huddle_Finance_Model_vNext_v0_1.xlsx` |
| Use of funds | v0.1 control baseline + workbook created | Finance/controller + founder | Investor/grant prep | No | Separate investor ask, grant budget and pilot budget; review before external use | `27_Use_of_Funds_and_Finance_Assumptions_v0_1.md`; `30_Huddle_Finance_Model_vNext_v0_1.xlsx` |
| NOK 20m staged funding model | Planning assumption | Founder + finance | Investor prep | No | Confirm structure and second-close logic | Claim `[C-004]` |
| Revenue model | Planning assumption | Founder + finance | Investor prep | No | Label planned vs proven revenue | Claim `[C-018]` |
| Actual expenditure | Missing | Finance/controller | Internal only | No | Add bookkeeping once company/bank/accounting is active | TBD |
| Grant/investor budget reconciliation | Missing | Finance/controller | Internal only | No | Prevent mixed budget narratives | TBD |

## 07 — Funding and grants

| Document | Current status | Owner | Access level | External-ready? | Required before release | Active source/location |
|---|---|---|---|---|---|---|
| Grant/Public Value Narrative v2.1 | Controlled draft | Founder + grant writer | Grant prep | No | Live eligibility, applicant route, budget, privacy review | `22_Grant_Public_Value_Narrative_v2_1.md` |
| Funding ecosystem master | Available / needs current verification | Funding owner | Internal only | No | Verify live deadlines and eligibility | `Huddle_Norway_Oslo_Funding_Ecosystem_Master_v2.xlsx` if present in active materials |
| Grant eligibility memos | Wave 1 created | Funding owner + legal/applicant owner | Internal only | No | Continue priority routes; founder/legal/finance review before application | `32_Grant_Eligibility_Memo_NO_002_Innovation_Norway_Oppstartstilskudd_1_v0_1.md`; `33_Grant_Eligibility_Memo_NO_003_Innovation_Norway_Oppstartstilskudd_2_v0_1.md`; `34_Grant_Eligibility_Memo_NO_007_RCN_IPN_Industry_Services_2026_v0_1.md`; `35_Grant_Eligibility_Memo_NO_008_SkatteFUNN_v0_1.md` |
| Application calendar | Missing | Funding owner | Internal only | No | Live dates from official funder pages | TBD |
| Submitted applications and responses | Not applicable yet | Funding owner | Internal only | No | Add only after submission | TBD |
| Partner-route notes | Missing | Funding owner + partner lead | Internal only | No | Check AS vs NGO/municipality route | Claims `[C-024]` `[C-025]` |

## 08 — Brand, design and communication

| Document | Current status | Owner | Access level | External-ready? | Required before release | Active source/location |
|---|---|---|---|---|---|---|
| Final Brand Guidelines package | Final source of truth | Brand owner / founder | External ready as brand source | Yes | Keep protected; do not edit old copies | `deliverables/Huddle_Brand_Guidelines_Final_Package_2026-07-17.zip` |
| Brand rules summary | Final/working | Brand owner | Founder/advisor | Yes as reference | Check against final package if reused | `deliverables/Huddle_Brand_Guidelines_Final_Package_2026-07-17/04_Brand_Rules/Huddle_Brand_Rules_Summary.md` |
| Website/product design system brief | Missing | Design owner + product owner | Internal only | No | Extract tokens/components from final brandbook | TBD |
| Full visual project presentation | Working copy | Design/content owner | Internal only | No | Founder/claims review, then designed file | `17_Full_Project_Presentation_Slide_Copy_v0_1.md` |
| Short public overview | Working copy | Design/content owner | Internal only | No | Founder/public tone review | `18_Short_Public_Overview_Slide_Copy_v0_1.md` |
| Emotional family presentation | Working copy | Founder + content owner | Internal only | No | Founder emotional truth review | `19_Emotional_Family_Presentation_Slide_Copy_v0_1.md` |

## 09 — Team and operations

| Document | Current status | Owner | Access level | External-ready? | Required before release | Active source/location |
|---|---|---|---|---|---|---|
| Team & AI Agent Operating Model v1 | Working baseline | Founder + ops owner | Internal only | No | Assign owners and cadence | `04_Team_AI_Agent_Operating_Model_v1.md` |
| Human team model | Approved planning model | Founder | Internal only | No | Convert to hiring sequence and budget | Existing project notes |
| Advisor/contractor list | Missing | Founder | Internal only | No | Identify named advisors and contractor needs | TBD |
| Responsibility matrix | Missing | Ops owner | Internal only | No | Connect roles to documents and gates | TBD |
| Delivery cadence | Working baseline | Ops owner | Internal only | No | Weekly operating rhythm | `00_Sprint_0_Control_Plan.md` |

## 10 — Privacy, child safety, legal and security

| Document | Current status | Owner | Access level | External-ready? | Required before release | Active source/location |
|---|---|---|---|---|---|---|
| Privacy and child-safety principles | Working principles | Privacy/T&S owner | Internal only | No | Legal review and policy writing | Master Bible + Claims `[C-015]` `[C-016]` `[C-017]` |
| DPIA baseline | Missing | Privacy/legal owner | Internal only | No | Required before real pilot data collection | TBD |
| Consent model | Missing | Privacy/legal owner | Internal only | No | Parent/adult consent and withdrawal model | TBD |
| Data minimisation model | Missing | Privacy/legal + product owner | Internal only | No | Define family context fields and retention | TBD |
| Incident response model | Missing | Trust & Safety owner | Internal only | No | Escalation, reporting, review cadence | TBD |
| Moderation model | Missing | Trust & Safety owner | Internal only | No | Content, organiser and interaction rules | TBD |
| Vendor/subprocessor register | Missing | Privacy/legal + tech owner | Internal only | No | Required once tools/vendors are selected | TBD |

## 11 — Commercial and partner packages

| Document | Current status | Owner | Access level | External-ready? | Required before release | Active source/location |
|---|---|---|---|---|---|---|
| B2B Partner Stores Package | Not started | B2B/commercial owner | Partner prep | No | Marketplace strategy and revenue assumptions | TBD |
| Municipality presentation | Not started | Public-sector lead | Partner prep | No | Pilot proposal + public-value narrative | TBD |
| NGO/community partner brief | Not started | Community partner lead | Partner prep | No | Partner-route strategy | TBD |
| Strategic partner one-pager | Not started | Partnerships lead | Partner prep | No | Define partner category and ask | TBD |

## 12 — Release log

No external data-room release is recorded in this index.

When a file is released, record:

| Release date | Recipient/audience | Files shared | Version | Approval owner | Notes |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | No release yet |

## Top priority gaps

1. ALANAR AS incorporation evidence and legal entity summary.
2. Founder-approved company profile and founder bio.
3. IP ownership summary for brand, software, design, documents and contractors.
4. Finance model vNext with real Norway costs, runway and use-of-funds inputs.
5. Separate grant budget, investor budget and Oslo pilot budget review.
6. Remaining grant eligibility memos for priority routes.
7. Privacy/legal baseline, including DPIA, consent model and data boundaries.
8. Trust & Safety operating model and incident response.
9. Research protocol, consent templates and evidence repository for the 90-day validation.
10. Technical architecture and security baseline.
11. Designed investor/pilot/grant exports based on the final brand system.
12. Release-control process for external sharing.

## Immediate next actions

| Priority | Action | Owner | Output |
|---|---|---|---|
| 1 | Confirm ALANAR AS incorporation/applicant path | Founder + legal/applicant owner | Legal status memo |
| 2 | Reconcile finance model and use-of-funds | Founder + finance/controller | Finance model vNext with real estimates |
| 3 | Prepare first Oppstartstilskudd 1 application skeleton | Funding owner | Application-ready structure, not final submission |
| 4 | Create privacy/safety baseline | Privacy/legal + T&S owner | DPIA baseline and safety operating memo |
| 5 | Create validation evidence repository | Research owner | Interview, consent and evidence system |
| 6 | Convert investor/grant/pilot drafts into designed PDFs after QA | Brand/design + editor | External-ready exports |

## External-use gate

A data-room item is not external-ready until it has:

- correct version/date/audience;
- owner and approval status;
- claims checked against the Claims & Source Register;
- legal/applicant wording checked;
- finance labels checked if money is mentioned;
- privacy/child-safety check if children, family data or public reporting are mentioned;
- founder approval;
- release-log entry.
