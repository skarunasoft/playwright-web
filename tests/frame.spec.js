const {expect, test} = require('@playwright/test');
test.describe.configure({ mode: 'parallel' });
test('Frame Handling - Test', async ({ page }) => {  

await page.goto('http://www.uitestingplayground.com/frames');
//await page.pause();

//switching to parent frame
const parentFrame = await page.frameLocator('#frame-outer');
await parentFrame.getByRole('button', { name: 'Edit' }).click();
const result1 = await parentFrame.locator('#result').textContent();
console.log("parent output: "+result1);

//switching to child frame
const childFrame = await parentFrame.frameLocator('#frame-inner');
await childFrame.getByRole('button', { name: 'Edit' }).click();
const result2 = await childFrame.locator('#result').textContent();
console.log("child output: "+result2);

//switching back to parent frame from child frame
const backToParentFrame = parentFrame;
await backToParentFrame.getByRole('button', { name: 'Click me' }).click();


await page.getByText('Home').click();



                





});