const { test, expect } = require('@playwright/test');
test.describe.configure({ mode: 'parallel' });
test('Get CSS property value', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/hovers');

    const bgColor = await page.getByRole("link", { name: "Buy us a coffee" }).evaluate(el => getComputedStyle(el).backgroundColor);
    console.log("bgColor::", bgColor);
    const color = await page.getByRole("link", { name: "Buy us a coffee" }).evaluate(el => getComputedStyle(el).color);
    console.log("color::", color);


});
