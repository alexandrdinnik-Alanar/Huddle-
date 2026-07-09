import type { ApiErrorCode } from "./types";

export const API_ERROR_STATUS: Readonly<Record<ApiErrorCode, number>> = {
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  VALIDATION_ERROR: 400,
  CONFLICT: 409,
  RATE_LIMITED: 429,
  RESOURCE_REMOVED: 410,
  RESOURCE_UNAVAILABLE: 503,
  OWNERSHIP_REQUIRED: 403,
  STATUS_NOT_ALLOWED: 409,
  SUSPENDED_USER: 403,
  MODERATION_REQUIRED: 403,
  SERVER_ERROR: 500,
};

export class ApiError extends Error {
  readonly code: ApiErrorCode;
  readonly status: number;
  readonly details?: unknown;

  constructor(code: ApiErrorCode, message: string, details?: unknown, status = API_ERROR_STATUS[code]) {
    super(message);
    this.name = new.target.name;
    this.code = code;
    this.status = status;
    this.details = details;
  }
}

export function isApiError(error: unknown): error is ApiError {
  return error instanceof ApiError;
}
