class ActionsWrapper{


constructor(page){
    this.page = page;
}




async clickOnElement(locator){
await locator.click();
}


async typeOnElement(locator, text){
await locator.fill(text);
}







}

module.exports = {ActionsWrapper};
