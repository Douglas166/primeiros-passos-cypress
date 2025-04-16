describe('Orange HRM Tests', () => {
   const selectorslist = {
     usarnameField: "[name='username']",
     passwordField: "[name='password']",
     loginButton: "button",
     tittleTopBar: "header",
     wrongCredendialAlert: "body",
   }
   const userData = {
    userSucess: {
      username: "Admin"
      password: "admin123"
    }
   userFail: {
    username: "test"
    password: "test"
   }

   }





  it('login - sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorslist.usarnameField).type(userData.userSucess.username)
    cy.get(selectorslist.passwordField).type(userData.userSucess.password)
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.tittleTopBar)
  })
it('login - fail', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get(selectorslist.usarnameField).type(userData.userFail.username)
  cy.get(selectorslist.passwordField).type(userData.userFail.password)
  cy.get(selectorslist.loginButton).click()
  cy.get(selectorslist.wrongCredendialAlert)
})
})
