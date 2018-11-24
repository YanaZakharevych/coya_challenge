class InsurancePage {

    get riskItemFire() {
        return $('.risks .risk-item:nth-of-type(1)')
    }


    get nextBtn() {
        return $('body > div.overlay.risk-overlay > div > div.risk-slider-wrapper > div > div:nth-child(1) > div.overlay-icon > div.overlay-btn.next-btn')
    }
}

export default new InsurancePage();




