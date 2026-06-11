const {test, expect} = require('@playwright/test');

test.describe.configure({ mode: 'parallel' });
test('Practice Test',  async({page}) => {
    await page.goto('https://automationexercise.com/login');
    //await page.pause();    
    await page.getByRole('link', {name: 'Products'}).click();
    await page.getByRole('textbox', {name: 'Search Product'}).fill('Blue Top');
    await page.getByPlaceholder('Name').fill('test');       
    await page.locator("[data-qa='signup-email']").fill('skarunasoft@gmail.com');
    await page.getByRole('button', { name: 'Signup' }).click();
    await page.getByRole('radio', {name: 'Mr.'}).click();

});
