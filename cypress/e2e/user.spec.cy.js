import userData from '../fixtures/userdata.json'

describe('Orange HRM Tests', () => {
   const selectorslist = {
     usarnameField: "[name='username']",
     passwordField: "[name='password']",
     loginButton: "button",
     tittleTopBar: "header",
     wrongCredendialAlert: "body",
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
     maritalStatusButton: ".oxd-select-dropdown > :nth-child(3)"
     }

  it.only('User Info Update - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorslist.usarnameField).type(userData.userSucess.username)
    cy.get(selectorslist.passwordField).type(userData.userSucess.password)
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.tittleTopBar)
    cy.get(selectorslist.myInfo).click()
    cy.get(selectorslist.firstNameField).clear().type('First')
    cy.get(selectorslist.middleNameField).clear().type('Middle')
    cy.get(selectorslist.lastNameField).clear().type('Last')
    cy.get(selectorslist.genericField).eq(4).clear().type('Employee')
    cy.get(selectorslist.genericField).eq(5).clear().type('OtherIdTest')
    cy.get(selectorslist.genericField).eq(6).clear().type('DriverTest')
    cy.get(selectorslist.dateGenericField).eq(0).clear().type('2030-05-05')
    cy.get(selectorslist.dateCloseButton).click()
    cy.get(selectorslist.selectButtonGeneric).eq(0).click()
    cy.get(selectorslist.nacionalityButton).click()
    cy.get(selectorslist.selectButtonGeneric).eq(1).click()
    cy.get(selectorslist.maritalStatusButton).click()
    cy.get(selectorslist.submitButton).eq(0).click()
    cy.get('body').should('contain', "Successfully Updated")
    cy.get(selectorslist.closeButton)


})  

it('login - fail', () => {
  cy.visit('/auth/login')
  cy.get(selectorslist.usarnameField).type(userData.userFail.username)
  cy.get(selectorslist.passwordField).type(userData.userFail.password)
  cy.get(selectorslist.loginButton).click()
  cy.get(selectorslist.wrongCredendialAlert)
})
})
