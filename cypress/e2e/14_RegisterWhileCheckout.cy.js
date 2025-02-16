describe("Register While Checkout", () => {
  it("Checkout Page verification ", () => {
    cy.visit("https://www.automationexercise.com");
    cy.title().should("eq", "Automation Exercise");
    cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should(
      "be.visible"
    );
    cy.wait(3000);

    cy.get("a[href='/products']").click();
    cy.get(".title.text-center").should("have.text", "All Products");

    cy.get(
      ":nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn"
    ).click();
    cy.get("u").click();
    cy.wait(3000);
    cy.get("#product-1").should("exist");
    cy.get("tbody>tr:nth-child(1)>td:nth-child(3)>p").contains("Rs. 500");
    cy.get("tbody>tr:nth-child(1)>td:nth-child(4)").should("exist");
    cy.get("tbody>tr:nth-child(1)>td:nth-child(5)>p").should("exist");
    cy.wait(3000);

    cy.get(".btn.btn-default.check_out").click();
    cy.get('.modal-body > :nth-child(2) > a > u').click()

    cy.get("input[placeholder='Name']").type("jordiporn");
    cy.get("input[data-qa='signup-email']").type("jordiporn654@gmail.com");
    cy.get("button[data-qa='signup-button']").click();
    cy.wait(3000);

    // Form
    cy.get("#id_gender1").click();
    cy.get("#password").type("@Abc123#");
    cy.get("#days").select(5).should("have.value", "5"); // Days
    cy.get("#months").select("June").should("have.value", "6"); // Month
    cy.get("#years").select("1999").should("have.value", "1999"); // Years

    cy.get("#newsletter").click();
    cy.get("#optin").click();

    cy.get("#first_name").type("jordiporn");
    cy.get("#last_name").type("ENP");
    cy.get("#company").type("Uk, Belmont ");

    cy.get("#address1").type("312, hollywood, UK");
    cy.get("#address2").type("312, hollywood, UK");
    cy.get("#country").select("Canada").should("have.value", "Canada");
    cy.get("#state").type("North");
    cy.get("#city").type("belmont");
    cy.get("#zipcode").type("32510");
    cy.get("#mobile_number").type("01888888888");
    cy.get("button[data-qa='create-account']").click();

    cy.get('[data-qa="account-created"]').contains("Account Created!");
    cy.get('[data-qa="continue-button"]').click()
    cy.get('b').should('have.text','jordiporn')
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click()

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
