const { test, expect } = require('@playwright/test');


const testData = {
    "username": "standard_user",
    "password": "secret_sauce",
    "url": "https://www.saucedemo.com/"
};




test('Data Driven Test - 1', async ({ page }) => {
    await page.goto(testData.url);
    await page.getByPlaceholder('Username').fill(testData.username);
    await page.getByPlaceholder('Password').fill(testData.password);
    await page.locator('[data-test="login-button"]').click();


});