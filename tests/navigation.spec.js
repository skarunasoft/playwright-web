const {expect, test} = require('@playwright/test');
test.describe.configure({ mode: 'parallel' });
test('Page Navigation - Test', async ({ page }) => {  

await page.goto('http://www.uitestingplayground.com/home');
//await page.pause();
await page.reload();
//await page.close();
await page.getByRole('link', { name: 'Click' }).click();
await page.goBack();
await page.goForward();
const pageUrl = await page.url();
console.log("Current page url::", pageUrl);
});