const { test: setup, expect } = require('@playwright/test');

setup('authenticate', async ({ page }) => {

  await page.goto('/');

  await page.getByPlaceholder('Username')
    .fill(process.env.ORANGE_USERNAME);

  await page.getByPlaceholder('Password')
    .fill(process.env.ORANGE_PASSWORD);

  await page.getByRole('button', { name: 'Login' }).click();

  //await expect(page).toHaveURL(/dashboard/);

  await page.context().storageState({
    path: 'auth/user.json'
  });

});