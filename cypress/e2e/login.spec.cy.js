import userData from '../fixtures/userdata.json'

describe('Orange HRM Tests', () => {
   const selectorslist = {
     usarnameField: "[name='username']",
     passwordField: "[name='password']",
     loginButton: "button",
     tittleTopBar: "header",
     wrongCredendialAlert: "body",
   }
   
  it('login - sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorslist.usarnameField).type(userData.userSucess.username)
    cy.get(selectorslist.passwordField).type(userData.userSucess.password)
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.tittleTopBar)
  })
it('login - fail', () => {
  cy.visit('/auth/login')
  cy.get(selectorslist.usarnameField).type(userData.userFail.username)
  cy.get(selectorslist.passwordField).type(userData.userFail.password)
  cy.get(selectorslist.loginButton).click()
  cy.get(selectorslist.wrongCredendialAlert)
})
})
