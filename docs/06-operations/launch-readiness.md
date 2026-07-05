# Huddle Launch Readiness

Status: not launch-ready. Repository is still pre-Sprint-0.

## Gate A — Development can start

Required before normal feature development:

- [ ] Complete S0-001 repository initialization.
- [ ] Commit package.json and pnpm-lock.yaml.
- [ ] Enable TypeScript strict mode.
- [ ] Add lint, typecheck, unit test, E2E test and build scripts.
- [ ] Add CI checks for pull requests.
- [ ] Add `.env.example` with placeholders only.
- [ ] Create development Supabase project.
- [ ] Create development PostgreSQL database connection.
- [ ] Configure Supabase Auth development application.
- [ ] Create initial Vercel project or approved equivalent.
- [ ] Define development, staging and production environment separation.
- [ ] Add secret-management ownership rules.
- [ ] Add branch-protection and required-review rules.

## Gate B — Internal alpha

Required before team/internal testing:

- [ ] Complete Sprint 0 tasks S0-001 through S0-018.
- [ ] Implement canonical route groups and protected shells.
- [ ] Implement Prisma baseline and migration workflow.
- [ ] Implement User, Role and UserRole identity base.
- [ ] Implement server authorization helpers and route guards.
- [ ] Implement API error/response and validation patterns.
- [ ] Implement privileged audit logging base.
- [ ] Add seed strategy for non-production test data.
- [ ] Add error monitoring and release tracking.
- [ ] Add basic uptime/health checks.
- [ ] Add backup and restore procedure for staging data.

## Gate C — Closed beta

Required before inviting external families or providers:

- [ ] Finalize launch geography and supported countries/cities.
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

The following decisions cannot be safely invented by Claude, Codex or developers:

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
12. Final approved visual asset storage location.
13. Production domain and transactional email domain.
14. Phone verification provider requirement by launch market.
15. Analytics and error-monitoring provider choices.

## Recommended immediate order

1. Finish repository structure and merge it.
2. Execute S0-001.
3. Add CI and environment baseline during Sprint 0.
4. Provision development Supabase and Vercel projects.
5. Complete S0-002 through S0-018.
6. Resolve founder decisions that block beta and payments.
7. Begin Phase 1 only after Sprint 0 quality gates pass.
