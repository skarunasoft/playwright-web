const { test, expect } = require('@playwright/test');
const { getLoginData } = require('../utils/excelReader');

let testData = [];

test.beforeAll(async () => {
    testData = await getLoginData('./utils/testdata.xlsx', 'login-data');
});

testData.forEach((user, index) => {
    test(`Login Test ${index + 1} - ${user.username}`, async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await page.fill('#user-name', user.username);
        await page.fill('#password', user.password);

        await page.click('#login-button');

        await expect(page).toHaveURL(/inventory/);
    });
});