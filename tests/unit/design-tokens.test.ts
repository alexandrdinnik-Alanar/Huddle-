import { describe, expect, it } from "vitest";

import { designTokens, rawBrandTokens } from "../../src/lib/design-tokens/tokens";

describe("Huddle design tokens", () => {
  it("exposes the required semantic token groups", () => {
    expect(Object.keys(designTokens)).toEqual([
      "color",
      "typography",
      "spacing",
      "radius",
      "shadow",
      "breakpoint",
      "zIndex",
    ]);
  });

  it("maps critical semantic colors to the approved brand direction", () => {
    expect(designTokens.color.background.base).toBe(rawBrandTokens.color.ivory);
    expect(designTokens.color.background.soft).toBe(rawBrandTokens.color.warmCream);
    expect(designTokens.color.background.deepGreen).toBe(rawBrandTokens.color.deepForest);
    expect(designTokens.color.brand.copper).toBe(rawBrandTokens.color.copper);
    expect(designTokens.color.cta.primary).toBe(rawBrandTokens.color.deepForest);
    expect(designTokens.color.text.primary).toBe(rawBrandTokens.color.charcoal);
  });

  it("uses Playfair Display and Inter for the approved typography direction", () => {
    expect(designTokens.typography.fontFamily.display).toContain("Playfair Display");
    expect(designTokens.typography.fontFamily.body).toContain("Inter");
  });

  it("keeps copper as accent while deep green remains the primary CTA", () => {
    expect(designTokens.color.cta.primary).toBe(designTokens.color.brand.green);
    expect(designTokens.color.cta.primary).not.toBe(designTokens.color.brand.copper);
  });
});
