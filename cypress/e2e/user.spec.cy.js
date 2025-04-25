import userData from '../fixtures/userdata.json'
import LoginPage from '../pages/loginPage'
import dashBoardPage from '../pages/dashboardPage' 
import menuPage from '../pages/menuPage'
import MyinfoPage from '../pages/myinfoPage'
const MenuPage = new menuPage()
const loginPage = new LoginPage()
const dashboardPage = new dashBoardPage()
const myinfoPage = new MyinfoPage()




describe('User Info Orange HRM Tests', () => {
   const selectorslist = {}
 
 it('User Info Update - Success', () => {
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboard()
    MenuPage.menuPage()
    myinfoPage.changeUserInfo()
})  
})

