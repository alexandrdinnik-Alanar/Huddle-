import { requireUser } from "../auth/current-user";
import type { SupabaseAuthenticatedIdentity } from "../auth/types";
import { UnauthenticatedError } from "../auth/types";
import {
  hasAnyRole,
  hasRole,
  requirePermission as requirePermissionValue,
} from "../permissions/helpers";
import type { PermissionKey } from "../permissions/permissions";
import { type PermissionSubject, RoleKey } from "../permissions/roles";
import {
  AdminDeniedError,
  DeferredGuardError,
  GuardUnauthenticatedError,
  MissingAnyRoleError,
  MissingRoleError,
  ModeratorDeniedError,
  SuperAdminDeniedError,
} from "./errors";

const MODERATOR_ROLES = [
  RoleKey.MODERATOR,
  RoleKey.ADMIN,
  RoleKey.SUPER_ADMIN,
] as const satisfies readonly RoleKey[];

const ADMIN_ROLES = [
  RoleKey.ADMIN,
  RoleKey.SUPER_ADMIN,
] as const satisfies readonly RoleKey[];

export function requirePublic(): void {
  // Public access has no authorization prerequisite or redirect behavior.
}

export async function requireAuth(): Promise<SupabaseAuthenticatedIdentity> {
  try {
    return await requireUser();
  } catch (error) {
    if (error instanceof UnauthenticatedError) {
      throw new GuardUnauthenticatedError();
    }

    throw error;
  }
}

export function requireRole(subject: PermissionSubject, role: RoleKey): void {
  if (!hasRole(subject, role)) {
    throw new MissingRoleError();
  }
}

export function requireAnyRole(
  subject: PermissionSubject,
  roles: readonly RoleKey[],
): void {
  if (!hasAnyRole(subject, roles)) {
    throw new MissingAnyRoleError();
  }
}

export function requirePermission(
  subject: PermissionSubject,
  permission: PermissionKey,
): void {
  requirePermissionValue(subject, permission);
}

export function requireModerator(subject: PermissionSubject): void {
  if (!hasAnyRole(subject, MODERATOR_ROLES)) {
    throw new ModeratorDeniedError();
  }
}

export function requireAdmin(subject: PermissionSubject): void {
  if (!hasAnyRole(subject, ADMIN_ROLES)) {
    throw new AdminDeniedError();
  }
}

export function requireSuperAdmin(subject: PermissionSubject): void {
  if (!hasRole(subject, RoleKey.SUPER_ADMIN)) {
    throw new SuperAdminDeniedError();
  }
}

export function requireCompletedOnboarding(): never {
  throw new DeferredGuardError();
}
