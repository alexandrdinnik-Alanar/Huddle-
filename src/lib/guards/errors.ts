export class GuardError extends Error {
  readonly code: string;

  constructor(code: string, message: string) {
    super(message);
    this.code = code;
    this.name = new.target.name;
  }
}

export class GuardUnauthenticatedError extends GuardError {
  constructor() {
    super("GUARD_UNAUTHENTICATED", "Authentication is required.");
  }
}

export class MissingRoleError extends GuardError {
  constructor() {
    super("ROLE_REQUIRED", "A required role is missing.");
  }
}

export class MissingAnyRoleError extends GuardError {
  constructor() {
    super("ANY_ROLE_REQUIRED", "At least one required role is missing.");
  }
}

export class OwnershipDeniedError extends GuardError {
  constructor() {
    super("OWNERSHIP_REQUIRED", "Resource ownership is required.");
  }
}

export class ModeratorDeniedError extends GuardError {
  constructor() {
    super("MODERATOR_REQUIRED", "Moderator access is required.");
  }
}

export class AdminDeniedError extends GuardError {
  constructor() {
    super("ADMIN_REQUIRED", "Administrator access is required.");
  }
}

export class SuperAdminDeniedError extends GuardError {
  constructor() {
    super("SUPER_ADMIN_REQUIRED", "Super-administrator access is required.");
  }
}

export class StatusNotAllowedError extends GuardError {
  constructor() {
    super("STATUS_NOT_ALLOWED", "The supplied status is not allowed.");
  }
}

export class DeferredGuardError extends GuardError {
  constructor() {
    super("GUARD_DEFERRED", "This guard is deferred until its authoritative state source exists.");
  }
}
