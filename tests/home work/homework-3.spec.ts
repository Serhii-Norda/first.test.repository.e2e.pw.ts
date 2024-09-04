import { test, expect } from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://coffee-cart.app/');
})

test('test-1', async ({ page }) => {
  await page.locator('[data-test="Espresso"]').click();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $10.00');
  await page.locator('[data-test="checkout"]').click();
  await expect(page.locator('h1')).toContainText('Payment details');
  await page.getByLabel('Name').click();
  await page.getByLabel('Name').fill('norda');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('norda@gmail.com');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#app')).toContainText('Thanks for your purchase. Please check your email for payment.');
});

test('test-2', async ({ page }) => {
    await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $0.00');
    await expect(page.locator('#app')).toContainText('Cappuccino $19.00');
    await page.locator('[data-test="Cappuccino"]').click();
    await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $19.00');
    await expect(page.locator('ul').filter({ hasText: 'Cappuccino x 1+-' })).toBeVisible();
    await page.getByLabel('Add one Cappuccino').click();
    await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $38.00');
    await expect(page.getByText('Cappuccino x 2+-')).toBeVisible();
  });

  test('test-3', async ({ page }) => {
    await expect(page.getByLabel('Cart page')).toBeVisible();
    await page.locator('[data-test="Americano"]').click();
    await expect(page.getByLabel('Cart page')).toBeVisible();
    await page.locator('li').filter({ hasText: 'cart (1)' }).click();
    await page.goto('https://coffee-cart.app/cart');  await page.locator('div').filter({ hasText: 'Americano x 1+-Total: $7.' }).nth(1).click();
    await expect(page.getByLabel('Remove all Americano')).toBeVisible();
    await page.getByLabel('Remove all Americano').click();
    await expect(page.getByRole('paragraph')).toContainText('No coffee, go add some.');
  });

  test('test-4', async ({ page }) => {
    await expect(page.locator('li').filter({ hasText: 'github' })).toBeVisible();
    await page.getByLabel('GitHub page').click();
    await expect(page.locator('#app div').filter({ hasText: 'Star our repository jecfish/' })).toBeVisible();
    await page.getByLabel('Menu page').click();
    await page.locator('[data-test="Cafe_Breve"]').click();
    await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $15.00');
    await page.locator('[data-test="checkout"]').click();
    await expect(page.getByRole('heading', { name: 'Payment details' })).toBeVisible();
    await page.getByLabel('Name').click();
    await page.getByLabel('Name').fill('132131231232131232213123123');
    await expect(page.getByLabel('Name')).toBeVisible();
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByText('Payment details×')).toBeVisible();
    await page.getByLabel('Email').click();
    await page.getByLabel('Email').fill('dfsdfsdds');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByRole('heading', { name: 'Payment details' })).toBeVisible();
    await page.getByLabel('Promotion checkbox').check();
    await page.getByLabel('Email').click();
    await page.getByLabel('Email').fill('dfsdfsdds@gmail.com');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.locator('#app')).toContainText('Thanks for your purchase. Please check your email for payment.');
  });

  test('test-5', async ({ page }) => {
    await page.locator('[data-test="Cafe_Breve"]').click();
    await page.getByLabel('Cart page').click();
    await page.locator('[data-test="checkout"]').click();
    await expect(page.getByRole('heading', { name: 'Payment details' })).toBeVisible();
    await page.getByRole('button', { name: '×' }).click();
    await expect(page.locator('div').filter({ hasText: 'Cafe Breve x 1+-Total: $15.' }).nth(1)).toBeVisible();
    await page.getByRole('button', { name: 'Add one Cafe Breve' }).click();
    await page.getByRole('button', { name: 'Add one Cafe Breve' }).click();
    await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $45.00');
    await page.getByLabel('Menu page').click();
    await page.locator('[data-test="Espresso_Macchiato"]').click();
    await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $57.00');
    await page.getByLabel('Cart page').click();
    await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $57.00');
  });