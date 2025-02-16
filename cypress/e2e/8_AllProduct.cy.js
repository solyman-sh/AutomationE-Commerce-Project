describe('Verify All Products and product detail page', () => {
    it('all product details ', () => {
        cy.visit("https://www.automationexercise.com")
        cy.title().should('eq', 'Automation Exercise')
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should('be.visible')
        cy.wait(3000)

        // Product Page 
        cy.get("a[href='/products']").click()
        cy.get(".title.text-center").should('have.text', 'All Products')
        cy.get(".features_items").should('be.visible')
        cy.wait(3000)
        
        cy.get("a[href='/product_details/1']").click()
        cy.get(".col-sm-9.padding-right").should('be.visible')
        cy.wait(3000)


        // cart Product 
        cy.get("div[class='product-information'] h2").should('have.text', 'Blue Top')
        cy.get("#quantity").clear().type("5")
        cy.get("button[type='button']").click()
        cy.get(".btn.btn-success.close-modal.btn-block").click()
    });
});