describe("Test Case 24: Download Invoice after purchase order", () => {
  it("download invoice after purchase order ", () => {
    cy.visit("https://www.automationexercise.com/");
    //3. Verify that home page is visible successfully
    cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should(
      "be.visible"
    );

    
    cy.get(".productinfo > .btn").first().click();
    cy.get("u").click();

    
    cy.url().should("eq", "https://www.automationexercise.com/view_cart");

    cy.get(".btn.btn-default.check_out").click()

    // checkout login
    cy.get('.modal-body > :nth-child(2) > a > u').click()

    cy.get("input[placeholder='Name']").type("jordiporn");
    cy.get("input[data-qa='signup-email']").type("jordiporn6454@gmail.com");
    cy.get("button[data-qa='signup-button']").click();
    cy.wait(2000);

    // Fill Registration Form
    cy.get("#id_gender1").click();
    cy.get("#password").type("@Abc123#");
    cy.get("#days").select("5").should("have.value", "5");
    cy.get("#months").select("June").should("have.value", "6");
    cy.get("#years").select("1999").should("have.value", "1999");
    cy.get("#newsletter").click();
    cy.get("#optin").click();
    cy.get("#first_name").type("jordiporn");
    cy.get("#last_name").type("ENP");
    cy.get("#company").type("UK, Belmont");
    cy.get("#address1").type("312, Hollywood, UK");
    cy.get("#address2").type("312, Hollywood, UK");
    cy.get("#country").select("Canada").should("have.value", "Canada");
    cy.get("#state").type("North");
    cy.get("#city").type("Belmont");
    cy.get("#zipcode").type("32510");
    cy.get("#mobile_number").type("01888888888");
    cy.get("button[data-qa='create-account']").click();

    // Step 6: Verify 'ACCOUNT CREATED!' and continue
    cy.get('[data-qa="account-created"]').should(
      "contain.text",
      "Account Created!"
    );
    cy.get('[data-qa="continue-button"]').click();

    cy.get("b").should("be.visible");
    cy.wait(2000)

    cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
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



    cy.get(".btn.btn-default.check_out").should('be.visible').click()
    cy.get(".btn.btn-primary").should('be.visible').click()

    // delete Account
    cy.get("a[href='/delete_account']").click()
    cy.get("h2[class='title text-center'] b").should('have.text','Account Deleted!')
    cy.get('[data-qa="continue-button"]').click()
      
  });
});
