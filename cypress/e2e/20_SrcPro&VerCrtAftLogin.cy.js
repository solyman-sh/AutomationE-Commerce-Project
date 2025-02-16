describe('Test Case 20: Search Products and Verify Cart After Login', () => {
    it('verify cart after login', () => {
        cy.visit("https://www.automationexercise.com/")
        cy.get("a[href='/products']").click()
        cy.get(".title.text-center").should('have.text', 'All Products')
        cy.get("#search_product").type("shirt")
        cy.get("#submit_search").click()
        cy.get(".title.text-center").should('have.text', 'Searched Products')
        cy.get(".features_items").should('exist')


        // add to cart
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
        cy.get(".active").should('have.text','Shopping Cart')

        // loging option
        cy.loginapp("jordiporn36@gmail.com", "@Abc123#");
        cy.get("a[href='/view_cart']").should('be.visible').click({ multiple: true });
        cy.get("#cart_info_table").should('exist')

    });
    
});