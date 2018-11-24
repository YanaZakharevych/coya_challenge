import HomePage from "../pageObject/homePage";
import InsurancePage from "../pageObject/insurancePage";

describe('Insurance page tests', function () {
    beforeEach(() => {
        browser.url('./hausratversicherung');
        expect(HomePage.title).to.equal('Coya Hausratversicherung: Dein Hausrat einfach und sicher versichert')
        HomePage.coockieConsent.click();


    })

    it('Verify possibility to review What is coverd options', () => {
        browser.pause();
        browser.scroll();
        InsurancePage.riskItemFire.click();
        InsurancePage.nextBtn.click();
        browser.debug();
    })


})


