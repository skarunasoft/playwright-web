const { test, expect, chromium } = require('@playwright/test');

test.describe.configure({ mode: 'parallel' });
//download file to default path
test('File Download Test', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext({
        acceptDownloads: true,
        downloadsPath: './downloads'
    });

    const page = await context.newPage();
    await page.goto('https://practice.expandtesting.com/download');
    await page.getByRole('link', { name: '1777097134891_DNDAgentFile.txt' }).click();    
    await page.getByRole('link', { name: '1777097320486_test.txt' }).click();


});



//download file to specific path
test('download file', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/download');

  const [download] = await Promise.all([
    page.waitForEvent('download'),
     page.getByRole('link', { name: '1777097153123_DNDAgentFile.txt' }).click()
  ]);

  // Save to a specific path
  await download.saveAs("D:\\PLAYWRIGHT-GUIDE\\download-file\\1777097153123_DNDAgentFile.txt");

  expect(await download.failure()).toBeNull();
});