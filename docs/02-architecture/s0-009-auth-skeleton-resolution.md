# S0-009 Auth Skeleton Architecture Resolution

Status: accepted task-scope architecture resolution for Sprint 0 `S0-009`.

Date: 2026-07-08

## Purpose

This document resolves the Sprint 0 `S0-009` execution ambiguity between the desired auth-skeleton scope and the current merged architecture/state of the repository.

## Decision

1. `S0-009` remains an auth/session skeleton only.
2. Canonical Supabase identity to application `User` reconciliation is deferred to `P1-001`.
3. `AuthIdentity` is not introduced in `S0-009`.
4. Supabase provider subject must not be used directly as the domain `User.id`.
5. Email matching is not accepted as canonical identity mapping without future explicit authority.
6. `onboardingCompleted` is removed from the required `S0-009` current-user return shape.
7. Onboarding completion persistence and derivation are deferred to `P1-005`.
8. `S0-010` and `S0-011` must not assume application-user role resolution or onboarding completion exists unless their own authoritative prerequisites are satisfied first.

## Authoritative basis

- `docs/02-architecture/adr-register.csv`
  - `ADR-004`: Supabase Auth is the identity provider and application `User` is the canonical business identity.
- `docs/02-architecture/domain-entity-catalog.csv`
  - `User`: business identity; never use provider user id as domain foreign key.
  - `AuthIdentity`: provider, providerSubject, verifiedEmail/Phone metadata.
- `prisma/schema.prisma`
  - current merged schema contains `User`, `Role`, and `UserRole`, but no `AuthIdentity` and no onboarding-completion persistence field.
- `docs/05-execution/implementation-roadmap.csv`
  - `P1-001`: `Implement User/AuthIdentity reconciliation`
  - `P1-005`: `Implement resumable onboarding state machine`

## Rationale

Sprint 0 authority requires a Supabase auth skeleton, but the merged repository does not yet contain the canonical identity-reconciliation model that the accepted architecture expects. The accepted architecture already states that application `User` is canonical business identity and that provider identity must not be treated as the domain key. Therefore `S0-009` cannot truthfully implement application-user reconciliation by shared id, provider subject, or email matching.

The same problem exists for `onboardingCompleted`. Sprint 0 source text requires the field, but the merged repository contains no accepted persisted or derived source for it. The roadmap explicitly schedules onboarding state work later in `P1-005`. Deferring onboarding-completion semantics is safer than inventing schema or inferring completion from unrelated state.

## Alternatives considered

### 1. Implement `AuthIdentity` in `S0-009`

Rejected for `S0-009`.

- would expand schema and migration scope
- would violate current task constraints without explicit contract expansion
- duplicates work already scheduled in `P1-001`

### 2. Map Supabase user to `User` by shared id

Rejected.

- no accepted source authorizes provider subject as canonical domain identifier
- conflicts with the architecture rule that `User` is the canonical business identity

### 3. Map Supabase user to `User` by email

Rejected.

- no accepted source defines email matching as the canonical identity strategy
- `ADR-004` allows multiple identities to link to one `User`, which implies explicit reconciliation rather than implicit email matching

### 4. Add `onboardingCompleted` to `User` now

Rejected for `S0-009`.

- no accepted source requires it on `User`
- roadmap places onboarding-state work in `P1-005`
- would silently expand schema beyond the corrected Sprint 0 scope

### 5. Derive `onboardingCompleted` from current placeholder routes or unrelated fields

Rejected.

- no accepted source defines a canonical derivation rule
- placeholder routes are not persistence authority

## Consequences

- `S0-009` may complete as a truthful Supabase auth/session foundation without claiming application-user reconciliation.
- `getCurrentUser()` in `S0-009` must be defined as a safe authenticated Supabase identity surface, not canonical app-user resolution.
- `requireUser()` remains valid as a requirement to ensure an authenticated Supabase user exists.
- `requireActiveUser()` is not a truthful completion requirement for `S0-009` because active/inactive semantics depend on unresolved application-user mapping.
- role resolution, revoked-role filtering, and onboarding-completion checks are explicitly deferred.

## Follow-up dependencies

- `P1-001` must define and implement canonical `User` / `AuthIdentity` reconciliation.
- `P1-005` must define and implement authoritative onboarding persistence and completion semantics.
- `S0-010` must not rely on unresolved application-user role data as already available from `S0-009`.
- `S0-011` must not require completed-onboarding semantics until the accepted onboarding state source exists.
