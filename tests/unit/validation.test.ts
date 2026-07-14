import { describe, expect, it } from "vitest";
import { z } from "zod";

import { handleApiError } from "../../src/lib/api";
import {
  exampleListingSchema,
  exampleProfileUpdateSchema,
  formatValidationError,
  validateRequestBody,
} from "../../src/lib/validation";

describe("validation foundation", () => {
  it("returns parsed and normalized profile data", () => {
    const result = validateRequestBody(exampleProfileUpdateSchema, {
      name: "  Alex  ",
      preferredLanguage: "  uk  ",
    });

    expect(result).toEqual({
      success: true,
      data: { name: "Alex", preferredLanguage: "uk" },
    });
  });

  it("maps schema failures to the standard API validation error", async () => {
    const result = validateRequestBody(exampleProfileUpdateSchema, {
      name: "",
      unexpected: "PRIVATE-VALUE",
    });

    expect(result.success).toBe(false);
    if (result.success) return;

    expect(result.error.code).toBe("VALIDATION_ERROR");
    expect(result.error.status).toBe(400);
    expect(JSON.stringify(result.error.details)).not.toContain("PRIVATE-VALUE");

    const response = handleApiError(result.error);
    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toMatchObject({
      data: null,
      error: {
        code: "VALIDATION_ERROR",
        message: "Invalid request body.",
      },
    });
  });

  it("groups field and form errors without including submitted values", () => {
    const schema = z.object({ email: z.email() }).strict();
    const parsed = schema.safeParse({ email: "PRIVATE-VALUE", extra: true });

    expect(parsed.success).toBe(false);
    if (parsed.success) return;

    const formatted = formatValidationError(parsed.error);
    expect(formatted.fieldErrors.email).toHaveLength(1);
    expect(formatted.formErrors).toHaveLength(1);
    expect(JSON.stringify(formatted)).not.toContain("PRIVATE-VALUE");
  });

  it("accepts the privacy-safe placeholder listing fields", () => {
    const result = validateRequestBody(exampleListingSchema, {
      title: "  Family bicycle  ",
      description: "  A maintained bicycle for local pickup.  ",
      priceAmount: 25,
      categoryId: "bicycles",
      approximateArea: "North district",
      city: "Kyiv",
      country: "Ukraine",
    });

    expect(result.success).toBe(true);
    if (!result.success) return;

    expect(result.data.title).toBe("Family bicycle");
    expect(result.data).not.toHaveProperty("exactPickupAddress");
  });

  it("rejects unknown fields, including an exact pickup address", () => {
    const result = validateRequestBody(exampleListingSchema, {
      title: "Bicycle",
      description: "Ready for local pickup.",
      categoryId: "bicycles",
      exactPickupAddress: "PRIVATE-VALUE",
    });

    expect(result.success).toBe(false);
    if (result.success) return;

    expect(result.error.code).toBe("VALIDATION_ERROR");
    expect(JSON.stringify(result.error.details)).not.toContain("PRIVATE-VALUE");
  });
});
