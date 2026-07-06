import { describe, expect, it } from "vitest";

import {
  brandIconAssets,
  brandLogoAssets,
} from "../../src/components/huddle/brand-assets";

describe("approved Huddle brand assets", () => {
  it("exposes exactly six approved logo variants", () => {
    expect(Object.keys(brandLogoAssets)).toHaveLength(6);
  });

  it("exposes exactly six approved icon variants", () => {
    expect(Object.keys(brandIconAssets)).toHaveLength(6);
  });

  it("references only approved brand directories", () => {
    for (const path of Object.values(brandLogoAssets)) {
      expect(path.startsWith("/brand/logotype/")).toBe(true);
      expect(path.endsWith(".png")).toBe(true);
    }

    for (const path of Object.values(brandIconAssets)) {
      expect(path.startsWith("/brand/icon/")).toBe(true);
      expect(path.endsWith(".png")).toBe(true);
    }
  });
});
