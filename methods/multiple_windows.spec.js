const { test, expect } = require('@playwright/test');

test('Multiple Windows Handling - Test', async ({ browser }) => {
    const context = await browser.newContext();
    const parentPage = await context.newPage();
    //await parentPage.pause();
    await parentPage.goto('https://seanprashad.com/leetcode-patterns/');
    console.log("page size before::", context.pages().length);
    const [childPage] = await Promise.all([
        context.waitForEvent('page'),
        parentPage.getByText('Remove Duplicates from Sorted List').click()
    ])
    console.log("page size after::", context.pages().length);
    console.log(await childPage.title());
    await childPage.close();
    await parentPage.bringToFront();
    console.log(await parentPage.title());
    await parentPage.getByText('Merge Two Sorted Lists').click();
});