import { describe, expect, it } from "vitest";

import {
  API_ERROR_CODES,
  API_ERROR_STATUS,
  ApiError,
  apiError,
  apiList,
  apiSuccess,
  createPagination,
  handleApiError,
} from "../../src/lib/api";

async function readJson(response: Response): Promise<unknown> {
  return response.json();
}

describe("Huddle API response helpers", () => {
  it("creates the standard success envelope", async () => {
    const response = apiSuccess({ id: "item-1" });

    expect(response.status).toBe(200);
    expect(await readJson(response)).toEqual({ data: { id: "item-1" }, error: null });
  });

  it("creates the standard list envelope", async () => {
    const pagination = createPagination({ page: 1, pageSize: 2, total: 5 });
    const response = apiList([{ id: 1 }, { id: 2 }], pagination);

    expect(response.status).toBe(200);
    expect(await readJson(response)).toEqual({
      data: {
        items: [{ id: 1 }, { id: 2 }],
        pagination: { page: 1, pageSize: 2, total: 5, hasMore: true },
      },
      error: null,
    });
  });

  it("creates the standard error envelope with deterministic status", async () => {
    const response = apiError("VALIDATION_ERROR", "Invalid request body.", { field: "title" });

    expect(response.status).toBe(400);
    expect(await readJson(response)).toEqual({
      data: null,
      error: {
        code: "VALIDATION_ERROR",
        message: "Invalid request body.",
        details: { field: "title" },
      },
    });
  });

  it("accounts for the exact required error-code baseline", () => {
    expect(API_ERROR_CODES).toEqual([
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
    ]);
  });

  it("uses explicit HTTP status mappings", () => {
    expect(API_ERROR_STATUS).toEqual({
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
    });
  });

  it("computes deterministic pagination boundaries", () => {
    expect(createPagination({ page: 1, pageSize: 20, total: 21 })).toEqual({
      page: 1,
      pageSize: 20,
      total: 21,
      hasMore: true,
    });
    expect(createPagination({ page: 2, pageSize: 20, total: 40 })).toEqual({
      page: 2,
      pageSize: 20,
      total: 40,
      hasMore: false,
    });
    expect(createPagination({ page: 3, pageSize: 20, total: 41 })).toEqual({
      page: 3,
      pageSize: 20,
      total: 41,
      hasMore: false,
    });
  });

  it("rejects invalid pagination input safely", () => {
    expect(() => createPagination({ page: 0, pageSize: 20, total: 1 })).toThrow(RangeError);
    expect(() => createPagination({ page: 1, pageSize: 0, total: 1 })).toThrow(RangeError);
    expect(() => createPagination({ page: 1, pageSize: 20, total: -1 })).toThrow(RangeError);
    expect(() => createPagination({ page: Number.NaN, pageSize: 20, total: 1 })).toThrow(RangeError);
    expect(() => createPagination({ page: 1.5, pageSize: 20, total: 1 })).toThrow(RangeError);
  });

  it("preserves recognized safe ApiError values", async () => {
    const response = handleApiError(new ApiError("CONFLICT", "Resource state conflict.", { retry: false }));

    expect(response.status).toBe(409);
    expect(await readJson(response)).toEqual({
      data: null,
      error: {
        code: "CONFLICT",
        message: "Resource state conflict.",
        details: { retry: false },
      },
    });
  });

  it("normalizes unknown errors without leaking internal data", async () => {
    const secret = "secret-token-123";
    const error = new Error(`Database failed at C:\\internal\\server.ts with ${secret}`);
    error.stack = `STACK ${secret}`;

    const response = handleApiError(error);
    const payload = JSON.stringify(await readJson(response));

    expect(response.status).toBe(500);
    expect(payload).toContain("SERVER_ERROR");
    expect(payload).toContain("An unexpected server error occurred.");
    expect(payload).not.toContain(secret);
    expect(payload).not.toContain("Database failed");
    expect(payload).not.toContain("internal\\server.ts");
    expect(payload).not.toContain("STACK");
  });

  it("normalizes thrown strings and objects to SERVER_ERROR", async () => {
    const stringResponse = handleApiError("raw secret");
    const objectResponse = handleApiError({ token: "raw-token", internal: true });

    expect(stringResponse.status).toBe(500);
    expect(await readJson(stringResponse)).toEqual({
      data: null,
      error: {
        code: "SERVER_ERROR",
        message: "An unexpected server error occurred.",
      },
    });
    expect(objectResponse.status).toBe(500);
    expect(await readJson(objectResponse)).toEqual({
      data: null,
      error: {
        code: "SERVER_ERROR",
        message: "An unexpected server error occurred.",
      },
    });
  });
});
