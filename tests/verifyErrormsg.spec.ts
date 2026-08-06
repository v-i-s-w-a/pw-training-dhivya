import { test, expect } from '@playwright/test';

test('verify error message for locked out user', async ({ page }) => {
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
  const errorMessage = page.getByTestId('error');
  await expect(errorMessage).toBeVisible();
});
