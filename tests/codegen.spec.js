import { test, expect } from '@playwright/test';
test.describe.configure({ mode: 'parallel' });
test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="item-4-img-link"]')).toBeVisible();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();

  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="continue-shopping"]')).toBeVisible();

  await page.locator('[data-test="checkout"]').click();
  await expect(page.locator('[data-test="cancel"]')).toBeVisible();

  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('test');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('test2');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('100980');
  await page.locator('[data-test="continue"]').click();
  await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-0-title-link"]')).toBeVisible();
  await page.locator('[data-test="title"]').click();
  await page.locator('[data-test="title"]').click();
  await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Overview');
  await page.getByText('$29.99').click();
  await expect(page.locator('[data-test="cart-list"]')).toContainText('$29.99');
  await expect(page.locator('[data-test="shopping-cart-link"]')).toMatchAriaSnapshot(`- text: "2"`);
});