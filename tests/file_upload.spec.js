const { test, expect } = require('@playwright/test');

test.describe.configure({ mode: 'parallel' });
test('File Upload Test', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/upload');

    const [fileUpload] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('#fileInput').click()
    ]);

    await fileUpload.setFiles("D:\\PLAYWRIGHT-GUIDE\\files\\AITools.jpg");
    await page.getByRole('button', { name: 'Upload' }).click();
    const fileUploadedVerification = await page.locator("//h1[text()='File Uploaded!']");
    expect(fileUploadedVerification).toBeVisible();
    const fileUploadedVerificationText = await page.locator("//h1[text()='File Uploaded!']").textContent();

    console.log("text::", fileUploadedVerificationText);

    expect(fileUploadedVerificationText).toBe("File Uploaded!");

});


test('File Upload 2 Test', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/upload');
    await page.locator('#fileInput').click();
    await page.locator('#fileInput').setInputFiles("D:\\PLAYWRIGHT-GUIDE\\files\\AITools4.jpg");
    await page.getByRole('button', { name: 'Upload' }).click();
    const fileUploadedVerification = await page.locator("//h1[text()='File Uploaded!']");
    expect(fileUploadedVerification).toBeVisible();
    const fileUploadedVerificationText = await page.locator("//h1[text()='File Uploaded!']").textContent();

    console.log("text::", fileUploadedVerificationText);

    expect(fileUploadedVerificationText).toBe("File Uploaded!");

    const uploadedFilesText = await page.locator('#uploaded-files').textContent();
    console.log("file message::", uploadedFilesText);


});