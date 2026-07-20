# Huddle Family — Privacy & Child Safety Baseline

Version: v0.1  
Date: 2026-07-18  
Audience: founder, product owner, Trust & Safety owner, privacy/legal advisor, research owner, grant/investor-prep team  
Status: internal operating baseline; not legal advice and not a reviewed privacy policy  
Source base: Claims & Source Register v2.1; MVP Product Requirements v2; Grant/Public Value Narrative v2.1; Oslo City-Cell Pilot Proposal v2.1  
QA rule: requires legal/privacy/child-safety review before use in product, grant submissions, municipality proposals or public materials

## Purpose

Huddle’s trust promise cannot be a slogan. It must become an operating boundary.

This baseline defines the minimum privacy and child-safety rules that should guide research, MVP design, pilot preparation, partner reporting and external documents.

## Current boundary

Huddle is designed around adult-controlled family participation. `[C-015]`

No public child profiles by default is a planned safety principle. `[C-017]`

Huddle must not claim to be fully GDPR-ready, compliant or legally approved before professional legal/privacy review. `[C-016]`

## Product safety principles

### 1. Adults control participation

Parents or authorised adults should manage family accounts, child context, permissions, activity decisions and contact with organisers.

Children should not be required to create public-facing profiles for the MVP or validation pilot.

### 2. No public searchable child profiles by default

Child information should not become a public profile, public feed, public directory entry or searchable record by default.

If any future child-facing feature is considered, it must go through separate legal, privacy, safety and product review.

### 3. Data minimisation

Huddle should collect only the family context needed to support relevance, trust, safety and participation.

Potential family-context fields must be classified before collection:

| Data type | Example | Default handling |
|---|---|---|
| Adult account data | name, email, phone | Required only where needed |
| Family context | children’s age ranges, interests, location area | Minimise and avoid unnecessary precision |
| Participation preferences | schedule, budget, accessibility needs | Optional where possible |
| Safety/contact data | consent, blocked users, reports | Protected and access-controlled |
| Sensitive data | health, disability, special needs, family circumstances | Avoid unless clearly necessary and reviewed |
| Child identity data | full child names, photos, direct contact details | Avoid in MVP unless reviewed and justified |

### 4. Purpose limitation

Each data field should have a clear purpose:

- recommendation relevance;
- participation logistics;
- safety and moderation;
- support;
- payment or registration where necessary;
- aggregated public-value analysis where reviewed.

Data collected for family participation should not automatically become advertising, resale or unrestricted partner-reporting data.

### 5. Controlled contact

Unknown adults should not be able to contact children directly.

First-contact flows should be adult-controlled and tied to a specific legitimate context, such as:

- activity inquiry;
- registration;
- organiser support;
- expert booking;
- marketplace transaction;
- parent-led group participation, if included later.

### 6. Partner reporting is aggregated

Municipalities, funders, NGOs and pilot partners may receive aggregated reporting only.

Huddle should not expose:

- individual child profiles;
- identifiable family journeys;
- sensitive family dossiers;
- raw research notes with identifiable data;
- unrestricted neighbourhood-level surveillance dashboards;
- personal data that is not necessary for the partner purpose.

Public-value impact must not be described as measured until pilot evidence exists. `[C-020]`

## Research and validation baseline

Before interviews or pilot research, Huddle should define:

- interview purpose;
- consent wording;
- participant eligibility;
- whether minors are involved directly or only via parents/adults;
- what data is collected;
- where notes are stored;
- who has access;
- retention period;
- withdrawal process;
- anonymisation or pseudonymisation method;
- whether any incentives are provided;
- how findings can be quoted or summarised.

Research outputs should separate:

- raw notes;
- coded findings;
- anonymised quotes;
- aggregate patterns;
- founder interpretation;
- claims approved for external use.

## MVP baseline requirements

The MVP should include, at minimum:

