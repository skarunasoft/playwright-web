const {test, expect} = require('@playwright/test');


test('Alert Handling - Test', async ({page}) => {
await page.goto('http://www.uitestingplayground.com/home');

//await page.pause();

await page.getByRole('link', {name: 'Alerts'}).click();

page.on('dialog', async dialog => {
    console.log(dialog.message());
 //   await dialog.accept();    
    await dialog.dismiss();    
   // await dialog.accept('Playwright');   //for prompt alert
});
//await page.getByRole('button', {name: 'Alert'}).click();
await page.getByRole('button', {name: 'Confirm'}).click();
//await page.getByRole('button', {name: 'Prompt'}).click();









});