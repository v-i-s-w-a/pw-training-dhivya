import { test, expect } from '../fixtures.ts';
import { LoginPage } from '../pages/LoginPage.ts';
import { CartPage } from '../pages/CartPage.ts';
import { InventoryPage } from '../pages/InventoryPage.ts';

test('Add and remove product - using fixture', async ({ cartPage }) => {
  await expect(cartPage.itemNames()).toContainText([
    'Sauce Labs Bolt T-Shirt',
    'Sauce Labs Fleece Jacket',
  ]);
  await cartPage.removeFromCart('Sauce Labs Bolt T-Shirt');
  await expect(cartPage.itemNames()).toContainText(['Sauce Labs Fleece Jacket']);
});

test('problem user sees the same image for all products', async ({ page }) => {
  await page.goto('/inventory.html');

  const imageSources = await page
    .locator('.inventory_item_img img')
    .evaluateAll((images) =>
      images.map((image) => image.getAttribute('src'))
    );
  expect(imageSources).toHaveLength(6);
  expect(new Set(imageSources).size).toBe(6);
});