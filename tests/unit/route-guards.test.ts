import { RoleKey, UserStatus } from "@prisma/client";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { UnauthenticatedError } from "../../src/lib/auth/types";
import { MissingPermissionError, PERMISSION_KEYS } from "../../src/lib/permissions";

const { requireUser } = vi.hoisted(() => ({ requireUser: vi.fn() }));

vi.mock("../../src/lib/auth/current-user", () => ({ requireUser }));

import {
  AdminDeniedError,
  DeferredGuardError,
  GuardUnauthenticatedError,
  MissingAnyRoleError,
  MissingRoleError,
  ModeratorDeniedError,
  OwnershipDeniedError,
  StatusNotAllowedError,
  SuperAdminDeniedError,
  requireAdmin,
  requireAnyRole,
  requireAuth,
  requireCompletedOnboarding,
  requireModerator,
  requireOwner,
  requirePermission,
  requirePublic,
  requireRole,
  requireStatus,
  requireSuperAdmin,
} from "../../src/lib/guards";

describe("route guards", () => {
  beforeEach(() => {
    requireUser.mockReset();
  });

  it("allows public access without inventing redirect policy", () => {
    expect(requirePublic()).toBeUndefined();
  });

  it("returns only the authenticated Supabase identity from requireAuth", async () => {
    const identity = { id: "provider-subject", email: "person@example.test" };
    requireUser.mockResolvedValue(identity);

    await expect(requireAuth()).resolves.toBe(identity);
  });

  it("denies unauthenticated requireAuth calls", async () => {
    requireUser.mockRejectedValue(new UnauthenticatedError());

    await expect(requireAuth()).rejects.toBeInstanceOf(GuardUnauthenticatedError);
  });

  it("requires exact roles and fails closed", () => {
    const subject = { roles: [RoleKey.PARENT] };

    expect(() => requireRole(subject, RoleKey.PARENT)).not.toThrow();
    expect(() => requireRole(subject, RoleKey.ADMIN)).toThrow(MissingRoleError);
  });

  it("requires any exact role and denies an empty requested list", () => {
    const subject = { roles: [RoleKey.PARENT, RoleKey.SELLER] };

    expect(() => requireAnyRole(subject, [RoleKey.ADMIN, RoleKey.SELLER])).not.toThrow();
    expect(() => requireAnyRole(subject, [RoleKey.ADMIN])).toThrow(MissingAnyRoleError);
    expect(() => requireAnyRole(subject, [])).toThrow(MissingAnyRoleError);
  });

  it("composes the pure S0-010 permission evaluator", () => {
    const subject = { roles: [RoleKey.PARENT] };

    expect(() => requirePermission(subject, PERMISSION_KEYS.APP_ACCESS)).not.toThrow();
    expect(() => requirePermission(subject, PERMISSION_KEYS.ROLES_MANAGE)).toThrow(
      MissingPermissionError,
    );
  });

  it.each([RoleKey.MODERATOR, RoleKey.ADMIN, RoleKey.SUPER_ADMIN])(
    "allows %s through the moderator boundary",
    (role) => {
      expect(() => requireModerator({ roles: [role] })).not.toThrow();
    },
  );

  it.each([RoleKey.PARENT, RoleKey.SYSTEM])(
    "denies %s at the moderator boundary",
    (role) => {
      expect(() => requireModerator({ roles: [role] })).toThrow(ModeratorDeniedError);
    },
  );

  it.each([RoleKey.ADMIN, RoleKey.SUPER_ADMIN])(
    "allows %s through the admin boundary",
    (role) => {
      expect(() => requireAdmin({ roles: [role] })).not.toThrow();
    },
  );

  it.each([RoleKey.MODERATOR, RoleKey.SYSTEM])("denies %s at the admin boundary", (role) => {
    expect(() => requireAdmin({ roles: [role] })).toThrow(AdminDeniedError);
  });

  it("allows only SUPER_ADMIN through the super-admin boundary", () => {
    expect(() => requireSuperAdmin({ roles: [RoleKey.SUPER_ADMIN] })).not.toThrow();
    expect(() => requireSuperAdmin({ roles: [RoleKey.ADMIN] })).toThrow(
      SuperAdminDeniedError,
    );
    expect(() => requireSuperAdmin({ roles: [RoleKey.SYSTEM] })).toThrow(
      SuperAdminDeniedError,
    );
  });

  it("compares only explicit trusted ownership identifiers", () => {
    expect(() => requireOwner("domain-user-1", "domain-user-1")).not.toThrow();
    expect(() => requireOwner("domain-user-1", "domain-user-2")).toThrow(
      OwnershipDeniedError,
    );
    expect(() => requireOwner("", "")).toThrow(OwnershipDeniedError);
  });

  it("does not imply provider-subject and domain-owner equivalence", () => {
    expect(() => requireOwner("supabase-subject", "domain-user-id")).toThrow(
      OwnershipDeniedError,
    );
  });

  it("asserts only trusted pre-resolved status values", () => {
    expect(() => requireStatus(UserStatus.ACTIVE, [UserStatus.ACTIVE])).not.toThrow();
    expect(() =>
      requireStatus(UserStatus.SUSPENDED, [UserStatus.ACTIVE]),
    ).toThrow(StatusNotAllowedError);
    expect(() => requireStatus(UserStatus.ACTIVE, [])).toThrow(StatusNotAllowedError);
  });

  it("keeps completed onboarding explicitly deferred", () => {
    expect(() => requireCompletedOnboarding()).toThrow(DeferredGuardError);
  });
});
