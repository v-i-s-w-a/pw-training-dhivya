import { test, expect } from '../fixtures.ts';
import { LoginPage } from '../pages/LoginPage.ts';
import { CartPage } from '../pages/CartPage.ts';
import { InventoryPage } from '../pages/InventoryPage.ts';

test.only('problem user sees the same image for all products', async ({ page }) => {
  await page.goto('/inventory.html');

  const imageSources = await page
    .locator('.inventory_item_img img')
    .evaluateAll((images) =>
      images.map((image) => image.getAttribute('src'))
    );
  expect(imageSources).toHaveLength(6);
  expect(new Set(imageSources).size).toBe(1);
});