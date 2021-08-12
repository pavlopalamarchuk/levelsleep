const selectors = require('../Helpers/Selectors');
const testData = require('../Helpers/testData');
const BasePage = require('../PageObjects/BasePage')

class LevelsleepBillingPage extends BasePage{
    constructor(page) {
        super(page)
        this.cardNumberInput = selectors.cardNumberInput
        this.cardNumberData = testData.cardNumber
        this.expirationDateInput = selectors.cardExpiryInput
        this.expirationDateData = testData.expirationDate
        this.cvcCodeInput = selectors.cvcCodeInput
        this.cvcCodeData = testData.cvc
        this.reviewPurchaseBtn = selectors.reviewPurchaseBtn
    }
    
    async fillInPaymentForm () {
        await this.waitForElement(this.cardNumberInput)
        await this.typeInField(this.cardNumberInput, this.cardNumberData)
        await this.waitForElement(this.expirationDateInput)
        await this.typeInField(this.expirationDateInput, this.expirationDate)
        await this.typeInField(this.cvcCodeInput, this.cvcCodeData)
    }

    async takeScreenshootOnPage () {
        await this.takeScreenshoot()
    }

    async clickReviewPurchaseBtn () {
        await this.clickBtn(this.reviewPurchaseBtn)
    }
}
module.exports = LevelsleepBillingPage;