class MyinfoPage {
    selectors = {
        myInfo: "[href='/web/index.php/pim/viewMyDetails']",
        firstNameField: ".orangehrm-firstname",
        lastNameField: ".orangehrm-lastname",
        genericField: ".oxd-input",
        dateGenericField: "[placeholder='yyyy-dd-mm']",
        dateCloseButton: ".--close",
        middleNameField: ".orangehrm-middlename",
        submitButton: "[type='submit']",
        closeButton: ".oxd-toast-close",
        selectButtonGeneric: "[clear='false']",
        nacionalityButton: ":nth-child(4) > span",
        maritalStatusButton: ".oxd-select-dropdown > :nth-child(3)",
        genderButton: ".oxd-radio-wrapper"

    }

      changeUserInfo() {
        cy.get(this.selectors.firstNameField).should('exist').clear().type('firstname')
        cy.get(this.selectors.middleNameField).clear().type('middlename') 
        cy.get(this.selectors.lastNameField).clear().type('lastname')
        cy.get(this.selectors.selectButtonGeneric).eq(0).click()
        cy.get(this.selectors.nacionalityButton).click() 
        cy.get(this.selectors.selectButtonGeneric).eq(1).click()
        cy.get(this.selectors.maritalStatusButton).click()
        cy.get(this.selectors.dateGenericField).eq(0).clear().type('2003-10-01')
        cy.get(this.selectors.dateCloseButton).click()
        cy.get(this.selectors.genderButton).eq(0).click()
        cy.get(this.selectors.submitButton).eq(0).click()
        cy.get(this.selectors.closeButton)
    
      }

}
export default MyinfoPage