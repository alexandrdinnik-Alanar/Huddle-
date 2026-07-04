# Huddle Master Documentation v2.0

Canonical engineering documentation entry point for the Huddle platform.

## Technology baseline

- React 19.2
- Next.js 16.2.x App Router
- TypeScript strict
- PostgreSQL
- Prisma
- Supabase Auth
- Modular monolith
- One shared codebase for Claude Code and Codex

## Source-of-truth hierarchy

1. Current visual corpus (`Site.zip`, sets 1–63)
2. Canonical architecture decisions and Developer Implementation Bible
3. Actual GitHub repository state
4. React/Claude/Codex execution contracts
5. Previous project discussions only as supporting reference

## Canonical engineering corpus

The prepared project corpus contains:

- 628 unique visual artifacts
- 105 canonical route rows
- 100 domain entities/reference records
- 61 RBAC capabilities
- 105 API contracts
- 30 primary ADR decisions plus React/AI addendum decisions
- 81 atomic implementation tasks
- 29 dependency waves

## Repository reality

At audit time, the repository was pre-Sprint-0: the initial commit only contained a minimal README. Therefore feature development must not begin before foundation tasks S0-001 through S0-018 are completed.

## Canonical product domains

- Identity & Access
- Family
- Connections & Matching
- Community
- Groups
- Messaging
- Listings
- Catalog & Partner Feed
- Orders & Fulfillment
- Payments & Settlement
- Events & Activities
- Services & Experts
- Advertising
- Municipality
- Trust & Safety
- Notifications
- Support
- Analytics & Reporting
- Privacy & Governance
- Platform Operations

## Key architectural rules

- React is mandatory for UI.
- Next.js App Router is the framework layer; Pages Router is forbidden.
- React Server Components are the default; Client Components require a concrete browser-interaction need.
- Business logic must not live in page components.
- Marketplace is not one universal `MarketplaceItem` model. Listings, catalog products, orders/fulfillment, affiliate tracking, and payments/settlement are separate bounded contexts.
- Messaging uses one canonical conversation core with typed contexts.
- Realtime follows persist-before-broadcast with outbox, event identity, deduplication, reconnect, and gap recovery.
- Family matching is opt-in, coarse-location only, child-data-minimized, and safety-filtered before scoring.
- Municipality analytics are aggregate-only, de-identified, scoped, auditable, and protected against small-cell/differencing attacks.
- Payment provider integration remains provider-neutral until merchant-of-record, liability, KYC, and provider ADR decisions are approved.
- Design tokens from set50 supersede deprecated starter values.
- Approved logo usage from set50 supersedes the old no-lockup rule.

## Execution model

One task ID → one branch → one implementation agent → quality gates → HANDOFF.md → independent review → merge.

Claude Code and Codex must use the same task contract and the same architecture. `AGENTS.md` and `CLAUDE.md` are thin adapters to shared rules, not independent specifications.

## First task

Start with `S0-001` only: initialize the React 19.2 + Next.js 16.2.x App Router + TypeScript strict repository foundation. Do not implement product features in the same task.

## Package status

The full master package also contains large visual/binary sources. Those are intentionally not committed as ordinary Git blobs because the complete master archive exceeds GitHub's normal large-file threshold. The repository documentation branch is the canonical text/engineering entry point; large visual source should be stored through Git LFS or Release assets.
