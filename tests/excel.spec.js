const { test, expect } = require('@playwright/test');
const { getLoginData } = require('../utils/excelReader');
test.describe.configure({ mode: 'parallel' });
test('Login with Excel data', async ({ page }) => {

    const testData = await getLoginData('./testdata/loginData.xlsx', 'login-data');

    for (const user of testData) {

        await page.goto('https://www.saucedemo.com/');

        await page.fill('#user-name', user.username);
        await page.fill('#password', user.password);

        await page.click('#login-button');

        //await expect(page).toHaveURL(/inventory/);

        //await page.click('#react-burger-menu-btn');
        //await page.click('#logout_sidebar_link');
    }
});