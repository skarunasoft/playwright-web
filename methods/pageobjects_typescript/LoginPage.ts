import { ActionsWrapper } from '../utils/ActionWrapper';
import { Page, Locator } from '@playwright/test';
export class LoginPage {
    
     page: Page;
     actionsWrapper: ActionsWrapper;
     username: Locator;
     password: Locator;
     loginButton: Locator;



    constructor(page: Page) {
        this.page = page;
        this.actionsWrapper = new ActionsWrapper(this.page);
        this.username = page.locator("#user-name");
        this.password = page.locator("#password");
        this.loginButton = page.locator("#login-button");
    }


    async url() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username: string, password: string) {
        await this.actionsWrapper.typeOnElement(this.username, username);
        await this.actionsWrapper.typeOnElement(this.password, password);
        await this.actionsWrapper.clickOnElement(this.loginButton);
    }

}