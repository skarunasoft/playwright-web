const {test, expect} = require('@playwright/test');


test('Smart Locators Test',  async({page}) => {
    await page.goto('https://www.saucedemo.com/');   
    await page.getByPlaceholder('Username').fill('standard_user');    
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

});


test.only('Smart Locators Test2',  async({page}) => {   

    await page.goto('https://demowebshop.tricentis.com/register');
    //await page.pause();
    await page.getByLabel('Female').click();
    console.log(await page.getByLabel('Female').isChecked());
    await expect(page.getByLabel('Female')).toBeChecked();
    await page.getByRole('textbox', {name: 'First name:'}).fill('John');
    await page.getByLabel('Last name:').fill('Doe');

   
});