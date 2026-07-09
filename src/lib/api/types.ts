export const API_ERROR_CODES = [
  "UNAUTHORIZED",
  "FORBIDDEN",
  "NOT_FOUND",
  "VALIDATION_ERROR",
  "CONFLICT",
  "RATE_LIMITED",
  "RESOURCE_REMOVED",
  "RESOURCE_UNAVAILABLE",
  "OWNERSHIP_REQUIRED",
  "STATUS_NOT_ALLOWED",
  "SUSPENDED_USER",
  "MODERATION_REQUIRED",
  "SERVER_ERROR",
] as const;

export type ApiErrorCode = (typeof API_ERROR_CODES)[number];

export interface ApiErrorBody {
  readonly code: ApiErrorCode;
  readonly message: string;
  readonly details?: unknown;
}

export interface ApiSuccessEnvelope<T> {
  readonly data: T;
  readonly error: null;
}

export interface ApiErrorEnvelope {
  readonly data: null;
  readonly error: ApiErrorBody;
}

export interface Pagination {
  readonly page: number;
  readonly pageSize: number;
  readonly total: number;
  readonly hasMore: boolean;
}

export interface ApiListData<T> {
  readonly items: readonly T[];
  readonly pagination: Pagination;
}

export type ApiResponseEnvelope<T> = ApiSuccessEnvelope<T> | ApiErrorEnvelope;
