import { Page, Locator } from "@playwright/test";
import { ActionMethods } from '../wrapper/ActionMethods';

export class CartPage {


    private page: Page;
    private actionMethods: ActionMethods;
    private checkoutButton: Locator;
    private firstName: Locator;
    private lastName: Locator;
    private postalCode: Locator;
    private continueButton: Locator;
    private finishButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.actionMethods = new ActionMethods(this.page);
        this.checkoutButton = page.locator('#checkout');
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
        this.finishButton = page.locator('#finish');
    }


    async checkout() {
        await this.actionMethods.clickElement(this.checkoutButton);
    }



    async fillCheckoutDetails(firstName: string, lastName: string, postalCode: string) {
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



}