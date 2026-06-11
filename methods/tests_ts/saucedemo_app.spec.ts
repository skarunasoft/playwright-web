import {test, expect} from '@playwright/test';
import {POManager} from '../pageobjects/POManager';



test('SauceDemo App Automation', async ({ page }) => {
    const poManager = new POManager(page);  
    await poManager.getLoginPage().url();
    await poManager.getLoginPage().login('standard_user', 'secret_sauce');
      await poManager.getProductsPage().addToCart();
      await poManager.getProductsPage().clickCart();
    
      await poManager.getCartPage().checkout();
      await poManager.getCartPage().fillCheckoutDetails('John', 'Doe', '1234567');
      await poManager.getCartPage().continueCheckout();
      await poManager.getCartPage().finishCheckout();
});