const { ActionMethods } = require('../wrapper/ActionMethods');



class CartPage {
    constructor(page) {
        this.page = page;
        this.actionMethods = new ActionMethods(this.page);
        this.checkoutButton = page.locator('#checkout');
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
        this.finishButton = page.locator('#finish');
        this.totalPrice = page.locator('.summary_total_label');
    }





    async checkout() {
        await this.actionMethods.clickElement(this.checkoutButton);
    }



    async fillCheckoutDetails(firstName, lastName, postalCode) {
        await this.actionMethods.typeElement(this.firstName, firstName);
        await this.actionMethods.typeElement(this.lastName, lastName);
        await this.actionMethods.typeElement(this.postalCode, postalCode);
    }

    async continueCheckout() {
        await this.actionMethods.clickElement(this.continueButton);
    }

    async finishCheckout() {
        await this.actionMethods.clickElement(this.finishButton);
    }

       async getTotalPriceValue() {
        return await this.actionMethods.getWebText(this.totalPrice);
    }




}


module.exports = { CartPage };