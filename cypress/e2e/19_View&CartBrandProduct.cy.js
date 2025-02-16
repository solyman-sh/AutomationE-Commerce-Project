describe("View & Cart Brand Product Page", () => {
  it("product page view and cart ", () => {
    cy.visit("https://www.automationexercise.com/");
    cy.get("a[href='/products']").click();
    cy.get("div[class='brands_products'] h2").click();
    cy.get("a[href='/brand_products/Madame']").click();
    cy.get(".title.text-center").should("have.text", "Brand - Madame Products");
    cy.get("a[href='/brand_products/Kookie Kids']").click();
    cy.get(".title.text-center").should(
      "have.text",
      "Brand - Kookie Kids Products"
    );
  });
});
