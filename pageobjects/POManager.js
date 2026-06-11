const {LoginPage} = require("../pageobjects/LoginPage");
const {ProductsPage} = require("../pageobjects/ProductsPage");
const {CartPage} = require("../pageobjects/CartPage");

class POManager{

    constructor(page) {
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

module.exports = {POManager};