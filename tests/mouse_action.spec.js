const { test, expect } = require('@playwright/test');



test.describe.configure({ mode: 'parallel' });
test('Mouse action Test 1', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/hovers');
    await page.getByTestId('img-user-1').hover();
    await page.getByTestId('img-user-2').hover();
    await page.getByTestId('img-user-3').hover();
    


});


test('Mouse action Test 2', async ({ page }) => {
    await page.goto('https://www.geeksforgeeks.org/python/python-modules/');
    await page.locator("//*[text()='Courses']").first().hover();
    await page.locator("//*[text()='Courses']").first().highlight();
    await page.getByRole('link', { name: 'Development' }).first().click();
    await page.getByText('Course Catalog').highlight();
    expect(await page.getByText('Course Catalog').isVisible()).toBeTruthy();


});