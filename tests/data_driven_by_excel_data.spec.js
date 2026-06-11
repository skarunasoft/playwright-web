const { test, expect } = require('@playwright/test');
const ExcelJS = require('exceljs');


async function readExcelData() {

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile('./utils/testdata.xlsx');
    const worksheet = workbook.getWorksheet("login-data");

    const loginData = [];

    worksheet.eachRow((row, rowNumber) => {
        if (rowNumber == 1)
            return; //skip first row
        const username = row.getCell(1).text;
        const password = row.getCell(2).text;
        loginData.push({ username, password });    

    });
    return loginData;
}

 const excelData = await readExcelData();
    for (const loginData of excelData) {
test('Data Driven Test', async ({ page }) => {
   
        await page.goto('https://www.saucedemo.com/');
        // await page.pause();
        await page.locator('#user-name').fill(loginData.username);
        await page.locator('#password').fill(loginData.password);
        await page.locator('#login-button').click();
    
    });
}