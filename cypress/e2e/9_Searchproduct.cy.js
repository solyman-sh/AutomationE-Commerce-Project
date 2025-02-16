describe('Verify Search Product ', () => {
    it('Search Product ', () => {
        cy.visit("https://www.automationexercise.com")
        cy.title().should('eq', 'Automation Exercise')
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should('be.visible')
        cy.wait(3000)


        // Product Page 
        cy.get("a[href='/products']").click()
        cy.get(".title.text-center").should('have.text', 'All Products')
        cy.get(".features_items").should('be.visible')
        cy.wait(3000)

        // search Button 
        cy.get("#search_product").type("Shirt")
        cy.get(".title.text-center").should('be.visible')


    });
});