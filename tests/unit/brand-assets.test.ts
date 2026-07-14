import { access, readFile } from "node:fs/promises";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import {
  brandIconAssets,
  brandLogoAssets,
} from "../../src/components/huddle/brand-assets";

const repoRoot = process.cwd();

describe("canonical Huddle Family brand assets", () => {
  it("exposes only canonical production logo and icon paths", () => {
    expect(brandLogoAssets).toEqual({
      familyLockupPng: "/brand/huddle-family-logo.png",
      familyLockupWebp: "/brand/huddle-family-logo.webp",
      wordmarkPng:
        "/brand/logotype/Huddle_logotype_copper_transparent_APPROVED.png",
    });
    expect(brandIconAssets).toEqual({
      favicon: "/brand/icons/favicon.ico",
      appleTouch: "/brand/icons/apple-touch-icon.png",
      app192: "/brand/icons/icon-192.png",
      app512: "/brand/icons/icon-512.png",
    });
  });

  it("keeps every exported production asset present in public", async () => {
    const paths = [
      ...Object.values(brandLogoAssets),
      ...Object.values(brandIconAssets),
    ];

    await Promise.all(
      paths.map((path) =>
        access(join(repoRoot, "public", path.replace(/^\/brand\//, "brand/"))),
      ),
    );
  });

  it("keeps the manifest aligned with component exports", async () => {
    const manifest = JSON.parse(
      await readFile(
        join(repoRoot, "public", "brand", "expected-assets.json"),
        "utf8",
      ),
    ) as { assets: Array<{ path: string }> };
    const manifestPaths = manifest.assets.map(({ path }) => path);

    expect(manifestPaths).toEqual(
      expect.arrayContaining([
        ...Object.values(brandLogoAssets),
        ...Object.values(brandIconAssets),
      ]),
    );
  });

  it("does not expose retired dark-green or black variants", () => {
    const exportedPaths = [
      ...Object.values(brandLogoAssets),
      ...Object.values(brandIconAssets),
    ];

    expect(
      exportedPaths.some((path) =>
        /dark[_-]?green|deep[_-]?green|black/i.test(path),
      ),
    ).toBe(false);
  });
});
