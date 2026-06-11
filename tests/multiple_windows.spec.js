const { expect, test } = require('@playwright/test');

test.describe.configure({ mode: 'parallel' });
test('Multiple Windows Handling - Test', async ({ browser }) => {


    const context = await browser.newContext(); //browser
    const baseWindow = await context.newPage(); //tab
    await baseWindow.goto('https://seanprashad.com/leetcode-patterns/');
    //await baseWindow.pause();

    console.log("windows size before::", context.pages().length);
   

    const [childWindow] = await Promise.all([
        context.waitForEvent('page'),
        baseWindow.getByText('Remove Duplicates from Sorted List').click()
    ]);

    console.log("windows size after::", context.pages().length);
    console.log("Child window title::", await childWindow.title());
    await childWindow.getByText('Register').click();

    //await childWindow.close();   //closing child window
    await baseWindow.bringToFront();


    console.log("Base window title::", await baseWindow.title());
    await baseWindow.getByText('Same Tree').click();


});