import { test, expect } from '@playwright/test';

test('test-1', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('link', { name: 'Next Writing tests »' }).click();
  await page.getByRole('link', { name: 'Next Generating tests »' }).click();
  await page.getByRole('link', { name: 'Previous « Writing tests' }).click();
});

test('test-2', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Community' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('article').getByRole('link', { name: 'Blog', exact: true }).click();
    const page1 = await page1Promise;
    await page1.getByLabel('Follow organization:').click();
    await page1.getByRole('heading', { name: 'Log in to continue' }).click();
  });

  test('test-3', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('button', { name: 'Node.js' }).click();
    await page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Python' }).click();
    await page.getByText('Learn', { exact: true }).click();
    await page.getByRole('link', { name: 'Learn Videos' }).click();
    await page.getByRole('link', { name: 'Release Videos' }).click();
    await page.getByText('ControlOrMeta+modifier').click();
    await page.locator('li').filter({ hasText: 'Playwright v1.45Clock API' }).getByLabel('Watch undefined').click();
    await page.frameLocator('iframe').getByLabel('Для активации кнопки "Пауза" нажмите k').click();
    await expect(page.getByRole('main')).toContainText('Playwright v1.45');
  });

  test('test-4', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Docs' }).click();
    await page.getByLabel('Search').click();
    await page.getByPlaceholder('Search docs').fill('gett');
    await expect(page.locator('#docsearch-item-0')).toContainText('Getting started - VS Code');
    await page.getByRole('option', { name: 'Getting started - VS Code' }).getByRole('link').click();
    await expect(page.locator('h1')).toContainText('Getting started - VS Code');
    await expect(page.locator('b')).toContainText('Playwright');
    await page.getByRole('link', { name: 'Playwright logo Playwright' }).click();
    await expect(page.getByRole('banner')).toContainText('Playwright enables reliable end-to-end testing for modern web apps.Get startedStar65k+');
  });

  test('test-5', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await page.locator('.tabs > li:nth-child(2)').first().click();
    await page.locator('div').filter({ hasText: /^npm init playwright@latestyarn create playwrightpnpm create playwright$/ }).getByRole('button').click();
    await page.locator('div:nth-child(13) > .codeBlockContent_biex > .buttonGroup__atx > .clean-btn').click();
    await page.getByRole('link', { name: 'Community' }).click();
    await expect(page.locator('h1')).toContainText('Welcome');
    await page.getByLabel('Direct link to GitHub').click();
  });