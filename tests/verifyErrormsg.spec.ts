import { test, expect } from '@playwright/test';

test('basic test', async ({ page }: { page: any }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle('Swag Labs');
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await page
    .getByPlaceholder('Username')
    .fill('locked_out_user');
  await page
    .getByPlaceholder('Password')
    .fill('secret_sauce');
  const loginButton = page.getByRole('button', { name: 'Login' });
  await loginButton.click();
  const errorMessage = page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
});
