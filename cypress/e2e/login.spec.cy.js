describe('Orange HRM Tests', () => {
   const selectorslist = {
     usarnameField: "[name='username']",
     passwordField: "[name='password']",
     loginButton: "button",
     tittleTopBar: "header",
     wrongCredendialAlert: "body",
   }
  it('login - sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorslist.usarnameField).type('Admin')
    cy.get(selectorslist.passwordField).type('admin123')
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.tittleTopBar)
  })
it('login - fail', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get(selectorslist.usarnameField).type('Admin')
  cy.get(selectorslist.passwordField).type('admin13')
  cy.get(selectorslist.loginButton).click()
  cy.get(selectorslist.wrongCredendialAlert)
})
})
