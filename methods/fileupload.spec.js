import { test, expect } from '@playwright/test';

test('File Upload - 1 Test', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/#examples');
   
    await page.getByRole('link', { name: 'File Upload' }).click();
    await page.getByTestId('file-input').click();
    await page.getByTestId('file-input').setInputFiles('D:\\PLAYWRIGHT-GUIDE\\files\\AITools.jpg');
    await page.getByTestId('file-submit').click();
    const text = await page.getByRole('heading', { name: 'File Uploaded!' }).textContent();
    console.log(text);
    await expect(text).toBe('File Uploaded!');
});


test('File Upload - 2 Test', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/#examples');   
    await page.getByRole('link', { name: 'File Upload' }).click();
    const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.getByTestId('file-input').click()
    ]);
    await fileChooser.setFiles("D:\\PLAYWRIGHT-GUIDE\\files\\AITools.jpg");
    await page.getByTestId('file-submit').click();

    const text = await page.getByRole('heading', { name: 'File Uploaded!' }).textContent();
    console.log(text);
    await expect(text).toBe('File Uploaded!');
});