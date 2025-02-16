describe("login functionality", () => {
  beforeEach(() => {
    cy.loginapp("jordiporn36@gmail.com", "@Abc123#");
  });

  afterEach(() => {
    cy.logout();
  });

  it("login verificaiton ", () => {
    cy.get(
      "body > header:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)"
    ).click();
    cy.get("#footer").scrollIntoView({ duration: 2000 }).should("be.visible");
    cy.get("div[class='single-widget'] h2").should("have.text", "Subscription");
    cy.get("#susbscribe_email").type("abc@gmail.com");
    cy.get("#subscribe").click();
    cy.get(".alert-success").should("be.visible");
  });
});
