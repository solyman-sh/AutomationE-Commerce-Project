describe("Test Case 26: Verify Scroll Up without Arrow button and Scroll Down functionality", () => {
  it("Scrool up and down without click  Arrow button ", () => {
    cy.visit("https://www.automationexercise.com/");
    cy.get("header[id='header']").should("be.visible");
    cy.scrollTo("bottom");
    cy.wait(2000);
    cy.scrollTo("top");

    cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible");
  });
});
