import userData from '../fixtures/userdata.json'
import LoginPage from '../pages/loginPage'
import dashBoardPage from '../pages/dashboardPage' 

const loginPage = new LoginPage()
const dashboardPage = new dashBoardPage()

describe('Login Orange HRM Tests', () => {
   const selectorslist = {}
 
it('login - success', () => {
  loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
  dashboardPage.checkDashboard()

})
it('login - fail', () => {
  loginPage.checkAcessInvalid(userData.userFail.username, userData.userFail.password)

})
})