| Area | Baseline requirement |
|---|---|
| Adult account | Adult-controlled account creation and access |
| Family context | Minimal context needed for fit and participation |
| Consent | Clear consent and withdrawal route |
| Visibility | No public searchable child profiles by default |
| Contact | Adult-controlled contact path |
| Reporting | Report/block/support access |
| Moderation | Manual review process for pilot stage |
| Data access | Role-based internal access |
| Partner reporting | Aggregated only |
| Incident handling | Escalation route and owner |
| Deletion/export | User route to request deletion/export |

## Trust & Safety operating baseline

Huddle needs a named Trust & Safety owner before live pilot operations.

Minimum processes:

- organiser verification baseline;
- expert/service provider verification baseline;
- listing/activity review;
- parent support inbox;
- report/block flow;
- incident severity levels;
- response time expectations;
- escalation to founder/legal/safety advisor;
- weekly review during pilot;
- post-incident review log.

## Incident severity draft

| Level | Example | Response expectation |
|---|---|---|
| L1 — Content/data issue | outdated listing, wrong age range, unclear price | Correct or hide item |
| L2 — User support issue | cancellation, confusion, mismatch, complaint | Support owner response |
| L3 — Trust concern | suspicious organiser, inappropriate message, repeated complaints | T&S review and possible suspension |
| L4 — Child safety concern | allegation of harm, grooming, abuse, unsafe environment | Immediate escalation, preserve evidence, seek professional/legal guidance |
| L5 — Legal/regulatory concern | data breach, unlawful processing, serious complaint | Legal/privacy escalation and formal incident process |

This table is an internal draft and must be reviewed by a qualified privacy/child-safety professional before real use.

## External wording rules

Allowed before legal review:

- “Huddle is designed around adult-controlled family participation.”
- “Huddle is being built with privacy and child-safety as core design boundaries.”
- “Pilot reporting is intended to be aggregated and privacy-safe.”
- “Final privacy and child-safety wording requires professional review.”

Not allowed before legal review:

- “Huddle is fully GDPR-compliant.”
- “Huddle is child-safe.”
- “Municipalities can access family-level dashboards.”
- “We guarantee safety.”
- “We have completed a DPIA.”
- “Our reporting contains no privacy risk.”

## Documents requiring privacy/child-safety review

| Document | Why review is needed |
|---|---|
| MVP PRD v2.1 | Defines account, data, consent, contact and reporting flows |
| Oslo City-Cell Pilot Proposal v2.1 | Mentions family cohort, partner reporting and public-value measurement |
| Grant/Public Value Narrative v2.1 | Used with public-sector/funding audiences |
| Investor Summary v2.1 | Mentions privacy/safety as product boundary |
| Website copy | Public trust claims |
| Research protocol | Interview consent and data handling |
| Data Room Index v2.1 | Controls what can be shared externally |
| Municipality presentation | Public reporting and data boundary claims |

## Open questions for legal/privacy review

1. What exact lawful basis applies to parent account data, family context and pilot research data?
2. Can Huddle collect child age ranges and interests without child accounts?
3. What data should never be collected in MVP?
4. What consent wording is required for parent interviews?
5. What consent wording is required for pilot participation?
6. What retention periods should apply to research notes, family context, incident logs and support records?
7. What partner reporting can be safely shared at aggregate level?
8. What data access controls are required internally?
9. What vendor/subprocessor records are required before MVP?
10. What incident response process is required for child-safety concerns?
11. What needs to be included in a DPIA baseline?
12. What public claims are safe to make before and after review?

## Immediate next actions

1. Assign a privacy/legal advisor.
2. Assign a Trust & Safety owner.
3. Create research consent templates before interviews.
4. Create a DPIA baseline before real family data collection.
5. Review MVP PRD against data minimisation and adult-control principles.
6. Define partner reporting examples that are useful but non-identifying.
7. Add privacy/safety review status to all external documents.

## Completion criteria

This baseline becomes release-ready only when:

- reviewed by qualified legal/privacy advisor;
- Trust & Safety owner is named;
- product data fields are mapped;
- consent and withdrawal process is drafted;
- incident response process is reviewed;
- partner reporting examples are approved;
- public wording rules are confirmed;
- open questions are resolved or assigned.

