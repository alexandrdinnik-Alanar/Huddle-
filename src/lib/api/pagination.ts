import type { Pagination } from "./types";

export interface CreatePaginationInput {
  readonly page: number;
  readonly pageSize: number;
  readonly total: number;
}

function assertSafePaginationInteger(value: number, field: string, minimum: number): void {
  if (!Number.isSafeInteger(value) || value < minimum) {
    throw new RangeError(`${field} must be a safe integer greater than or equal to ${minimum}.`);
  }
}

export function createPagination({ page, pageSize, total }: CreatePaginationInput): Pagination {
  assertSafePaginationInteger(page, "page", 1);
  assertSafePaginationInteger(pageSize, "pageSize", 1);
  assertSafePaginationInteger(total, "total", 0);

  return {
    page,
    pageSize,
    total,
    hasMore: page * pageSize < total,
  };
}
