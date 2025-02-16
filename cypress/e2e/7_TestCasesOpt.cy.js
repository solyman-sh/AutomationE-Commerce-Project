describe('Test case Page Verification ', () => {
    it('Test case page verificaiton ', () => {
        cy.visit("https://www.automationexercise.com/")
        cy.title().should('eq', 'Automation Exercise')
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should('be.visible')
        cy.wait(3000)
        cy.get("header[id='header'] li:nth-child(5) a:nth-child(1)").click()
        cy.wait(3000)
        cy.get("h2[class='title text-center'] b").should('be.visible')
        
    });
});