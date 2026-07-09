import { API_ERROR_STATUS, isApiError } from "./errors";
import type {
  ApiErrorCode,
  ApiErrorEnvelope,
  ApiListData,
  ApiSuccessEnvelope,
  Pagination,
} from "./types";

const SAFE_SERVER_ERROR_MESSAGE = "An unexpected server error occurred.";

function jsonResponse<T>(body: T, init?: ResponseInit): Response {
  return Response.json(body, init);
}

export function apiSuccess<T>(data: T, init?: ResponseInit): Response {
  const body: ApiSuccessEnvelope<T> = { data, error: null };
  return jsonResponse(body, { ...init, status: init?.status ?? 200 });
}

export function apiList<T>(items: readonly T[], pagination: Pagination, init?: ResponseInit): Response {
  const data: ApiListData<T> = { items, pagination };
  return apiSuccess(data, init);
}

export function apiError(
  code: ApiErrorCode,
  message: string,
  details?: unknown,
  status = API_ERROR_STATUS[code],
): Response {
  const error = details === undefined ? { code, message } : { code, message, details };
  const body: ApiErrorEnvelope = { data: null, error };
  return jsonResponse(body, { status });
}

export function handleApiError(error: unknown): Response {
  if (isApiError(error)) {
    return apiError(error.code, error.message, error.details, error.status);
  }

  return apiError("SERVER_ERROR", SAFE_SERVER_ERROR_MESSAGE);
}
