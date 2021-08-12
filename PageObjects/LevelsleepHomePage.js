const selectors = require('../Helpers/Selectors');
const testData = require('../Helpers/testData');
const BasePage = require('../PageObjects/BasePage')

class LevelsleepHomePage extends BasePage{
    constructor(page) {
        super(page)
        this.url =  testData.levelsleepBaseUrl
        this.shopMattressBtn = selectors.shopMattressBtn
    }
    
    async clickShopMattressBtn () {
        await this.gotoUrl(this.url)
        await this.waitForElement(this.shopMattressBtn)
        await this.clickBtn(this.shopMattressBtn)
    }
}
module.exports = LevelsleepHomePage;