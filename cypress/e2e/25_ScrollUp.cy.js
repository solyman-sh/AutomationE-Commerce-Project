describe('Test Case 25: Verify Scroll Up using Arrow button and Scroll Down functionality', () => {
    it('Scroll view testing', () => {
        cy.visit("https://www.automationexercise.com/");

        // Step 3: Verify Home Page is Visible
        cy.get("header[id='header']").should('be.visible');

        // Step 4: Scroll to Bottom
        cy.get("#footer").scrollIntoView({ duration: 2000 });
        cy.wait(3000);

        // Step 5: Verify 'SUBSCRIPTION' is visible
        cy.get('.single-widget > h2').should("be.visible")
        

        // Step 6: Click on Scroll Up Button (Arrow)
        // cy.get("#scrollUp").click();  // Use correct selector if different

        cy.get(".fa.fa-angle-up").click()
        
        // Step 7: Verify that text is visible after scrolling up
        cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible");
    });
});
