import { test, expect } from '../fixtures.ts';
import { LoginPage } from '../pages/LoginPage.ts';
import { CartPage } from '../pages/CartPage.ts';
import { InventoryPage } from '../pages/InventoryPage.ts';


test ("Add products and remove from cart", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');
    expect(page.url()).toContain('/inventory.html');
    const cartPage = new CartPage(page);

    // Add products to the cart
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addToCart('Sauce Labs Bolt T-Shirt');
    await inventoryPage.addToCart('Sauce Labs Fleece Jacket');
    expect(await cartPage.getCartCount()).toBe(2);
    console.log("Cart count after adding products: ", await cartPage.getCartCount());
    await cartPage.open();
   const itemNames = await cartPage.itemNames();
    console.log("Items in cart:", itemNames);
    expect(itemNames).toContainText(['Sauce Labs Bolt T-Shirt']);
    expect(itemNames).toContainText(['Sauce Labs Fleece Jacket']);

    // Remove a product from the cart
    await cartPage.removeFromCart('Sauce Labs Bolt T-Shirt');
    expect(await cartPage.getCartCount()).toBe(1);
    console.log("Cart count after removing a product: ", await cartPage.getCartCount());
    
    const itemNamesAfterRemoval = await cartPage.itemNames();
    console.log("Items in cart after removal:", itemNamesAfterRemoval);
    expect(itemNamesAfterRemoval).not.toContainText(['Sauce Labs Bolt T-Shirt']);
    expect(itemNamesAfterRemoval).toContainText(['Sauce Labs Fleece Jacket']);
});

test('Add and remove product - using fixture', async ({ cartPage }) => {
  await expect(cartPage.itemNames()).toContainText([
    'Sauce Labs Bolt T-Shirt',
    'Sauce Labs Fleece Jacket',
  ]);
  await cartPage.removeFromCart('Sauce Labs Bolt T-Shirt');
  await expect(cartPage.itemNames()).toContainText(['Sauce Labs Fleece Jacket']);
});