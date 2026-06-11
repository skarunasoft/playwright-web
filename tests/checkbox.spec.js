const {test, expect} = require('@playwright/test');


test.describe.configure({ mode: 'parallel' });
test('Checkbox Test',  async({page}) => {
    await page.goto('https://demowebshop.tricentis.com/register');   
    //await page.pause();
   
    console.log(await page.locator('#gender-male').isChecked());
    console.log(await page.locator('#gender-female').isChecked());

    const maleRadio = await page.locator('#gender-male').isChecked();

    if(maleRadio==false){
        await page.locator('#gender-male').check();
    }
    console.log(await page.locator('#gender-male').isChecked());
    await expect(page.locator('#gender-male')).toBeChecked();
    await expect(page.locator('#gender-male').isChecked).toBeTruthy();


});