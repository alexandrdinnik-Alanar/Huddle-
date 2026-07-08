import { RoleKey } from "@prisma/client";
import { describe, expect, it } from "vitest";

import {
  ALL_PERMISSION_KEYS,
  ALL_ROLE_KEYS,
  MissingAnyPermissionError,
  MissingPermissionError,
  PERMISSION_KEYS,
  getUserPermissions,
  hasAnyRole,
  hasPermission,
  hasRole,
  requireAnyPermission,
  requirePermission,
  rolePermissions,
} from "../../src/lib/permissions";

describe("Huddle permission helpers", () => {
  it("accounts for every current RoleKey", () => {
    expect(ALL_ROLE_KEYS).toEqual([
      RoleKey.PARENT,
      RoleKey.SELLER,
      RoleKey.ORGANIZER,
      RoleKey.EXPERT,
      RoleKey.PARTNER,
      RoleKey.MUNICIPALITY_USER,
      RoleKey.MODERATOR,
      RoleKey.ADMIN,
      RoleKey.SUPER_ADMIN,
      RoleKey.SYSTEM,
    ]);

    expect(Object.keys(rolePermissions).sort()).toEqual([...ALL_ROLE_KEYS].sort());
  });

  it("keeps explicit deterministic PermissionKey values", () => {
    expect(ALL_PERMISSION_KEYS).toEqual([
      "app.access",
      "family.self",
      "marketplace.self",
      "events.self",
      "reports.self",
      "saved.self",
      "notifications.self",
      "listings.own.manage",
      "events.own.manage",
      "admin.access",
      "reports.moderate",
      "content.moderate",
      "users.manage",
      "admin.manage",
      "audit.read",
      "roles.manage",
      "settings.manage",
    ]);
  });

  it("aggregates multi-role permissions by deterministic union without duplicates", () => {
    const permissions = getUserPermissions({
      roles: [RoleKey.SELLER, RoleKey.PARENT, RoleKey.MODERATOR, RoleKey.SELLER],
    });

    expect(permissions).toEqual([
      PERMISSION_KEYS.APP_ACCESS,
      PERMISSION_KEYS.FAMILY_SELF,
      PERMISSION_KEYS.MARKETPLACE_SELF,
      PERMISSION_KEYS.EVENTS_SELF,
      PERMISSION_KEYS.REPORTS_SELF,
      PERMISSION_KEYS.SAVED_SELF,
      PERMISSION_KEYS.NOTIFICATIONS_SELF,
      PERMISSION_KEYS.LISTINGS_OWN_MANAGE,
      PERMISSION_KEYS.ADMIN_ACCESS,
      PERMISSION_KEYS.REPORTS_MODERATE,
      PERMISSION_KEYS.CONTENT_MODERATE,
    ]);
  });

  it("treats EXPERT, PARTNER, MUNICIPALITY_USER, and SYSTEM as explicit empty-permission roles", () => {
    expect(getUserPermissions({ roles: [RoleKey.EXPERT] })).toEqual([]);
    expect(getUserPermissions({ roles: [RoleKey.PARTNER] })).toEqual([]);
    expect(getUserPermissions({ roles: [RoleKey.MUNICIPALITY_USER] })).toEqual([]);
    expect(getUserPermissions({ roles: [RoleKey.SYSTEM] })).toEqual([]);
  });

  it("prevents lower roles from receiving superadmin-only permissions", () => {
    expect(hasPermission({ roles: [RoleKey.MODERATOR] }, PERMISSION_KEYS.ROLES_MANAGE)).toBe(false);
    expect(hasPermission({ roles: [RoleKey.MODERATOR] }, PERMISSION_KEYS.SETTINGS_MANAGE)).toBe(false);
    expect(hasPermission({ roles: [RoleKey.ADMIN] }, PERMISSION_KEYS.ROLES_MANAGE)).toBe(false);
    expect(hasPermission({ roles: [RoleKey.ADMIN] }, PERMISSION_KEYS.SETTINGS_MANAGE)).toBe(false);
    expect(hasPermission({ roles: [RoleKey.SUPER_ADMIN] }, PERMISSION_KEYS.ROLES_MANAGE)).toBe(true);
    expect(hasPermission({ roles: [RoleKey.SUPER_ADMIN] }, PERMISSION_KEYS.SETTINGS_MANAGE)).toBe(true);
  });

  it("does not grant permissions for unknown roles", () => {
    const permissions = getUserPermissions({ roles: ["UNKNOWN_ROLE" as RoleKey] });

    expect(permissions).toEqual([]);
  });

  it("checks exact role membership", () => {
    const subject = { roles: [RoleKey.PARENT, RoleKey.SELLER] };

    expect(hasRole(subject, RoleKey.PARENT)).toBe(true);
    expect(hasRole(subject, RoleKey.ADMIN)).toBe(false);
  });

  it("gives hasAnyRole explicit empty-list semantics", () => {
    const subject = { roles: [RoleKey.PARENT, RoleKey.SELLER] };

    expect(hasAnyRole(subject, [])).toBe(false);
    expect(hasAnyRole(subject, [RoleKey.ADMIN, RoleKey.SELLER])).toBe(true);
    expect(hasAnyRole(subject, [RoleKey.ADMIN, RoleKey.MODERATOR])).toBe(false);
  });

  it("throws explicit permission errors", () => {
    const subject = { roles: [RoleKey.PARENT] };

    expect(() => requirePermission(subject, PERMISSION_KEYS.APP_ACCESS)).not.toThrow();
    expect(() => requirePermission(subject, PERMISSION_KEYS.ROLES_MANAGE)).toThrow(MissingPermissionError);
    expect(() => requireAnyPermission(subject, [])).toThrow(MissingAnyPermissionError);
    expect(() => requireAnyPermission(subject, [PERMISSION_KEYS.ROLES_MANAGE])).toThrow(MissingAnyPermissionError);
    expect(() =>
      requireAnyPermission(subject, [PERMISSION_KEYS.ROLES_MANAGE, PERMISSION_KEYS.APP_ACCESS]),
    ).not.toThrow();
  });
});
