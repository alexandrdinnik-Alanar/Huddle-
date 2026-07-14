import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import {
  designTokens,
  functionalColorTokens,
  rawBrandTokens,
} from "../../src/lib/design-tokens/tokens";

function relativeLuminance(hex: string) {
  const channels = hex
    .slice(1)
    .match(/.{2}/g)!
    .map((channel) => Number.parseInt(channel, 16) / 255)
    .map((channel) =>
      channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4,
    );

  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrastRatio(foreground: string, background: string) {
  const foregroundLuminance = relativeLuminance(foreground);
  const backgroundLuminance = relativeLuminance(background);
  const lighter = Math.max(foregroundLuminance, backgroundLuminance);
  const darker = Math.min(foregroundLuminance, backgroundLuminance);

  return (lighter + 0.05) / (darker + 0.05);
}

describe("Huddle design tokens", () => {
  it("keeps the locked canonical palette exact", () => {
    expect(rawBrandTokens.color).toEqual({
      warmCream: "#F6F0E8",
      sandBeige: "#E8D9C9",
      copperClay: "#C98A5C",
      softOlive: "#8A9076",
      graphiteTaupe: "#7C6D63",
      white: "#FFFFFF",
    });
  });

  it("maps semantic colors without legacy deep-green tokens", () => {
    expect(designTokens.color.background.base).toBe(
      rawBrandTokens.color.warmCream,
    );
    expect(designTokens.color.background.soft).toBe(
      rawBrandTokens.color.sandBeige,
    );
    expect(designTokens.color.brand.copper).toBe(
      rawBrandTokens.color.copperClay,
    );
    expect(designTokens.color.brand.olive).toBe(rawBrandTokens.color.softOlive);
    expect(JSON.stringify(designTokens.color)).not.toMatch(
      /deepForest|deepGreen|green/i,
    );
  });

  it("keeps CSS variables synchronized with TypeScript color tokens", async () => {
    const css = await readFile(
      join(process.cwd(), "src", "lib", "design-tokens", "css-variables.css"),
      "utf8",
    );

    for (const value of [
      ...Object.values(rawBrandTokens.color),
      ...Object.values(functionalColorTokens),
    ]) {
      expect(css.toUpperCase()).toContain(value.toUpperCase());
    }
  });

  it("meets WCAG AA for normal text on canonical light surfaces", () => {
    for (const textColor of [
      functionalColorTokens.textStrong,
      functionalColorTokens.textDefault,
    ]) {
      expect(
        contrastRatio(textColor, rawBrandTokens.color.warmCream),
      ).toBeGreaterThanOrEqual(4.5);
      expect(
        contrastRatio(textColor, rawBrandTokens.color.sandBeige),
      ).toBeGreaterThanOrEqual(4.5);
      expect(
        contrastRatio(textColor, rawBrandTokens.color.white),
      ).toBeGreaterThanOrEqual(4.5);
    }
  });

  it("meets WCAG AA for inverse text on action backgrounds", () => {
    expect(
      contrastRatio(
        rawBrandTokens.color.white,
        functionalColorTokens.actionCopper,
      ),
    ).toBeGreaterThanOrEqual(4.5);
    expect(
      contrastRatio(
        rawBrandTokens.color.white,
        functionalColorTokens.actionOlive,
      ),
    ).toBeGreaterThanOrEqual(4.5);
  });

  it("uses Playfair Display and Inter for the approved typography direction", () => {
    expect(designTokens.typography.fontFamily.display).toContain(
      "Playfair Display",
    );
    expect(designTokens.typography.fontFamily.body).toContain("Inter");
  });
});
