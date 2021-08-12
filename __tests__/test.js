jest.setTimeout(30000)
const timeout = 30000
const testData = require('../Helpers/testData');
const {LevelsleepHomePage, LevelsleepMattressPage, LevelsleepCheckoutPage, LevelsleepBillingPage} = require('../PageObjects');

describe(
  '/ (Home Page)',
  () => {
    let page
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
     await page.setViewport({ width: 1920, height: 1080})
     levelsleepHomePage = new LevelsleepHomePage(page)
     levelsleepMattressPage = new LevelsleepMattressPage(page)
     levelsleepCheckoutPage = new LevelsleepCheckoutPage(page)
     levelsleepBillingPage = new LevelsleepBillingPage(page)
    }, timeout)

    afterAll(async () => {
      await page.close()
    })

    it('should purchase mattress', async () => {
      await levelsleepHomePage.clickShopMattressBtn()
      await levelsleepMattressPage.clickAddToCardBtn()
      await levelsleepCheckoutPage.fillInContuctInfoForm()
      await levelsleepCheckoutPage.fillInShippingInfoForm()
      await levelsleepCheckoutPage.clickContinueBillingBtn()
      await levelsleepBillingPage.fillInPaymentForm()
      await levelsleepBillingPage.takeScreenshootOnPage()
      await levelsleepBillingPage.clickReviewPurchaseBtn()
    })
  },
  timeout
)
