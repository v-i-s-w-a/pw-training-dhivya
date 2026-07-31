import { test, expect } from '@playwright/test';

test('basic test', async ({ page }: { page: any }) => {
  await page.goto('https://www.saucedemo.com/');
  const title = page.locator('.login_logo');
  await expect(title).toHaveText('Swag Labs');
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});