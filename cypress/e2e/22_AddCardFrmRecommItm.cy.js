describe('Test Case 22: Add to cart from Recommended items', () => {
    it('Add to cart form Recommanded items', () => {
        cy.visit("https://www.automationexercise.com/")
        cy.get("#footer").scrollIntoView({ duration: 7000 },{ easing: 'linear' })

        cy.get("div[class='recommended_items'] h2[class='title text-center']").scrollIntoView().should('have.text','recommended items' )
        cy.wait(2000)

        cy.get('.active > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
        cy.url().should('eq','https://www.automationexercise.com/view_cart')
    });
});