const {test, expect} = require('@playwright/test');

test.describe.configure({ mode: 'parallel' });
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
    await page.selectOption('#products-orderby', 'Price: High to Low');
    await page.selectOption('#products-orderby', {label: 'Created on'});
    await page.selectOption('#products-orderby', {index:0});
    });    



test('Handle dropdown menu - 3 - Test',  async({page}) => {    
    await page.goto('https://www.saucedemo.com/inventory.html');     
   // await page.pause();
     await page.locator('#user-name').fill('standard_user');    
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();  

    await page.waitForSelector('.product_sort_container');
    await page.waitForSelector('.product_sort_container', {state: 'visible'});
    await page.selectOption('.product_sort_container', {value: 'lohi'});
    await page.selectOption('.product_sort_container', {index: 3});
    await page.selectOption('.product_sort_container', ['Name (A to Z)','Name (Z to A)']);

   
    }); 

