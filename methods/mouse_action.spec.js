const { test, expect } = require('@playwright/test');




test('Mouse action Test', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/hovers');
    await page.getByTestId('img-user-1').hover();   
    await page.getByTestId('img-user-2').hover();
    await page.getByTestId('img-user-3').hover();

    await page.goto('https://www.geeksforgeeks.org/python/python-modules/');
    await page.locator("//*[text()='Courses']").first().hover();
       await page.locator("//*[text()='Courses']").first().highlight();
       await page.getByRole('link', { name: 'Development' }).first().click();
       await page.getByText('Course Catalog').highlight();
       expect(await page.getByText('Course Catalog').isVisible()).toBeTruthy();

    
});