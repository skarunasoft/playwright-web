const ExcelJS = require('exceljs');


async function dataReader(){


    const workbook = new ExcelJS.Workbook();
   await workbook.xlsx.readFile('./utils/testdata.xlsx');

    const sheet = workbook.getWorksheet('login-data');

    sheet.eachRow((row, rowNumber) =>{

     console.log(row.values);
            

     row.eachCell((cell, colNumber) => {
        console.log(cell.value);
     });


    })



}


dataReader();