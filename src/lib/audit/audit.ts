import { isIP } from "node:net";

import type { Prisma } from "@prisma/client";

import { getPrismaClient } from "../db";
import type {
  AuditLogWriter,
  CreateAuditLogInput,
  CreateAuditLogOptions,
  CreateAuditLogResult,
} from "./types";

const MAX_IDENTIFIER_LENGTH = 160;
const MAX_METADATA_DEPTH = 3;
const MAX_METADATA_KEYS = 32;
const MAX_ARRAY_ITEMS = 20;
const MAX_METADATA_STRING_LENGTH = 256;
const MAX_USER_AGENT_LENGTH = 512;

const SENSITIVE_KEY_PATTERN =
  /(address|authorization|birth|child|cookie|email|latitude|location|longitude|message|name|password|phone|school|secret|token)/i;

type SanitizedJsonValue = Prisma.InputJsonValue | null;

class AuditInputError extends Error {}

function normalizeOptionalText(
  value: string | undefined,
  maxLength: number,
): string | undefined {
  const normalized = value?.trim();
  if (!normalized) return undefined;
  return normalized.slice(0, maxLength);
}

function sanitizeJsonValue(
  value: unknown,
  depth: number,
  seen: WeakSet<object>,
): SanitizedJsonValue | undefined {
  if (value === null || typeof value === "boolean") return value;

  if (typeof value === "number") {
    return Number.isFinite(value) ? value : undefined;
  }

  if (typeof value === "string") {
    return value.slice(0, MAX_METADATA_STRING_LENGTH);
  }

  if (value instanceof Date) {
    return value.toISOString();
  }

  if (
    typeof value !== "object" ||
    depth >= MAX_METADATA_DEPTH ||
    seen.has(value)
  ) {
    return undefined;
  }

  seen.add(value);

  if (Array.isArray(value)) {
    const items = value
      .slice(0, MAX_ARRAY_ITEMS)
      .map((item) => sanitizeJsonValue(item, depth + 1, seen))
      .filter((item): item is SanitizedJsonValue => item !== undefined);
    return items;
  }

  const prototype = Object.getPrototypeOf(value);
  if (prototype !== Object.prototype && prototype !== null) return undefined;

  const output: Array<[string, SanitizedJsonValue]> = [];
  const entries = Object.entries(value).slice(0, MAX_METADATA_KEYS);

  for (const [key, item] of entries) {
    if (SENSITIVE_KEY_PATTERN.test(key)) continue;
    const sanitized = sanitizeJsonValue(item, depth + 1, seen);
    if (sanitized !== undefined) output.push([key, sanitized]);
  }

  return Object.fromEntries(output) as Prisma.InputJsonObject;
}

export function sanitizeAuditMetadata(
  metadata: Readonly<Record<string, unknown>> | undefined,
): Prisma.InputJsonObject | undefined {
  if (!metadata) return undefined;
  const sanitized = sanitizeJsonValue(metadata, 0, new WeakSet());
  if (!sanitized || typeof sanitized !== "object" || Array.isArray(sanitized))
    return undefined;
  const output = sanitized as Prisma.InputJsonObject;
  return Object.keys(output).length > 0 ? output : undefined;
}

function getDefaultWriter(): AuditLogWriter {
  return {
    async create(data) {
      return getPrismaClient().auditLog.create({ data, select: { id: true } });
    },
  };
}

function reportFailure(): void {
  console.error("[audit] AuditLog write failed.");
}

export async function createAuditLog(
  input: CreateAuditLogInput,
  options: CreateAuditLogOptions = {},
): Promise<CreateAuditLogResult> {
  try {
    const action = normalizeOptionalText(input.action, MAX_IDENTIFIER_LENGTH);
    const targetType = normalizeOptionalText(
      input.targetType,
      MAX_IDENTIFIER_LENGTH,
    );

    if (!action || !targetType) {
      throw new AuditInputError("Audit action and target type are required.");
    }

    const actorId = normalizeOptionalText(input.actorId, MAX_IDENTIFIER_LENGTH);
    const actorRole =
      normalizeOptionalText(input.actorRole, MAX_IDENTIFIER_LENGTH) ??
      (actorId ? undefined : "SYSTEM");
    const ipAddress = normalizeOptionalText(
      input.requestContext?.ipAddress,
      45,
    );

    const data: Prisma.AuditLogUncheckedCreateInput = {
      actorId,
      actorRole,
      action,
      targetType,
      targetId: normalizeOptionalText(input.targetId, MAX_IDENTIFIER_LENGTH),
      metadata: sanitizeAuditMetadata(input.metadata),
      ipAddress: ipAddress && isIP(ipAddress) ? ipAddress : undefined,
      userAgent: normalizeOptionalText(
        input.requestContext?.userAgent,
        MAX_USER_AGENT_LENGTH,
      ),
    };

    const result = await (options.writer ?? getDefaultWriter()).create(data);
    return { success: true, auditLogId: result.id };
  } catch (error) {
    if (options.throwOnError) throw error;
    reportFailure();
    return {
      success: false,
      reason:
        error instanceof AuditInputError ? "INVALID_INPUT" : "WRITE_FAILED",
    };
  }
}
