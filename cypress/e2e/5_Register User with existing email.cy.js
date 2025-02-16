describe("Register User with exixting Email", () => {
  it("existing email user ", () => {
    cy.visit("https://www.automationexercise.com/");
    cy.get("body").should("be.visible");
    cy.get("a[href='/login']").click();
    cy.get("body").should("be.visible");
    cy.get("div[class='signup-form'] h2").should("be.visible");
    cy.fixture("AutomationExercise").then((data) => {
      cy.get("input[placeholder='Name']").type(data.name);
      cy.get("input[data-qa='signup-email']").type(data.username);
      cy.get("button[data-qa='signup-button']").click();
      cy.get("body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > form:nth-child(2) > p:nth-child(5)").should('be.visible')
    });
    
  });
});
