const { test, expect } = require('@playwright/test');

test.describe.configure({ mode: 'parallel' });
test('Process Web elements - Test', async ({ page }) => {
   await page.goto('https://demowebshop.tricentis.com/register');
   const link = await page.$$('a');

   for (const linkText of link) {
      const text = await linkText.textContent();
      console.log(text);
   }

});

test('Process Web elements by XPath- Test', async ({ page }) => {

   await page.goto('https://demowebshop.tricentis.com/register');
   const link = await page.$$("//*[text()='Categories']/../..//li/a");

   for (const linkText of link) {
      const text = await linkText.textContent();
      console.log("Category Link:", text);
   }

});

test('Process Web elements by XPath- Test 2', async ({ page }) => {

   await page.goto('https://demowebshop.tricentis.com/register');
   const link = await page.locator("//*[text()='Categories']/../..//li/a").allTextContents();

   for (const linkText of link) {
      console.log("Category Link by allTextContents:", linkText);
   }

});

