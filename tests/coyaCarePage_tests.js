import HomePage from "../pageObject/homePage";
import CoyaCarePage from "../pageObject/coyaCarePage";

describe('Coya Care page tests', function () {
    beforeEach(() => {
        browser.url('./coya-care');
        expect(HomePage.title).to.equal('Dein Coya Kundenservice: Wir sind für dich da')
        HomePage.coockieConsent.click();
    })

    afterEach(() => {
        browser.reload();
    })

    it('Verify possibility to expand accordion item', () => {
        CoyaCarePage.firstAccordionItem.waitForVisible();
        CoyaCarePage.openFirstAccorgion.click();

        expect(CoyaCarePage.firstExpandedAccordion.isVisible()).to.be.true;
    })

    it('Verify possibility to close accordion item', () => {
        CoyaCarePage.firstAccordionItem.waitForVisible();
        CoyaCarePage.openFirstAccorgion.click();
        browser.pause(500);
        CoyaCarePage.closeFirstaccordion.click();

        expect(CoyaCarePage.firstExpandedAccordion.isVisible()).to.be.false;
    })


})


