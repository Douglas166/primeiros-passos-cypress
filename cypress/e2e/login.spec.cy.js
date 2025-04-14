describe('Orange HRM Tests', () => {
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
