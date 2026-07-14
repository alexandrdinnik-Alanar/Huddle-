import type { z } from "zod";

export interface FormattedValidationError {
  readonly fieldErrors: Readonly<Record<string, readonly string[]>>;
  readonly formErrors: readonly string[];
}

function formatIssuePath(path: readonly PropertyKey[]): string {
  return path
    .map((segment) => {
      if (typeof segment === "symbol") {
        return segment.description ?? "symbol";
      }

      return String(segment);
    })
    .join(".");
}

export function formatValidationError(
  error: z.ZodError,
): FormattedValidationError {
  const fields = new Map<string, string[]>();
  const formErrors: string[] = [];

  for (const issue of error.issues) {
    const path = formatIssuePath(issue.path);

    if (path.length === 0) {
      formErrors.push(issue.message);
      continue;
    }

    const messages = fields.get(path) ?? [];
    messages.push(issue.message);
    fields.set(path, messages);
  }

  return {
    fieldErrors: Object.fromEntries(fields),
    formErrors,
  };
}
