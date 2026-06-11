const {test, expect} = require('@playwright/test');

test.describe.configure({ mode: 'parallel' });
test('Register Test',  async({page}) => {
    
    await page.goto('https://demowebshop.tricentis.com/register');    
    //await page.pause();   
    await page.locator('#gender-male').click();
    await page.locator('#FirstName').fill('John');
    await page.locator('#LastName').fill('Doe');
    await page.locator('#Email').fill('johndoe@example.com');






});