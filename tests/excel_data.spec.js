const ExcelJS = require('exceljs');

async function readExcel() {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile('./utils/testdata.xlsx');

  const worksheet = workbook.getWorksheet('login-data');

  worksheet.eachRow((row, rowNumber) => {
    console.log(row.values);

      row.eachCell((cell, colNumber) => {
        console.log(`Row ${cell}`);
        //console.log(`Row ${rowNumber}, Column ${colNumber}: ${cell.value}`);
      } );


  });
}


async function readExcel1() {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile('./utils/testdata.xlsx');

  const worksheet = workbook.getWorksheet('login-data');

  worksheet.eachRow((row, rowNumber) => {
    console.log(row.values);

      row.eachCell((cell, colNumber) => {
        console.log(`test Row ${cell}`);
        //console.log(`Row ${rowNumber}, Column ${colNumber}: ${cell.value}`);
      } );


  });
}

readExcel1();