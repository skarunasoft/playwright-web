const { Before, After, BeforeStep, AfterStep, Status } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const allure = require('allure-js-commons');
const { POManager } = require('../pageobjects/POManager');



Before({ timeout: 60000 },async function () {
    console.log('Before Scenario Hook: Starting a new step');
    const url = "https://www.saucedemo.com/";

    this.browser = await chromium.launch({ headless: false });
    const context = await this.browser.newContext();

    this.page = await context.newPage();

    this.poManager = new POManager(this.page);
    this.loginPage = this.poManager.getLoginPage();
    this.productsPage = this.poManager.getProductsPage();
    this.cartPage = this.poManager.getCartPage();

    await this.loginPage.gotoURL(url);
});

BeforeStep(async function ({ result }) {
    console.log('Before Step Hook: Starting a new step');
    await this.attach('Before Step Hook: Starting a new step', 'text/plain');
});

AfterStep(async function ({ result }) {
    console.log('After Step Hook: After a step');
    if (result.status === Status.PASSED) {
        await this.attach('After Step Hook: Step passed', 'text/plain');
        const screenshot = await this.page.screenshot();
        await this.attach(screenshot, 'image/png');
    }
});

After({ timeout: 60000 }, async function ({ result }) {
    console.log('After Scenario Hook: Cleaning up after scenario');
    try {
        if (result?.status === Status.FAILED) {
            const screenshot = await this.page.screenshot();
            await this.attach(screenshot, 'image/png');

            allure.attachment(
            'Failed Screenshot',
            screenshot,
            'image/png'
        );

            if (result.message) {
                await this.attach(result.message, 'text/plain');
            }

            if (result.stacktrace) {
                await this.attach(result.stacktrace, 'text/plain');
            }
        }
    } catch (error) {
        console.error('After hook error:', error);
    } finally {
        if (this.page) {
            await this.page.close().catch(() => { });
        }

        if (this.browser) {
            await this.browser.close().catch(() => { });
        }
    }

});