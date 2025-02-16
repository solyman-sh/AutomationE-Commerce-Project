describe('Remove Product form Cart', () => {
    it('remove functionality', () => {
        cy.visit("https://www.automationexercise.com")
        cy.title().should('eq', 'Automation Exercise')
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should('be.visible')
        cy.wait(3000)

        // Product Page 
        cy.get("a[href='/products']").click()
        cy.get(".title.text-center").should('have.text', 'All Products')
        cy.get(".features_items").should('be.visible')
        cy.wait(3000)
        
        // Product Add to cart
        
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
        cy.get('.cart_quantity_delete > .fa').click()
        cy.get('#empty_cart > .text-center').should('exist')
    });
});