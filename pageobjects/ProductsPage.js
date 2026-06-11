const { ActionMethods } = require('../wrapper/ActionMethods');
class ProductsPage {


    constructor(page) {
        this.page = page;
        this.actionMethods = new ActionMethods(this.page);
        this.backpack = page.locator('#add-to-cart-sauce-labs-backpack');
        this.bikeLight = page.locator('#add-to-cart-sauce-labs-bike-light');
        this.cartLink = page.locator('.shopping_cart_link');

    }

    async addToCart() {
        await this.actionMethods.clickElement(this.backpack);
        await this.actionMethods.clickElement(this.bikeLight);
    }

    async clickCart() {
        await this.actionMethods.clickElement(this.cartLink);
    }

}

module.exports = { ProductsPage };