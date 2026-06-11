const {test, expect} = require('@playwright/test');


test('Handle dropdown menu - Test',  async({page}) => {    
    
    const sortByDropdown =  page.locator('#products-orderby');
    const displayDropdownOptions  = page.locator('#products-pagesize');
    const productsViewmodeDropdown = page.locator('#products-viewmode');

   
    await page.goto('https://demowebshop.tricentis.com/gift-cards');     
    //await page.pause();
     await sortByDropdown.selectOption('Price: High to Low');
     await displayDropdownOptions.selectOption('12');
     await productsViewmodeDropdown.selectOption('List');
     await sortByDropdown.selectOption({index: 1});
   
    });

    
test('Handle dropdown menu - 2 - Test',  async({page}) => {         
   
    await page.goto('https://demowebshop.tricentis.com/gift-cards');     
    //await page.pause();

    await page.waitForSelector('#products-orderby');
     await page.waitForSelector('#products-orderby', {state:'visible'});

    await page.selectOption('#products-orderby', 'Price: High to Low');
    await page.selectOption('#products-orderby', {label: 'Created on'});
    await page.selectOption('#products-orderby', {index:0});

    await page.selectOption('#products-orderby', ['Name: A to Z','Name: Z to A']);


   
    });

    
test.only('Handle dropdown menu - 3 - Test',  async({page}) => {        
   
    await page.goto('https://www.saucedemo.com/');     
    //await page.pause();
  await page.locator('#user-name').fill('standard_user');    
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();     
    await page.waitForSelector("[data-test='product-sort-container']");
     await page.waitForSelector("[data-test='product-sort-container']", {state:'visible'});

    await page.selectOption("[data-test='product-sort-container']", {value:'hilo'});
    

   
    });