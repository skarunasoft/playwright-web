import { Page } from "@playwright/test";
import {LoginPage} from "../pageobjects/LoginPage";
import {ProductsPage} from "../pageobjects/ProductsPage";
import {CartPage} from "../pageobjects/CartPage";

export class POManager{

    page: Page;
    loginPage: LoginPage;
    productsPage: ProductsPage;
    cartPage: CartPage;

    constructor(page: Page) {   
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.productsPage = new ProductsPage(this.page);    
        this.cartPage = new CartPage(this.page);
    }



    getLoginPage(){
        return this.loginPage;}

    getProductsPage(){
        return this.productsPage;}

    getCartPage(){  
        return this.cartPage;
    
    }  


}
