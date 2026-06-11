const { ActionsWrapper } = require('../utils/ActionWrapper');
class LoginPage {


    constructor(page) {
        this.page = page;
        this.actionsWrapper = new ActionsWrapper(this.page);
        this.username = page.locator("#user-name");
        this.password = page.locator("#password");
        this.loginButton = page.locator("#login-button");
    }


    async url() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.actionsWrapper.typeOnElement(this.username, username);
        await this.actionsWrapper.typeOnElement(this.password, password);
        await this.actionsWrapper.clickOnElement(this.loginButton);
    }

}

module.exports = { LoginPage };