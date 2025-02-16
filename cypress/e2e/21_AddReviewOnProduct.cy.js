describe("Add Review is visible On Product", () => {
    it("Check if Review Section is Visible and Functional", () => {
      // Step 1 & 2: Visit the website
      cy.visit("https://www.automationexercise.com/");
  
      // Step 3: Click on 'Products' button and verify navigation
      cy.get("a[href='/products']").should('be.visible').click();
      cy.url().should('include', '/products');
  
      // Step 4: Verify ALL PRODUCTS page is loaded
      cy.get('.features_items').should('be.visible');
  
      // Step 5: Click on 'View Product' button for a specific product
      cy.get("a[href='/product_details/1']").should('be.visible').click();
  
      // Step 6: Verify 'Write Your Review' section is visible
      cy.get("a[href='#reviews']").should("be.visible");
  
      // Step 7: Enter name, email, and review
      cy.get("#name").should("be.visible").type("Akash");
      cy.get("#email").should("be.visible").type("akash@gmail.com");
      cy.get("#review").should("be.visible").type("Amar Sonar Bangla Ami Tomai Bhalobashi");
  
      // Step 8: Click 'Submit' button
      cy.get("#button-review").should("be.visible").click();
  
      // Step 9: Verify success message
      cy.get('.alert-success').should('contain.text', 'Thank you for your review.');
    });
  });
  