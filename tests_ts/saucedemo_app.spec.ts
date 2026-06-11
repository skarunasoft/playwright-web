import { test, expect } from '@playwright/test';
import { POManager } from '../pageobjects/POManager';



test('SauceDemo App Automation', async ({ page }) => {

let url:string = 'https://www.saucedemo.com/';
let username:string = 'standard_user';
let password:string = 'secret_sauce';



  const poManager = new POManager(page);
  const loginPage = poManager.getLoginPage();
  const productsPage = poManager.getProductsPage();
  const cartPage = poManager.getCartPage();


  await loginPage.gotoURL(url);
  await loginPage.login(username, password);
  await productsPage.addToCart();
  await productsPage.clickCart();
  await cartPage.checkout();
  await cartPage.fillCheckoutDetails('John', 'Doe', '1234567');
  await cartPage.continueCheckout();
  await cartPage.finishCheckout();
});