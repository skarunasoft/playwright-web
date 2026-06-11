const  { test, expect} = require('@playwright/test');

test('Screenshot',  async({page}) => {

const username = page.getByPlaceholder('Username');

    await page.goto('https://www.saucedemo.com/');   
    await username.fill('standard_user');   
    await username.screenshot({path: 'username.png'});
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.screenshot({path: 'full_page.png', fullPage: true});
    await page.screenshot({path: 'login_page.png'});

     expect(await page.screenshot()).toMatchSnapshot('landing-page.png');




});