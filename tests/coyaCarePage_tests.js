import HomePage from "../pageObject/homePage";

describe('Coya Care page tests', function () {
    beforeEach(() => {
        browser.url('./coya-care');
        expect(HomePage.title).to.equal('Dein Coya Kundenservice: Wir sind für dich da')

    })

    xit('Verify accordion is not expand on page launch', () => {

    })

    xit('Verify possibility to expand accordion item', () => {

    })

    xit('Verify possibility to change contact menu items', () => {

    })


})


