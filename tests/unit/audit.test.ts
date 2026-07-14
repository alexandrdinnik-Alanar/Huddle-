import { afterEach, describe, expect, it, vi } from "vitest";

import { createAuditLog, sanitizeAuditMetadata } from "../../src/lib/audit";
import type { AuditLogWriter } from "../../src/lib/audit";

function createWriter(id = "audit-1") {
  return {
    create: vi.fn<AuditLogWriter["create"]>(async () => ({ id })),
  } satisfies AuditLogWriter;
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe("audit foundation", () => {
  it("writes a user audit event with minimized request context", async () => {
    const writer = createWriter();

    const result = await createAuditLog(
      {
        actorId: " user-1 ",
        actorRole: " ADMIN ",
        action: " role.assignment.created ",
        targetType: " UserRole ",
        targetId: " role-assignment-1 ",
        metadata: { previousStatus: "PENDING", count: 1 },
        requestContext: {
          ipAddress: "127.0.0.1",
          userAgent: ` test-agent ${"x".repeat(600)} `,
        },
      },
      { writer },
    );

    expect(result).toEqual({ success: true, auditLogId: "audit-1" });
    expect(writer.create).toHaveBeenCalledOnce();
    expect(writer.create).toHaveBeenCalledWith({
      actorId: "user-1",
      actorRole: "ADMIN",
      action: "role.assignment.created",
      targetType: "UserRole",
      targetId: "role-assignment-1",
      metadata: { previousStatus: "PENDING", count: 1 },
      ipAddress: "127.0.0.1",
      userAgent: expect.stringMatching(/^test-agent /),
    });
    expect(writer.create.mock.calls[0]?.[0].userAgent).toHaveLength(512);
  });

  it("supports a system actor without a user id", async () => {
    const writer = createWriter("audit-system");

    const result = await createAuditLog(
      {
        action: "retention.job.completed",
        targetType: "RetentionPolicy",
      },
      { writer },
    );

    expect(result).toEqual({ success: true, auditLogId: "audit-system" });
    expect(writer.create).toHaveBeenCalledWith(
      expect.objectContaining({
        actorId: undefined,
        actorRole: "SYSTEM",
      }),
    );
  });

  it("removes sensitive keys, unsupported values, and excessive detail", () => {
    const circular: Record<string, unknown> = { safeId: "item-1" };
    circular.self = circular;

    const metadata = sanitizeAuditMetadata({
      safeId: "item-1",
      status: "APPROVED",
      childName: "PRIVATE-CHILD",
      exactAddress: "PRIVATE-ADDRESS",
      authToken: "PRIVATE-TOKEN",
      nested: {
        reasonCode: "POLICY_MATCH",
        email: "private@example.test",
      },
      circular,
      summary: "x".repeat(400),
      invalidNumber: Number.NaN,
    });

    const serialized = JSON.stringify(metadata);
    expect(metadata).toMatchObject({
      safeId: "item-1",
      status: "APPROVED",
      nested: { reasonCode: "POLICY_MATCH" },
      circular: { safeId: "item-1" },
    });
    expect((metadata?.summary as string).length).toBe(256);
    expect(serialized).not.toContain("PRIVATE-CHILD");
    expect(serialized).not.toContain("PRIVATE-ADDRESS");
    expect(serialized).not.toContain("PRIVATE-TOKEN");
    expect(serialized).not.toContain("private@example.test");
    expect(metadata).not.toHaveProperty("invalidNumber");
  });

  it("omits invalid IP addresses", async () => {
    const writer = createWriter();

    await createAuditLog(
      {
        action: "privacy.export.requested",
        targetType: "DataRequest",
        requestContext: { ipAddress: "not-an-ip" },
      },
      { writer },
    );

    expect(writer.create).toHaveBeenCalledWith(
      expect.objectContaining({ ipAddress: undefined }),
    );
  });

  it("does not throw when persistence fails by default", async () => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    const writer: AuditLogWriter = {
      create: vi.fn(async () => {
        throw new Error("PRIVATE DATABASE ERROR");
      }),
    };

    await expect(
      createAuditLog(
        { action: "moderation.case.opened", targetType: "ModerationCase" },
        { writer },
      ),
    ).resolves.toEqual({ success: false, reason: "WRITE_FAILED" });
    expect(console.error).toHaveBeenCalledWith(
      "[audit] AuditLog write failed.",
    );
  });

  it("can be explicitly configured to throw", async () => {
    const writer: AuditLogWriter = {
      create: vi.fn(async () => {
        throw new Error("write failed");
      }),
    };

    await expect(
      createAuditLog(
        { action: "role.revoked", targetType: "UserRole" },
        { writer, throwOnError: true },
      ),
    ).rejects.toThrow("write failed");
  });

  it("fails safely for incomplete audit events", async () => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    const writer = createWriter();

    await expect(
      createAuditLog({ action: " ", targetType: "User" }, { writer }),
    ).resolves.toEqual({ success: false, reason: "INVALID_INPUT" });
    expect(writer.create).not.toHaveBeenCalled();
  });
});
