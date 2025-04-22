import userData from '../fixtures/userdata.json'
import LoginPage from '../pages/loginPage'
import dashBoardPage from '../pages/dashboardPage' 
import menuPage from '../pages/menuPage'
import MyinfoPage from '../pages/myinfoPage'
const MenuPage = new menuPage()
const loginPage = new LoginPage()
const dashboardPage = new dashBoardPage()
const myinfoPage = new MyinfoPage()

describe('Orange HRM Tests', () => {
   const selectorslist = {}
 

 it.only('User Info Update - Success', () => {
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboard()
    MenuPage.menuPage()
    myinfoPage.changeUserInfo()
 })  

it('login - fail', () => {
  cy.visit('/auth/login')
  cy.get(selectorslist.usernameField).type(userData.userFail.username)
  cy.get(selectorslist.passwordField).type(userData.userFail.password)
  cy.get(selectorslist.loginButton).click()
  cy.get(selectorslist.usernameField).type(userData.userFail.username)
})
})
