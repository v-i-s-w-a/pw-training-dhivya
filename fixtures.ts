import { test as base } from '@playwright/test';
import { LoginPage } from './pages/LoginPage.ts';
import { CartPage } from './pages/CartPage.ts';
import { InventoryPage } from './pages/InventoryPage.ts';

type Fixtures = {
    loginPage: LoginPage;
    cartPage: CartPage;
    inventoryPage: InventoryPage;
};
export const test = base.extend<Fixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    inventoryPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        const inventoryPage = new InventoryPage(page);
        await use(inventoryPage);
    },
    cartPage: async ({ inventoryPage, page }, use) => {
        const cartPage = new CartPage(page);
        await inventoryPage.addToCart('Sauce Labs Bolt T-Shirt');
        await inventoryPage.addToCart('Sauce Labs Fleece Jacket');      
        await inventoryPage.openCart(); 
        await use(cartPage);
    },
});

export { expect } from '@playwright/test';