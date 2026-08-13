import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';

test ("Add products and remove from cart", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');
    expect(page.url()).toContain('/inventory.html');
    const cartPage = new CartPage(page);

    // Add products to the cart
    await cartPage.addToCart('Sauce Labs Bolt T-Shirt');
    await cartPage.addToCart('Sauce Labs Fleece Jacket');
    expect(await cartPage.getCartCount()).toBe(2);
    console.log("Cart count after adding products: ", await cartPage.getCartCount());
    await cartPage.open();
   const itemNames = await cartPage.itemNames();
    console.log("Items in cart:", itemNames);
    expect(itemNames).toContain('Sauce Labs Bolt T-Shirt');
    expect(itemNames).toContain('Sauce Labs Fleece Jacket');

    // Remove a product from the cart
    await cartPage.removeFromCart('Sauce Labs Bolt T-Shirt');
    expect(await cartPage.getCartCount()).toBe(1);
    console.log("Cart count after removing a product: ", await cartPage.getCartCount());
    
    const itemNamesAfterRemoval = await cartPage.itemNames();
    console.log("Items in cart after removal:", itemNamesAfterRemoval);
    expect(itemNamesAfterRemoval).not.toContain('Sauce Labs Bolt T-Shirt');
    expect(itemNamesAfterRemoval).toContain('Sauce Labs Fleece Jacket');
});
