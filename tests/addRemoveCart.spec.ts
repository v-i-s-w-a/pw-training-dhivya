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