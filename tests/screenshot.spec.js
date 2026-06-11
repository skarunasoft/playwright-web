const { test, expect } = require('@playwright/test');


//full page screenshot
//element screenshot
//page screenshot
//support image visual testing 
test.describe.configure({ mode: 'parallel' });
test('Taking Screenshots', async ({ page }) => {

    const username = page.getByPlaceholder('Username');
    const password = page.getByPlaceholder('Password');
    const loginButton = page.locator('[data-test="login-button"]');

    await page.goto('https://www.saucedemo.com/');
    await page.screenshot({ path: 'saucedemo-landing-page.png' });

    await username.fill('standard_user');
    await username.screenshot({ path: 'username.png' });
    await password.fill('secret_sauce');
    await password.screenshot({ path: 'password.png' });
    await loginButton.click();
    await page.screenshot({ path: 'Products-page.png' });
    await page.screenshot({ path: 'Products-full-page.png', fullPage: true });

});



test('Visual testing', async ({ page }) => {
    const username = page.getByPlaceholder('Username');
    const password = page.getByPlaceholder('Password');
    const loginButton = page.locator('[data-test="login-button"]');

    await page.goto('https://www.saucedemo.com/');

    await username.fill('standard_user');
    await password.fill('secret_sauce');
    await loginButton.click();

    expect(await page.screenshot()).toMatchSnapshot('Products-full-page.png');


});