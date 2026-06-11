const ExcelJS = require('exceljs');

async function getLoginData(filePath, sheetName) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);

    const worksheet = workbook.getWorksheet(sheetName);

    const data = [];

    worksheet.eachRow((row, rowNumber) => {
        if (rowNumber === 1) return; // skip header

        const username = row.getCell(1).value;
        const password = row.getCell(2).value;

        data.push({ username, password });
    });

    return data;
}

module.exports = { getLoginData };