import { test, expect } from '@playwright/test';

test('Create User', async()=>{
    console.log('my first test')
});

test('test', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Docs' }).click();
    await page.getByRole('link', { name: 'Installing Playwright', exact: true }).click();
    await page.locator('div').filter({ hasText: /^npm init playwright@latestyarn create playwrightpnpm create playwright$/ }).getByRole('button').click();
    await page.getByLabel('Search').click();
    await page.getByPlaceholder('Search docs').click({
      button: 'right'
    });
    await page.getByPlaceholder('Search docs').fill('npm init playwright@latest');
    await page.getByRole('link', { name: 'npm init playwright@latest -' }).click();
  });