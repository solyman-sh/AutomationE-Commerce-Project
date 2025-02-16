describe('Verify Subscription in home page', () => {
    it('Subscription in home page ', () => {
        cy.visit("https://www.automationexercise.com")
        cy.title().should('eq', 'Automation Exercise')
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should('be.visible')
        cy.wait(3000)

        cy.get("#footer").scrollIntoView({duration:1000}).should('be.visible')
        cy.get("div[class='single-widget'] h2").should('have.text', 'Subscription')
        cy.get("#susbscribe_email").type("abc@gmail.com")
        cy.get("#subscribe").click()
        cy.get('.alert-success').should('be.visible')
    });
});