class ActionMethods {


    constructor(page) {
        this.page = page;
    }



    async clickElement(locator) {
        return await locator.click();
    }

    async typeElement(locator, value) {
        return await locator.fill(value);
    }

     async getWebText(locator) {
        return await locator.textContent();
    }

    

}
module.exports = { ActionMethods };
