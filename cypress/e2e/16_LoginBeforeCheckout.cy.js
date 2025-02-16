describe("Login Before Checkout", () => {
    beforeEach(() => {
      cy.loginapp("jordiporn48@gmail.com", "@Abc123#");
    });
  
    it("Register Before Checkout ", () => {
      cy.get("a[href='/products']").click();
      cy.get(".title.text-center").should("have.text", "All Products");
  
      cy.get(
        ":nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn"
      ).click();
      cy.get("u").click();
      cy.wait(3000);
      cy.get("#product-1").should("exist");
      cy.wait(3000);
  
  
      // Cart Menu
      cy.get("a[href='/view_cart']").click()
      cy.get(".active").should('have.text', 'Shopping Cart')
      
       //Proceed to Checkout
       cy.get(".btn.btn-default.check_out").click()
       cy.get("section[id='cart_items'] div:nth-child(2) h2:nth-child(1)").should('have.text', 'Address Details')
       cy.get("textarea[name='message']").type("Amar sonar bangle ami tomai valobashi ")
       cy.get(".btn.btn-default.check_out").click()
       cy.wait(3000)
   
       // Payment 
   
       cy.get(".heading").should('have.text', 'Payment')
       cy.get("input[name='name_on_card']").type("Beast")
       cy.get("input[name='card_number']").type('252550503030')
       cy.get("input[placeholder='ex. 311']").type('255')
       cy.get("input[placeholder='MM']").type('25')
       cy.get("input[placeholder='YYYY']").type('2026')
       cy.get("#submit").click()
   
       // cy.get("div[id='success_message'] div[class='alert-success alert']").should('contain', 'Your order has been placed successfully!')
       
       cy.get("h2[class='title text-center'] b").should('have.text','Order Placed!')
   
       // delete Account
       cy.get("a[href='/delete_account']").click()
       cy.get("h2[class='title text-center'] b").should('have.text','Account Deleted!')
       cy.get('[data-qa="continue-button"]').click()
    });
  });
  