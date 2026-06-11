import { Page, Locator } from "@playwright/test";
export class ActionMethods {

    page: Page;


    constructor(page: Page) {
        this.page = page;
    }



    async clickElement(locator: Locator) {
        return await locator.click();
    }

    async typeElement(locator: Locator, value: string) {
        return await locator.fill(value);
    }

    

}