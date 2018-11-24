import HomePage from "../pageObject/homePage";

describe('Insurance page tests', function () {
    beforeEach(() => {
        browser.url('./hausratversicherung');
        expect(HomePage.title).to.equal('Coya Hausratversicherung: Dein Hausrat einfach und sicher versichert')

    })

    xit('Verify possibility to review What is coverd options', () => {

    })


})


