import HomePage from "../pageObject/homePage";

describe('Home page tests', function () {
    beforeEach(() => {
        browser.url('./');
        expect(HomePage.title).to.equal('Coya: Vergiss Papierkram – werde Teil einer neuen Versicherung!')
        HomePage.coockieConsent.click();

    })

    afterEach(() => {
        browser.reload();
    })

    it('Verify possibility to change page language', () => {
        HomePage.enLang.click();

        expect(HomePage.title).to.equal('Don’t be stuck with old habits: Join the future of insurance')

    })

    it('Verify possibility to go to Coya Care page', () => {
        HomePage.coyaCareLink.click();

        expect(HomePage.title).to.equal('Dein Coya Kundenservice: Wir sind für dich da')

    })

    it('Verify possibility to go to Home Contents Insurance page', () => {
        HomePage.insuranceLink.click();

        expect(HomePage.title).to.equal('Coya Hausratversicherung: Dein Hausrat einfach und sicher versichert')

    })

    it('Subscribe for newsletter', () => {
        HomePage.newsletterFld.setValue('123Test@example.org');
        HomePage.subcribeNewsletter.click();


    })
})


