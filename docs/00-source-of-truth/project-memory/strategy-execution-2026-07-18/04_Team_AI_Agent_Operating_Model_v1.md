# Huddle Team & AI Agent Operating Model v1

Дата: 2026-07-18  
Статус: рабочая операционная модель  
Назначение: определить, как Huddle управляет командой, AI-агентами, задачами, качеством и завершением документов/работ.

## Core idea

Huddle сейчас не должен притворяться, что у него уже есть большая команда. Правильная модель:

- Founder controls strategy and final approvals.
- Core roles are planned/needed.
- Critical expert roles can be outsourced first.
- AI agents support research, drafting, QA and operations.
- Human review remains mandatory for legal, privacy, finance, safety and external submissions.

## Operating layers

### Layer 1 — Founder / Decision Control

Owner: Alexander

Responsibilities:

- final vision;
- strategic priorities;
- approval of external materials;
- investor/funding decisions;
- hiring decisions;
- legal/company decisions;
- final brand decisions.

Cannot be delegated:

- founder approval;
- legal commitment;
- financial commitment;
- external submission;
- hiring commitment;
- promises to investors/partners.

### Layer 2 — Critical Human Advisors

These should be found early, even if not full-time.

| Role | Why critical | First task |
|---|---|---|
| Privacy / Child Safety / Legal Advisor | Huddle touches families, children, data, trust, marketplace and public sector | Review safety/privacy claims and MVP assumptions |
| Grant / Funding Advisor | Grants have eligibility and wording traps | Verify Wave 1 funding routes |
| Finance Controller | Numbers must be credible for grants/investors | Reconcile NOK 20m, Oslo budget and revenue model |
| Product Manager | Prevents MVP scope explosion | Close MVP open decisions |
| Tech Lead / CTO-track | Prevents bad technical architecture | Review MVP technical assumptions |

### Layer 3 — Core Team Functions

| Function | Responsibility | Current status |
|---|---|---|
| COO / Operations | Tasks, cadence, dashboards, blockers | Needed |
| Art Director | Brand and design quality | Needed |
| UI/UX Product Designer | Editable Figma design system and product flows | Needed |
| Brand Strategist | Positioning, messaging, audience logic | Needed |
| Copywriter / SEO Editor | Professional documents and website copy | Needed |
| Content / Social Media | Social, campaign and community content | Needed |
| Marketing / Growth | Go-to-market, acquisition, campaigns | Needed |
| PR / Partnerships | Partnerships, media, organizations | Needed |
| Sales A — Parents/Community | Parent interviews, community pipeline | Needed |
| Sales B — Organizations/Municipalities | Activity organizers and public sector relationships | Needed |
| Sales C — Companies/Distributors/Retail | B2B partner stores and brands | Needed |
| Finance Controller | Budget, runway, financial model | Outsource first / critical |
| Support / Moderator | Future moderation and customer support | Later hire |

## AI agent layer

### A-001 Strategy & Narrative Agent

Mission:

- help build Master Project Bible;
- keep project logic coherent;
- detect contradictions between documents.

Outputs:

- section drafts;
- open questions;
- contradiction log;
- summary for founder review.

Escalates when:

- strategic claim conflicts with existing source of truth;
- a new direction changes product/business scope.

### A-002 Claims & Evidence Agent

Mission:

- maintain Claims & Source Register;
- label facts vs assumptions;
- identify missing sources.

Outputs:

- claim IDs;
- source requirements;
- verification status;
- wording rules.

Escalates when:

- an external statistic lacks source;
- a document states hypothesis as fact;
- a funding/legal claim requires live verification.

### A-003 Grant & Funding Agent

Mission:

- review grants and funding opportunities;
- classify AS route vs partner route;
- prepare application drafts.

Outputs:

- eligibility memo;
- funding calendar;
- grant package checklist.

Escalates when:

- application requires legal/applicant decision;
- source terms changed;
- external submission is requested.

### A-004 Document QA Agent

Mission:

- ensure documents are professional and external-ready only after QA.

Outputs:

- QA report;
- required changes;
- approved wording;
- blocked claims.

Escalates when:

- document is being called final without sources, finance or legal review.

### A-005 Product & MVP Agent

Mission:

- maintain MVP scope;
- translate strategy into product requirements;
- prevent overbuild.

Outputs:

- user flows;
- MVP open decisions;
- PRD sections;
- acceptance criteria.

Escalates when:

- new feature expands beyond MVP without founder decision.

### A-006 Tech Architecture Agent

Mission:

- prepare technical specification;
- structure architecture decisions;
- identify integration, security and data risks.

Outputs:

- architecture outline;
- API assumptions;
- technical backlog;
- risk list.

Escalates when:

- privacy/security decisions require human expert review.

### A-007 Brand & Design QA Agent

Mission:

- enforce final brand guidelines;
- check design consistency;
- separate brandbook, website and product design.

Outputs:

- brand QA checklist;
- design-system tasks;
- asset quality flags.

Escalates when:

- non-final logo/colors are used;
- flat images are treated as editable design;
- site/product/brandbook are mixed.

### A-008 Operations Controller Agent

Mission:

- keep tasks moving;
- detect overdue/blocked work;
- prepare weekly report.

Outputs:

- weekly status;
- blocker list;
- next-action list;
- owner gaps.

Escalates when:

- task has no owner;
- blocked task has no unblock action;
- external deadline is near.

## Task control rules

Every task must have:

- title;
- owner;
- priority;
- status;
- next action;
- dependency;
- due date or review date;
- QA requirement;
- external-readiness status if applicable.

## Status workflow

For documents:

1. Draft.
2. Internal Review.
3. Claims Check.
4. Finance Check, if relevant.
5. Legal/Privacy/Child Safety Check, if relevant.
6. Founder Review.
7. External Ready.
8. Sent / Published / Archived.

For product/design:

1. Idea.
2. Scope Review.
3. UX Structure.
4. Design.
5. Product QA.
6. Technical Review.
7. Ready for Build.
8. Built.
9. Tested.
10. Released.

## Weekly control rhythm

### Weekly Founder Review

Agenda:

- top priorities;
- decisions needed;
- blocked work;
- external risks;
- funding status;
- MVP/design status.

### Weekly Document QA Review

Agenda:

- documents in progress;
- claims missing sources;
- finance/legal/privacy checks;
- founder approvals needed.

### Weekly Product & Design Review

Agenda:

- MVP scope;
- open decisions;
- user flows;
- design system;
- technical handoff risks.

### Weekly Funding Review

Agenda:

- funding pipeline;
- eligibility status;
- upcoming deadlines;
- required documents;
- applicant route.

## Definition of done

### A document is done only when:

- audience is clear;
- owner is assigned;
- all claims are checked;
- financial assumptions are labelled;
- legal/privacy/safety review is completed if needed;
- founder approved;
- final export uses approved brand system.

### A design is done only when:

- it uses final Huddle brand system;
- elements are editable;
- text is editable;
- layout is responsive or has responsive logic;
- asset quality is high enough for future use;
- art director review is passed.

### A product feature is done only when:

- user story is defined;
- acceptance criteria exist;
- privacy/safety impact is reviewed;
- design exists;
- technical approach is clear;
- QA/test scenario exists.

## Immediate operating setup

First setup tasks:

1. Create AI agent task list from this model.
2. Create Teamly/Notion roles from Core Team Functions.
3. Assign Alexander as temporary owner where no human owner exists.
4. Create weekly review checklist.
5. Connect Document Map to task board.
6. Connect Claims Register to all external documents.

