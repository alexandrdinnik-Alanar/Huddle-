import type { PermissionKey } from "./permissions";

export class PermissionError extends Error {
  readonly code: string;

  constructor(code: string, message: string) {
    super(message);
    this.code = code;
    this.name = new.target.name;
  }
}

export class MissingPermissionError extends PermissionError {
  readonly permission: PermissionKey;

  constructor(permission: PermissionKey) {
    super("PERMISSION_REQUIRED", `Required permission is missing: ${permission}.`);
    this.permission = permission;
  }
}

export class MissingAnyPermissionError extends PermissionError {
  readonly permissions: readonly PermissionKey[];

  constructor(permissions: readonly PermissionKey[]) {
    super("ANY_PERMISSION_REQUIRED", "At least one required permission is missing.");
    this.permissions = permissions;
  }
}
