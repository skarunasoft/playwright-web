import { Locator, Page } from '@playwright/test';
import { ActionsWrapper } from '../utils/ActionWrapper';

export class ProductsPage{    

    page: Page;
    actionsWrapper: ActionsWrapper;
    backpack: Locator;
    bikeLight: Locator
    cartLink: Locator;


    constructor(page: Page){
        this.page = page;
        this.actionsWrapper = new ActionsWrapper(this.page);
        this.backpack = page.locator('#add-to-cart-sauce-labs-backpack');
        this.bikeLight = page.locator('#add-to-cart-sauce-labs-bike-light');
        this.cartLink = page.locator('.shopping_cart_link');

    }

    async addToCart(){
        await this.actionsWrapper.clickOnElement(this.backpack);
        await this.actionsWrapper.clickOnElement(this.bikeLight);
    }

    async clickCart(){
        await this.actionsWrapper.clickOnElement(this.cartLink);        
    }



    

}

