const {expect, test, playwright} = require('@playwright/test');
const {chromium} = require('playwright');



test.describe.configure({ mode: 'parallel' });
test('Browser Context - Test', async () => { 
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();   
     await page.goto('http://www.uitestingplayground.com/home');


});