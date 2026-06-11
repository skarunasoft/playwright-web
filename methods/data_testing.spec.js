const {test, expect} = require('@playwright/test');
const testData = JSON.parse(JSON.stringify(require('./utils/testdata.json')));

for(const data of testData)
{

test(`Data driven test ${data.username}`,  async({page}) => {
    await page.goto('https://www.saucedemo.com/');   
    await page.getByPlaceholder('Username').fill(data.username);    
    await page.getByPlaceholder('Password').fill(data.password);
    await page.locator('[data-test="login-button"]').click();

});
}
