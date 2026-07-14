import type { Prisma } from "@prisma/client";

export interface AuditRequestContext {
  readonly ipAddress?: string;
  readonly userAgent?: string;
}

export interface CreateAuditLogInput {
  readonly actorId?: string;
  readonly actorRole?: string;
  readonly action: string;
  readonly targetType: string;
  readonly targetId?: string;
  readonly metadata?: Readonly<Record<string, unknown>>;
  readonly requestContext?: AuditRequestContext;
}

export interface AuditLogWriter {
  create(
    data: Prisma.AuditLogUncheckedCreateInput,
  ): Promise<{ readonly id: string }>;
}

export interface CreateAuditLogOptions {
  readonly writer?: AuditLogWriter;
  readonly throwOnError?: boolean;
}

export type AuditLogFailureReason = "INVALID_INPUT" | "WRITE_FAILED";

export type CreateAuditLogResult =
  | { readonly success: true; readonly auditLogId: string }
  | { readonly success: false; readonly reason: AuditLogFailureReason };
