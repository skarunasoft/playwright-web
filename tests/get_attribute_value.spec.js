const { test, expect } = require('@playwright/test');



test.describe.configure({ mode: 'parallel' });
test('Get attribute value', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/hovers');
    const imageAttValue = await page.getByTestId('img-user-1').getAttribute('src');
    console.log("imageAttValue::", imageAttValue);

});