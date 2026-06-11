const { test, expect } = require('@playwright/test');

test.describe.configure({ mode: 'parallel' });
test('Mouse action Test 2', async ({ page }) => {


    //locator wait
   //await page.locator('').waitFor();
   //await page.locator('').waitFor({visible:true});

    //page wait

   // await page.waitForLoadState('load');

   await page.waitForTimeout(3000); //-- fixed wait

   //await page.waitForSelector('#loginBtn');
   //await page.waitForSelector('#loginBtn', { state: 'visible' });

   const loc = await page.waitForSeleoctor('#loginBtn').isVisible();

   expect(loc).toBeTruthy();

  if(loc==true){
    await page.locator('#loginBtn').hover();
  }

   await page.waitForSelector('#loginBtn', { state: 'visible' });




    await page.goto('https://www.geeksforgeeks.org/python/python-modules/');
    await page.waitForLoadState('load');
    await page.locator("//*[text()='Courses']").first().hover();
    await page.locator("//*[text()='Courses']").first().highlight();
    await page.getByRole('link', { name: 'Development' }).first().click();
    await page.getByText('Course Catalog').highlight();
    expect(await page.getByText('Course Catalog').isVisible()).toBeTruthy();


});