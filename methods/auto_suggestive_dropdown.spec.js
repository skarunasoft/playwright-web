const { test, expect } = require('@playwright/test');




test('Mouse action Test', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/autocomplete');
    await page.locator('#country').pressSequentially('Ind');
    await page.locator.press('Enter');
   // await page.getByText('India').click();

    await page.locator('#country').clear();
    await page.locator('#country').pressSequentially('Ind', {delay: 100});
    await page.getByText('Indonesia').click();

   

    
});