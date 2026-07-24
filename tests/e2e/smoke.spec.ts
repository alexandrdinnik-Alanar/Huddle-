import { expect, test } from "@playwright/test";

test("renders the production homepage", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Everything your family needs",
  );
  await expect(page.getByRole("link", { name: "Explore activities" }).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: "Activities that inspire together" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Community around you" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Support you can count on" })).toBeVisible();
});
