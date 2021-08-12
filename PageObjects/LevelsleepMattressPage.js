const { reviewPurchase } = require('../Helpers/Selectors');
const selectors = require('../Helpers/Selectors');
const BasePage = require('../PageObjects/BasePage')

class LevelsleepMattressPage extends BasePage{
    constructor(page) {
        super(page)
        this.addToCard = selectors.addToCard
    }
    
    async clickAddToCardBtn () {
        await this.waitForElement(this.addToCard)
        await this.clickBtn(this.addToCard)
    }
}
module.exports = LevelsleepMattressPage;