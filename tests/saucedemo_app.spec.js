const { test, expect } = require('@playwright/test');
const { POManager } = require("../pageobjects/POManager");



test('SauceDemo App Automation', async ({ page }) => {
  const poManager = new POManager(page);
  const loginPage = poManager.getLoginPage();
  const productsPage = poManager.getProductsPage();
  const cartPage = poManager.getCartPage();


  await loginPage.gotoURL('https://www.saucedemo.com/');
  await loginPage.login('standard_user', 'secret_sauce');
  await productsPage.addToCart();
  await productsPage.clickCart();
  await cartPage.checkout();
  await cartPage.fillCheckoutDetails('John', 'Doe', '1234567');
  await cartPage.continueCheckout();
  await cartPage.finishCheckout();
});