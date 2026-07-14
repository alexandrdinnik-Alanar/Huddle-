import { z } from "zod";

import { ApiError } from "../api";

import { formatValidationError } from "./errors";

export const INVALID_REQUEST_BODY_MESSAGE = "Invalid request body.";

export interface ValidationSuccess<T> {
  readonly success: true;
  readonly data: T;
}

export interface ValidationFailure {
  readonly success: false;
  readonly error: ApiError;
}

export type ValidationResult<T> = ValidationSuccess<T> | ValidationFailure;

export function validateRequestBody<TSchema extends z.ZodType>(
  schema: TSchema,
  body: unknown,
): ValidationResult<z.output<TSchema>> {
  const result = schema.safeParse(body);

  if (result.success) {
    return { success: true, data: result.data };
  }

  return {
    success: false,
    error: new ApiError(
      "VALIDATION_ERROR",
      INVALID_REQUEST_BODY_MESSAGE,
      formatValidationError(result.error),
    ),
  };
}
