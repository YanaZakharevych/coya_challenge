class HomePage {
    get coockieConsent() {
        return $('#consest-popup .cta-button.bg-blue')
    }

    get title() {
        return browser.getTitle()
    }

    get enLang() {
        return $('.lang-switcher > .nav-item > a')
    }

    get insuranceLink() {
        return $('.menu > .nav-item:nth-of-type(1)');
    }

    get coyaCareLink() {
        return $('.menu > .nav-item:nth-of-type(3)');
    }

    get newsletterFld() {
        return $('#mce-EMAIL')
    }

    get subcribeNewsletter() {
        return $('#mc-embedded-subscribe')
    }
}

export default new HomePage();
