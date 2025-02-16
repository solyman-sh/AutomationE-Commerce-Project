describe("Test Case 23: Verify address details in checkout page", () => {
  it("Verify address details in checkout page", () => {
    // Step 1 & 2: Visit website and verify home page
    cy.visit("https://www.automationexercise.com/");
    cy.get("body").should("be.visible");

    // Step 3 & 4: Click Signup / Login
    cy.get("a[href='/login']").click();
    cy.wait(2000);

    // Step 5: Fill Signup details and create account
    cy.get("input[placeholder='Name']").type("jordiporn");
    cy.get("input[data-qa='signup-email']").type("jordiporn323@gmail.com");
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

    // Step 7: Verify Logged in as username
    cy.get("b").should("be.visible");

    // Step 8: Add product to cart
    cy.get(".productinfo > .btn").first().click();
    cy.get("u").click();

    // Step 9 & 10: Verify Cart Page
    cy.url().should("eq", "https://www.automationexercise.com/view_cart");

    // Step 11: Proceed to Checkout
    cy.get(".btn.btn-default.check_out").click();

    // Step 12 & 13: Verify Delivery & Billing Address are same as registration address
    // Step 12 & 13: Verify Delivery & Billing Address are same as registration address
    
    cy.get("#address_delivery > .address_firstname").invoke("text").then((deliveryAddress) => {
        cy.get("#address_invoice > .address_firstname").invoke("text").should("eq", deliveryAddress);
      });

    // Step 14: Click 'Delete Account'
    cy.get("a[href='/delete_account']").click();

    // Step 15: Verify 'ACCOUNT DELETED!'
    cy.get('[data-qa="account-deleted"]').should(
      "contain.text",
      "Account Deleted!"
    );
    cy.get('[data-qa="continue-button"]').click();
  });
});
