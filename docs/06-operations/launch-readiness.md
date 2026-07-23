# Huddle Launch Readiness

Status: **not launch-ready**. Sprint 0 repository foundation is in progress: `S0-001` through `S0-014` and `VIS-001` are merged; `S0-015` through `S0-018` remain.

This document separates evidence visible in Git from external infrastructure, legal, operational, and founder approvals. Repository code alone cannot prove that an external service or production process is ready.

## Gate A — Development can start

### Repository-verified

- [x] Complete S0-001 repository initialization.
- [x] Commit `package.json` and `pnpm-lock.yaml`.
- [x] Enable TypeScript strict mode.
- [x] Add lint, typecheck, unit test, E2E test and build scripts.
- [x] Add CI checks for pull requests.
- [x] Add `.env.example` with placeholders only.

### External or operational evidence still required

- [ ] Create and document the development Supabase project.
- [ ] Create and document a safe development PostgreSQL database connection.
- [ ] Configure and document the Supabase Auth development application.
- [ ] Confirm the owned Vercel project and deployment access model.
- [ ] Define development, staging and production environment separation.
- [ ] Add secret-management ownership and rotation rules.
- [ ] Confirm branch-protection and required-review rules in GitHub settings.

A preview deployment mentioned in a PR is not sufficient evidence for environment ownership, separation, or production readiness.

## Gate B — Internal alpha

### Repository foundation completed

- [x] Implement canonical route groups and placeholder route architecture.
- [x] Implement Prisma baseline and migration workflow.
- [x] Implement User, Role and UserRole identity base.
- [x] Implement server authentication, permission, and route-guard helper foundations.
- [x] Implement API error/response and validation patterns.
- [x] Implement privileged audit logging base.
- [x] Reconcile the canonical Figma authority and P0 route registry through VIS-001.

### Sprint 0 work still required

- [ ] Complete S0-015 base layouts.
- [ ] Complete S0-016 canonical placeholder/layout integration.
- [ ] Complete S0-017 Sprint 0 QA checklist.
- [ ] Complete S0-018 developer README.
- [ ] Verify all Sprint 0 quality gates from a clean environment.
- [ ] Record the final Sprint 0 acceptance decision.

### Internal-alpha operations still required

- [ ] Add a safe non-production test-data strategy beyond the deterministic role seed.
- [ ] Add error monitoring and release tracking.
- [ ] Add basic uptime/health checks.
- [ ] Add backup and restore procedure for staging data.
- [ ] Confirm trusted app-user reconciliation and role loading before real protected admin flows.

Route placeholders, guard helpers, and approved Figma frames are foundations; they are not completed user journeys.

## Gate C — Closed beta

Required before inviting external families or providers:

- [ ] Finalize launch geography and supported countries/cities in a canonical decision record.
- [ ] Finalize supported languages and locale ownership.
- [ ] Approve production Privacy Policy and Terms.
- [ ] Approve Community Guidelines and Safety Policy.
- [ ] Approve child/family data minimization rules.
- [ ] Complete privacy impact assessment for matching and municipality reporting.
- [ ] Configure consent versioning and withdrawal flows.
- [ ] Implement account export and deletion request workflow.
- [ ] Define moderation staffing, escalation and appeals process.
- [ ] Define support ownership, response targets and incident escalation.
- [ ] Configure production email provider and sender domains.
- [ ] Decide phone verification/SMS provider and anti-abuse limits.
- [ ] Configure production object storage, upload limits and quarantine flow.
- [ ] Add media metadata stripping and malware-scanning integration or documented compensating control.
- [ ] Add rate limiting for auth, messaging, reports and connection requests.
- [ ] Complete accessibility review of P0 flows.
- [ ] Complete security review of auth, authorization and sensitive data flows.

## Gate D — Commercial transactions

Required before accepting live payments or paying sellers/partners:

- [ ] Decide merchant-of-record model.
- [ ] Decide marketplace liability model.
- [ ] Decide KYC/KYB requirements by participant type and jurisdiction.
- [ ] Select payment provider and settlement provider.
- [ ] Approve payment-provider ADR.
- [ ] Define tax/VAT handling and invoice responsibility.
- [ ] Define refund, dispute and chargeback policies.
- [ ] Define payout schedules, holds and reserve policy.
- [ ] Implement webhook signature verification and idempotent inbox processing.
- [ ] Complete financial reconciliation runbook.
- [ ] Complete finance operations permissions and four-eyes approvals.

No live charges or payouts are allowed before this gate is approved.

## Gate E — Public production launch

Required before broad public launch:

- [ ] Production domain and DNS ownership complete.
- [ ] Production email authentication complete: SPF, DKIM and DMARC.
- [ ] Production Supabase/Vercel projects isolated from development and staging.
- [ ] Production secret rotation and access review complete.
- [ ] Database backup, restore test and recovery objectives documented.
- [ ] Incident response plan approved with named owners.
- [ ] Security vulnerability management process active.
- [ ] Dependency update policy active.
- [ ] Centralized logs, metrics and alerts configured.
- [ ] P0 user journeys covered by E2E tests.
- [ ] Load/concurrency tests completed for registration, booking, order and messaging paths as applicable.
- [ ] Privacy deletion and retention jobs tested.
- [ ] Moderation and support on-call coverage defined.
- [ ] Status/incident communication channel defined.
- [ ] SEO metadata, sitemap, canonical and hreflang behavior verified for public pages.
- [ ] Analytics taxonomy approved with prohibited sensitive fields enforced.
- [ ] Launch rollback plan approved.

## Decisions still required from the founder/product owner

The following decisions cannot be safely invented by Claude, Codex or developers. A decision is considered resolved only when it is recorded in an accepted canonical document or ADR.

1. Initial launch country, city or cities.
2. Legal entity that operates Huddle.
3. Initial product languages.
4. Whether P0 includes only web or also a native-mobile commitment.
5. Marketplace commercial model: P2P, native commerce, affiliate, partner catalog, or phased combination.
6. Merchant-of-record and payment liability model.
7. Whether expert/service bookings are free requests, deposits or paid bookings at launch.
8. Municipality pilot scope and first reporting customers.
9. Final production legal copy owner.
10. Moderation team owner and escalation contacts.
11. Customer support owner and service targets.
12. Transactional email domain and sender ownership.
13. Phone verification provider requirement by launch market.
14. Analytics and error-monitoring provider choices.

Already canonical in the repository:

- public brand/domain identity: `Huddle-Family.com`;
- production brand asset paths: `public/brand/`;
- source brand packages: `assets/brand/`;
- production visual authority: the approved Figma master recorded in `design-source-of-truth.md`.

## Recommended immediate order

1. Merge the repository-integrity reconciliation after CI and review.
2. Execute S0-015 only.
3. Execute S0-016 only after S0-015 merges.
4. Execute S0-017 only after S0-016 merges.
5. Execute S0-018 only after S0-017 merges.
6. Provision and document development Supabase, PostgreSQL, and Vercel environments.
7. Resolve founder decisions that block closed beta and payments.
8. Begin Phase 1 only after the Sprint 0 QA gate passes.