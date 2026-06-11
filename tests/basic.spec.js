const { test, expect } = require('@playwright/test');


test.describe.configure({ mode: 'parallel' });
//test.describe.configure({ mode: 'serial' });
test('My First Playwright Test', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.saucedemo.com/');
});



test('Second First Playwright Test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    // await page.pause();
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');


    const typedUsername = await page.locator('#user-name').inputValue();
    const typedPassword = await page.locator('#password').inputValue();

    await expect(typedUsername).toBe('standard_users');
    await expect(typedPassword).toBe('secret_sauce');


    await page.locator('#login-button').click();
    await expect(page).toHaveTitle('Swag Labs');
    await page.locator('#item_4_title_link > div').click();
    const price = await page.locator('.inventory_details_price').textContent();
    console.log(price);
    //await page.puase(); ==> to open the Inspector tool
    await expect(price).toContain('$29.99');

});
