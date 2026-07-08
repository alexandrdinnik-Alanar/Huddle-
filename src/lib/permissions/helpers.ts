import { MissingAnyPermissionError, MissingPermissionError } from "./errors";
import { type PermissionKey } from "./permissions";
import { ALL_ROLE_KEYS, type PermissionSubject, RoleKey } from "./roles";
import { rolePermissions } from "./role-permissions";

function getCanonicalRoles(user: PermissionSubject): readonly RoleKey[] {
  const grantedRoles = new Set<RoleKey>(user.roles);

  return ALL_ROLE_KEYS.filter((role) => grantedRoles.has(role));
}

export function getUserPermissions(user: PermissionSubject): PermissionKey[] {
  const permissions = new Set<PermissionKey>();

  for (const role of getCanonicalRoles(user)) {
    for (const permission of rolePermissions[role]) {
      permissions.add(permission);
    }
  }

  return [...permissions];
}

export function hasRole(user: PermissionSubject, role: RoleKey): boolean {
  return user.roles.includes(role);
}

export function hasAnyRole(user: PermissionSubject, roles: readonly RoleKey[]): boolean {
  if (roles.length === 0) {
    return false;
  }

  return roles.some((role) => hasRole(user, role));
}

export function hasPermission(user: PermissionSubject, permission: PermissionKey): boolean {
  return getUserPermissions(user).includes(permission);
}

export function requirePermission(user: PermissionSubject, permission: PermissionKey): void {
  if (!hasPermission(user, permission)) {
    throw new MissingPermissionError(permission);
  }
}

export function requireAnyPermission(user: PermissionSubject, permissions: readonly PermissionKey[]): void {
  if (permissions.length === 0) {
    throw new MissingAnyPermissionError(permissions);
  }

  if (!permissions.some((permission) => hasPermission(user, permission))) {
    throw new MissingAnyPermissionError(permissions);
  }
}
