import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://127.0.0.1:3000");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(
    "Michael Schneider | Cloud Strategy & Advisory"
  );
});

test("get what i do link", async ({ page }) => {
  await page.goto("http://127.0.0.1:3000/");

  // Click the get started link.
  await page.getByRole("link", { name: "What I do" }).click();

  // Expects page to have a url with the name of insights.
  await expect(page).toHaveURL(/.*what-i-do/);
});

test("get insights link", async ({ page }) => {
  await page.goto("http://127.0.0.1:3000/");

  // Click the get started link.
  await page.getByRole("link", { name: "Insights" }).click();

  // Expects page to have a url with the name of insights.
  await expect(page).toHaveURL(/.*insights/);
});
