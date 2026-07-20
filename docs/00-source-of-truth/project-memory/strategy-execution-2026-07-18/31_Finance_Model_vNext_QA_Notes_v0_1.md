# Huddle — Finance Model vNext v0.1 QA Notes

Date: 2026-07-18  
Scope: `30_Huddle_Finance_Model_vNext_v0_1.xlsx`; `27_Use_of_Funds_and_Finance_Assumptions_v0_1.md`  
Status: internal QA notes; not finance/controller approval

## What was created

Created `30_Huddle_Finance_Model_vNext_v0_1.xlsx` as the first controlled finance workbook for Huddle.

The workbook contains:

1. `README` — status, source base and external-use warning.
2. `Inputs` — scenario controls, currency, planning round, validation/pilot periods and approval status.
3. `Investor_Use_of_Funds` — draft allocation against the NOK 20m planning assumption.
4. `Oslo_Pilot_Budget` — separate pilot-budget template by phase and line item.
5. `Grant_Budget_Template` — per-funder budget template requiring live eligibility and cost-rule checks.
6. `Runway_Scenario` — monthly burn structure for conservative/base/upside scenarios.
7. `Revenue_Assumptions` — revenue layers with evidence labels and control claims.
8. `QA_Checks` — finance quality-control checklist.

## Important boundary

The workbook is not an approved financial model.

It is a structured working model that prevents Huddle from mixing:

- investor ask;
- grant budget;
- Oslo pilot budget;
- actual expenditure.

All editable amounts are draft placeholders unless a finance/controller owner approves them.

## Claims check

| Check | Result |
|---|---|
| NOK 20m labelled as planning assumption | Passed |
| Raised capital to date set separately | Passed |
| Huddle not described as having raised NOK 20m | Passed |
| Revenue streams labelled as planned/hypothesis, not proven | Passed |
| Grant budget separated from investor use-of-funds | Passed |
| Oslo pilot budget separated from company budget | Passed |
| Privacy/legal/T&S cost category included | Passed |
| External use blocked until finance review | Passed |

## Why this matters

Investor, grant, municipality and pilot documents all become risky if the financial story is inconsistent.

This model creates one place to control:

- how much Huddle is planning to raise;
- what the money is intended to fund;
- which costs belong to validation vs MVP vs pilot;
- what must be checked per grant route;
- what revenue assumptions remain unproven.

## Remaining blockers

1. No named finance/controller owner.
2. No confirmed actual monthly cost inputs.
3. No confirmed MVP build budget.
4. No confirmed Oslo pilot geography or pilot operating cost.
5. No live grant budget rules entered.
6. No ALANAR AS legal/applicant evidence attached.
7. No runway scenario approved by founder/finance owner.

## Recommended next action

The next move should be one of two paths:

### Option A — Finance depth pass

Fill the workbook with real estimates:

- people/contractors;
- product/tech;
- legal/privacy;
- design/content;
- Oslo pilot;
- marketing/community;
- tools/admin;
- contingency.

This is best before investor conversations.

### Option B — Funding route pass

Use `28_Grant_Eligibility_Memo_Template_v0_1.md` to create the first grant eligibility memos from live official sources.

This is best before grant outreach.

## Recommendation

Do Option B next if the immediate goal is grants.

Do Option A next if the immediate goal is investor readiness.

For Huddle’s current stage, the best practical sequence is:

1. Complete 3–5 priority grant eligibility memos.
2. Use their cost rules to adapt the grant budget template.
3. Then complete finance model vNext with better numbers.

