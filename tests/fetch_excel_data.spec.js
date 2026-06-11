const ExcelJS = require('exceljs');
const { test, expect } = require('@playwright/test');



async function readExcelData(excelFilePath, sheetName) {
     const workbook = new ExcelJS.Workbook();
     await workbook.xlsx.readFile(excelFilePath);
     const worksheet = workbook.getWorksheet(sheetName);

     worksheet.eachRow((row, rowNumber) => {
          console.log(`Row ${rowNumber}:`);
          row.eachCell((cell, colNumber) => {
               console.log(`Row ${rowNumber} Column ${colNumber}: ${cell.value}`);
          });
     }
     );
}




async function getExcelData(excelFilePath, sheetName) {
     const workbook = new ExcelJS.Workbook();
     await workbook.xlsx.readFile(excelFilePath);
     const worksheet = workbook.getWorksheet(sheetName);

     const data = [];

     worksheet.eachRow((row, rowNumber) => {
          if (rowNumber === 1) return;
          data.push({
               username: row.getCell(1).value,
               password: row.getCell(2).value
          });
     }
     );

     return data;
}

//eadExcelData('./utils/testdata.xlsx', 'login-data');


/* const testData = await getExcelData('./utils/testdata.xlsx', 'login-data');
for (const { username, password } of testData) {
     console.log(username, password);
     test('Smart Locators Test', async ({ page }) => {
          await page.goto('https://www.saucedemo.com/');
          await page.getByPlaceholder('Username').fill(username);
          await page.getByPlaceholder('Password').fill(password);
          await page.locator('[data-test="login-button"]').click();


     }); */
//}


