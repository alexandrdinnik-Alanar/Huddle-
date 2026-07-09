import type { UserStatus } from "@prisma/client";

import { StatusNotAllowedError } from "./errors";

export function requireStatus(
  trustedStatus: UserStatus,
  allowedStatuses: readonly UserStatus[],
): void {
  if (allowedStatuses.length === 0 || !allowedStatuses.includes(trustedStatus)) {
    throw new StatusNotAllowedError();
  }
}
