const { test, expect } = require('@playwright/test');

test.describe.configure({ mode: 'parallel' });
test('Alert Handling - Test', async ({ page }) => {
    await page.goto('http://www.uitestingplayground.com/');
    //await page.pause(); 

    await page.getByRole('link', { name: 'Alerts' }).click();
   

    page.on('dialog', async dialog => {
    console.log("Alert message::", dialog.message());
    //await dialog.accept();
    await dialog.dismiss();
   // await dialog.accept('catsssss');
});
   
//await page.getByRole('button', { name: 'Alert' }).click();
//await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'Prompt' }).click();``



});

