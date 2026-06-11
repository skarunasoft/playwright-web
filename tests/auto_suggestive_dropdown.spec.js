const { test, expect } = require('@playwright/test');

test.describe.configure({ mode: 'parallel' });
test('Auto suggestive drop down', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/autocomplete');

    //await page.locator("#country").pressSequentially("Ind");
    await page.locator("#country").pressSequentially("Ind", {delay: 200});
    await page.getByText("India").click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.locator("#country").clear();
    await page.locator("#country").pressSequentially("Uni", {delay: 200});
    await page.getByText("United Kingdom").click();
    await page.getByRole('button', { name: 'Submit' }).click();

});