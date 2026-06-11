const {expect, test, playwright} = require('@playwright/test');
const { chromium } = require('playwright');

test('Browser Context - Test', async ({page}) => {  
//await page.pause();
await page.goto('http://www.uitestingplayground.com/home');

});