import { Locator, Page } from '@playwright/test';
import { ActionMethods } from '../wrapper/ActionMethods';



export class LoginPage {

    private page: Page;
    private actionMethods: ActionMethods;
    private username: Locator;
    private password: Locator;
    private loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.actionMethods = new ActionMethods(this.page);
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }





    async gotoURL(url: string) {
        await this.page.goto(url);
    }


    async login(username: string, password: string) {
        await this.actionMethods.typeElement(this.username, username);
        await this.actionMethods.typeElement(this.password, password);
        await this.actionMethods.clickElement(this.loginButton);
    }
}
