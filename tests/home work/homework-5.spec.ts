import {test, expect} from '@playwright/test';

test.beforeEach

test('sign up', async({page})=>{
    await page.goto('https://demo.learnwebdriverio.com')
    await page.locator('//*[@data-qa-id="site-nav"]//*[@href="/register"]').click
    await expect(page.getByText('Username')).toBeVisible()
    await page.locator('//input[@placeholder="Username"]').click
    

})