describe('Categories Product view', () => {
    it('Categories section verification', () => {
        cy.visit("https://www.automationexercise.com/")
        cy.get(".left-sidebar").should("be.visible")
        cy.get('body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h4:nth-child(1) > a:nth-child(1)').click()
        cy.get("a[href='/category_products/1']").should('be.visible').click()
        cy.get(".title.text-center").should('have.text', 'Women - Dress Products')
        cy.get("body > section:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > h4:nth-child(1) > a:nth-child(1)").click()
        cy.get(".left-sidebar").should('be.visible')
        
    });
});