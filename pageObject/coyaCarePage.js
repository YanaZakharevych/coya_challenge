class InsurancePage {

    get firstAccordionItem() {
        return $('.accordion .accordion-item:nth-of-type(1)')
    }

    get openFirstAccorgion() {
        return $('.accordion .accordion-item:nth-of-type(1) .accordion-item-label > img')
    }

    get firstExpandedAccordion() {
        return $('body > article > main > div.section.faq-section > div > ul > li.accordion-item.expand')
    }


    get closeFirstaccordion() {
        return $('li.accordion-item:nth-child(1) > a:nth-child(4)')
    }
}

export default new InsurancePage();







