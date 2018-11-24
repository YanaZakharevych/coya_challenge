import HomePage from "../pageObject/homePage";
import InsurancePage from "../pageObject/insurancePage";

describe('Insurance page tests', function () {
    beforeEach(() => {
        browser.url('./hausratversicherung');
        expect(HomePage.title).to.equal('Coya Hausratversicherung: Dein Hausrat einfach und sicher versichert')
        HomePage.coockieConsent.click();
    })

    afterEach(() => {
        browser.reload();
    })

    it('Verify possibility to review What is coverd options', () => {
        InsurancePage.riskItemFire.click();

        expect(InsurancePage.fireContent.isVisible()).to.be.true;

        InsurancePage.nextBtn.click();

        expect(InsurancePage.sturmContent.isVisible()).to.be.true;


    })

    it('Verify possibility to close What is coverd options', () => {
        InsurancePage.riskItemFire.click();
        InsurancePage.closeBtn.click();
        browser.pause(500);

        expect(InsurancePage.fireContent.isVisible()).to.be.false;


    })

})


