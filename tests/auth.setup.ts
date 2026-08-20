import {test as setup, expect } from '@playwright/test';  
import { LoginPage } from '../pages/LoginPage';
import process from 'process';

const authFile = ".auth/user.json";

setup('Authentication Setup', async ({ page }) => {

    const username = process.env.USERNAME ?? "standard_user";
    const password = process.env.PASSWORD ?? "secret_sauce";

    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(username, password);
    await expect(page).toHaveURL(/.*inventory.html/);
    await page.context().storageState({ path: authFile });

});

const authFileProblemUser = ".auth/problem_user.json";

setup('Authenticate problem user', async ({ page }) => {
    const username = process.env.USERNAME ?? "problem_user";
    const password = process.env.PASSWORD ?? "secret_sauce";

    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(username, password);
    await expect(page).toHaveURL(/.*inventory.html/);
    await page.context().storageState({ path: authFileProblemUser });
    
});