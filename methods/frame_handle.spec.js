const {test, expect} = require('@playwright/test');

test('Frame Handling - Test',  async({page}) => {    
   await page.goto('http://www.uitestingplayground.com/frames');     
   //await page.pause();
   const frameFirst = page.frameLocator('#frame-outer');
// Wait for element inside frame explicitly
await frameFirst.locator("[name='my-button']").first().waitFor({ state: 'visible' });
await frameFirst.locator("[name='my-button']").first().click();

const frameSecond = frameFirst.frameLocator('#frame-inner');
await frameSecond.locator("[name='my-button']").first().waitFor({ state: 'visible' });
await frameSecond.locator("[name='my-button']").first().click();

const backFirstFrame =  frameFirst;
await backFirstFrame.locator("[data-action='edit']").first().waitFor({ state: 'visible' });
await backFirstFrame.locator("[data-action='edit']").first().click();   
    });
