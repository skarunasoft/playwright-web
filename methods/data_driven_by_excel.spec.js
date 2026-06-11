const { test, expect } = require('@playwright/test');
const ExcelJS = require('exceljs');

async function readExcelData() {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile("./utils/testdata.xlsx");
    const worksheet = workbook.getWorksheet("login-data");
    const data = [];
    worksheet.eachRow((row, rowNumber) => {
        if (rowNumber === 1) return;
        data.push({
            username: row.getCell(1).text,
            password: row.getCell(2).text
        });
    });
    return data;
}

test('Login Test Using Excel Data', async ({ page }) => {
    const users = await readExcelData();
    for (const user of users) {
        console.log(user.username);
        await page.goto('https://www.saucedemo.com/');
        await page.fill('#user-name', user.username);
        await page.fill('#password', user.password);
        await page.click('#login-button');
        console.log(
            `Login successful for ${user.username}`
        );
        await page.goto('https://www.saucedemo.com/');
    }
});

