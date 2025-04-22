class dashBoardPage {
 selectors = {
    tittleTopBar: "header",

}
checkDashboard() {
    cy.get(this.selectors.tittleTopBar).should('be.visible')

}
}
export default dashBoardPage;