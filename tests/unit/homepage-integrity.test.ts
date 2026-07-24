import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const repoRoot = resolve(import.meta.dirname, "../..");
const pagePath = resolve(repoRoot, "src/app/(public)/page.tsx");
const stylesPath = resolve(repoRoot, "src/app/(public)/home.module.css");
const pageSource = readFileSync(pagePath, "utf8");
const styleSource = readFileSync(stylesPath, "utf8");

describe("Huddle production homepage", () => {
  it("uses canonical brand assets instead of recreating identity", () => {
    expect(pageSource).toContain(
      'src="/brand/logotype/Huddle_logotype_copper_transparent_APPROVED.png"',
    );
    expect(pageSource).toContain('src="/brand/huddle-family-logo.png"');
    expect(pageSource).toContain('src="/brand/icons/icon-192.png"');
    expect(pageSource).toContain('src="/brand/icons/icon-512.png"');
    expect(pageSource).not.toMatch(/data:image\/svg\+xml/);
  });

  it("keeps the agreed family-platform product hierarchy", () => {
    const activities = pageSource.indexOf("Activities that inspire together");
    const community = pageSource.indexOf("Community around you");
    const services = pageSource.indexOf("Support you can count on");
    const marketplace = pageSource.indexOf("Curated family essentials");

    expect(activities).toBeGreaterThan(-1);
    expect(community).toBeGreaterThan(activities);
    expect(services).toBeGreaterThan(community);
    expect(marketplace).toBeGreaterThan(services);
  });

  it("keeps marketplace secondary to planning, discovery, community and services", () => {
    expect(pageSource).toContain("Explore activities");
    expect(pageSource).toContain("Open family planner");
    expect(pageSource).toContain("Explore community");
    expect(pageSource).toContain("Browse all services");
    expect(pageSource).toContain("Shop marketplace");
  });

  it("preserves the reference-led ecosystem density", () => {
    expect(pageSource).toContain("trustItems.map");
    expect(pageSource).toContain("categoryItems.map");
    expect(pageSource).toContain("stages.map");
    expect(pageSource).toContain("partnerImpactSection");
    expect(pageSource).toContain("utilityGrid");
  });

  it("uses the locked Huddle palette through design tokens", () => {
    for (const token of [
      "--color-warm-cream",
      "--color-sand-beige",
      "--color-copper-clay",
      "--color-soft-olive",
      "--color-graphite-taupe",
      "--color-white",
    ]) {
      expect(styleSource).toContain(token);
    }
  });

  it("contains responsive and reduced-motion rules", () => {
    expect(styleSource).toContain("@media (max-width: 1180px)");
    expect(styleSource).toContain("@media (max-width: 900px)");
    expect(styleSource).toContain("@media (max-width: 640px)");
    expect(styleSource).toContain("@media (prefers-reduced-motion: reduce)");
  });

  it("keeps the homepage component-based and editable", () => {
    expect(pageSource).toContain("function PillLink");
    expect(pageSource).toContain("function PhotoCard");
    expect(pageSource).toContain("function LineIcon");
    expect(pageSource).toContain("activityCards.map");
    expect(pageSource).toContain("communityCards.map");
    expect(pageSource).toContain("serviceCards.map");
    expect(pageSource).toContain("products.map");
  });
});
