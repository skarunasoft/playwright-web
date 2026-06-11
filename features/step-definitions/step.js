const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');



Given('Login as a customer to saucedemo.com {string}, {string}', async function (username, password) {
    await this.loginPage.login(username, password);
});

When('I add a backpack to the cart', async function () {

    await this.productsPage.addToCart();
    await this.productsPage.clickCart();

});

When('I proceed to checkout with fill Checkout Details {string}, {string}, {string}', async function (name, postalCode, address) {
    await this.cartPage.checkout();
    await this.cartPage.fillCheckoutDetails(name, postalCode, address);


});

Then('I should be able to place an order for the backpack and finish the checkout process', async function () {
    await this.cartPage.continueCheckout();
    const totalPrice = await this.cartPage.getTotalPriceValue();
    console.log("Totatl price::" + totalPrice + "|");
    this.attach("Total Price:" + totalPrice, 'text/plain');
    await expect(totalPrice).toContain("Total: $43.18");
    



    const screenshot = await this.page.screenshot({ path: 'totalprice.png', fullPage: true });
    await this.attach(screenshot, 'image/png');


    await this.cartPage.finishCheckout();


}
);
