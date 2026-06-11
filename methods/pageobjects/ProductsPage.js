class ProductsPage{


    constructor(page){
        this.page = page;
        this.backpack = page.locator('#add-to-cart-sauce-labs-backpack');
        this.bikeLight = page.locator('#add-to-cart-sauce-labs-bike-light');
        this.cartLink = page.locator('.shopping_cart_link');

    }

    async addToCart(){
        await this.backpack.click();
        await this.bikeLight.click();
    }

    async clickCart(){
        await this.cartLink.click();        
    }



    

}


module.exports = {ProductsPage};