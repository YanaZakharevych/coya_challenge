class InsurancePage {

    get riskItemFire() {
        return $('.risks .risk-item:nth-of-type(1)')
    }

    get fireContent() {
        return $('div.overlay-content:nth-child(1)')
    }

    get sturmContent() {
        return $('.slider > div:nth-child(2)')
    }

    get nextBtn() {
        return $('body > div.overlay.risk-overlay > div > div.risk-slider-wrapper > div > div:nth-child(1) > div.overlay-icon > div.overlay-btn.next-btn')
    }

    get closeBtn() {
        return $('div.overlay-close:nth-child(2)')
    }
}

export default new InsurancePage();




