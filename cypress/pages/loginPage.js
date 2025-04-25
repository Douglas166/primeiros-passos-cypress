
class LoginPage {
  selectors = {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      loginButton: "button",
      wrongCredendialAlert: "body",
  };

  acessLoginPage() {
      cy.visit('/auth/login');
  }

  loginWithUser(username, password) {
    cy.visit('/auth/login');
      cy.get(this.selectors.usernameField).type(username);
      cy.get(this.selectors.passwordField).type(password);
      cy.get(this.selectors.loginButton).click();
    }
  checkAcessInvalid(username, password) {
    cy.visit('/auth/login');
    cy.get(this.selectors.usernameField).type(username);
    cy.get(this.selectors.passwordField).type(password);
    cy.get(this.selectors.loginButton).click();
    cy.get(this.selectors.wrongCredendialAlert);

   }



}

export default LoginPage;