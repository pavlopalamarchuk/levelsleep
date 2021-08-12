const selectors = require('../Helpers/Selectors');
const testData = require('../Helpers/testData');
const BasePage = require('../PageObjects/BasePage')

class LevelsleepCheckoutPage extends BasePage{
    constructor(page) {
        super(page)
        this.emailInput = selectors.levelsleepEmailInput
        this.emailData = testData.email
        this.fullNameInput = selectors.fullNameInput
        this.fullNameData = testData.fullName
        this.addressInput = selectors.addressInput
        this.addressData = testData.address
        this.cityInput = selectors.cityInput
        this.cityData = testData.city
        this.stateDropDown = selectors.stateDropDown
        this.stateData = testData.state
        this.zipCodeInput = selectors.zipCodeInput
        this.zipCodeData = testData.zip
        this.phoneNumberInput = selectors.phoneNumberInput
        this.phoneNumberData = testData.phoneNumber
        this.continueToBillingBtn = selectors.continueToBillingBtn
        this.countryInput = selectors.countryInput
        this.countryData = testData.country
    }
    
    async fillInContuctInfoForm () {
        await this.waitForElement(this.emailInput)
        await this.typeInField(this.emailInput, this.emailData)
    }

    async fillInShippingInfoForm () {
        await this.typeInField(this.fullNameInput, this.fullNameData)
        await this.typeInField(this.addressInput, this.addressData)
        await this.typeInField(this.cityInput, this.cityData)
        await this.selectDropDownOption(this.stateDropDown, this.stateData)
        await this.typeInField(this.zipCodeInput, this.zipCodeData)
        await this.typeInField(this.phoneNumberInput, this.phoneNumberData)
    }

    async clickContinueBillingBtn () {
        await this.clickBtn(this.continueToBillingBtn)
    }
}
module.exports = LevelsleepCheckoutPage;