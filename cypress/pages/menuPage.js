class menuPage {
    selectors = {
    myInfo: "[href='/web/index.php/pim/viewMyDetails']"
    
    }
    menuPage() {
        cy.get(this.selectors.myInfo).click()

    }



}
export default menuPage