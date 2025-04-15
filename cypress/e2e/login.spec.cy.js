describe('Orange HRM Tests', () => {
   const selectorslist = {
     usarnameField: "[name='username']",
     passwordField: "[name='password']",
     loginButton: "'.oxd-button'",
     tittleTopBar: "'.oxd-topbar-header-title'",
     wrongCredendialAlert: "'.oxd-alert'",
   }
  it('login - sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-title')
  })
it('login - fail', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get("[name='username']").type('Admin')
  cy.get("[name='password']").type('admin13')
  cy.get('.oxd-button').click()
  cy.get('.oxd-alert')
})
})
