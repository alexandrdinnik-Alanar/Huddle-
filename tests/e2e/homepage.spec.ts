import { expect, test } from "@playwright/test";

const viewports = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "compact-desktop", width: 1024, height: 900 },
  { name: "tablet", width: 768, height: 900 },
  { name: "mobile", width: 390, height: 844 },
] as const;

for (const viewport of viewports) {
  test(`homepage visual structure — ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto("/");

    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Everything your family needs",
    );
    await expect(page.getByRole("heading", { name: "Activities that inspire together" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Community around you" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Support you can count on" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Curated family essentials" })).toBeVisible();

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(1);

    const logo = page.getByRole("img", { name: "Huddle" }).first();
    await expect(logo).toBeVisible();

    if (viewport.width <= 900) {
      await expect(page.getByLabel("Open navigation")).toBeVisible();
    }

    await page.screenshot({
      path: `test-results/home-${viewport.name}.png`,
      fullPage: true,
      animations: "disabled",
    });
  });
}
