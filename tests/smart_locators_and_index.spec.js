const {test, expect} = require('@playwright/test');

test.describe.configure({ mode: 'parallel' });
test('Smart Locators Test',  async({page}) => {
    await page.goto('https://www.saucedemo.com/');   
    await page.getByPlaceholder('Username').fill('standard_user');    
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
});

test('Locators with Index',  async({page}) => {
    await page.goto('https://www.saucedemo.com/');   
    await page.locator('input').first().fill('standard_user');
    await page.locator('input').nth(1).fill('secret_sauce');
    await page.locator('input').last().click();
});

test('Get By Label',  async({page}) => {
    await page.goto('https://demowebshop.tricentis.com/register');   
    await page.getByLabel('First name:').fill('John');
    await page.getByLabel('Last name:').fill('Doe');
    await page.getByLabel('Email:').fill('johndoe@example.com');
    await page.locator('#gender-male').click();
    await page.getByLabel('Female').click();
});


test('Get By Title',  async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');  
    await page.getByTitle('Click to save your changes').click();
});

test('Get By Alt Text',  async({page}) => {
   await page.goto('https://demowebshop.tricentis.com/register');  
    await page.getByAltText('Tricentis Demo Web Shop').click();
    await expect(page.getByAltText('Tricentis Demo Web Shop')).toBeVisible();
});

test('Get By Text',  async({page}) => {
   await page.goto('https://demowebshop.tricentis.com/register');     
    await expect(page.getByText('Your Personal Details')).toBeVisible();
     await page.getByText('Contact us').click();
});