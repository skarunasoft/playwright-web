import { Locator, Page } from "@playwright/test";

export class CartPage {

 checkoutButton:Locator;
 firstName:Locator;
 lastName:Locator;
 postalCode:Locator;
 continueButton:Locator;
 finishButton:Locator;


    constructor(page: Page) {
        this.checkoutButton = page.locator('#checkout');
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
        this.finishButton = page.locator('#finish');
    }


    async checkout() {
        await this.checkoutButton.click();
    }

    async fillCheckoutDetails(firstName:string, lastName:string, postalCode:string) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
    }

    async continueCheckout() {
        await this.continueButton.click();
    }

    async finishCheckout() {
        await this.finishButton.click();
    }



}


module.exports = { CartPage };