const { ActionMethods } = require('../wrapper/ActionMethods');



class LoginPage {


    constructor(page) {
        this.page = page;
        this.actionMethods = new ActionMethods(this.page);
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }





    async gotoURL(url) {
        await this.page.goto(url);
    }


    async login(username, password) {
        await this.actionMethods.typeElement(this.username, username);
        await this.actionMethods.typeElement(this.password, password);
        await this.actionMethods.clickElement(this.loginButton);
    }
}

module.exports = { LoginPage };