import { test, expect } from '../fixtures.ts';
import { LoginPage } from '../pages/LoginPage.ts';

test.describe('Authentication', () => {
    //let loginPage: LoginPage;

    // Before hook file
    // test.beforeEach(async ({ page }) => {
    //     loginPage = new LoginPage(page);
    //     await loginPage.open();
    // });

    test("Standard user can login", async ({ page }) => {
    const loginPage = new LoginPage(page);
    // await loginPage.open();
    // await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory.html/);
});
});
