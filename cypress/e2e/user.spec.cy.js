import userData from '../fixtures/userdata.json'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()

describe('Orange HRM Tests', () => {
   const selectorslist = {
     usernameField: "[name='username']",
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
     maritalStatusButton: ".oxd-select-dropdown > :nth-child(3)",
     genderButton: ".oxd-radio-wrapper"
     }

  it.only('User Info Update - Sucess', () => {
   loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
   cy.get(selectorslist.tittleTopBar).should('be.visible')
   cy.get(selectorslist.myInfo).click()
   cy.get(selectorslist.firstNameField).clear().type('firstname')
   cy.get(selectorslist.middleNameField).clear().type('middlename') 
   cy.get(selectorslist.lastNameField).clear().type('lastname')
   cy.get(selectorslist.selectButtonGeneric).eq(0).click()
   cy.get(selectorslist.nacionalityButton).click() 
   cy.get(selectorslist.selectButtonGeneric).eq(1).click()
   cy.get(selectorslist.maritalStatusButton).click()
   cy.get(selectorslist.dateGenericField).eq(0).clear().type('2003-10-01')
   cy.get(selectorslist.dateCloseButton).click()
   cy.get(selectorslist.genderButton).eq(0).click()
   cy.get(selectorslist.submitButton).eq(0).click()
   cy.get(selectorslist.closeButton)
})  

it('login - fail', () => {
  cy.visit('/auth/login')
  cy.get(selectorslist.usernameField).type(userData.userFail.username)
  cy.get(selectorslist.passwordField).type(userData.userFail.password)
  cy.get(selectorslist.loginButton).click()
  cy.get(selectorslist.usernameField).type(userData.userFail.username)
})
})
