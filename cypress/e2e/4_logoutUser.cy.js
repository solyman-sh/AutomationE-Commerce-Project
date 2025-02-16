describe("logout Function", () => {
    it("Logout Appliction ", () => {
      cy.visit("https://www.automationexercise.com/");
      cy.get("body").should("be.visible");
      cy.get("a[href='/login']").click();
      cy.get("body").should("be.visible");
  
      cy.fixture("AutomationExercise").then((data) => {
        cy.get("input[data-qa='login-email']").type(data.username);
        cy.get("input[placeholder='Password']").type(data.password);
        cy.get("button[data-qa='login-button']").click();
        cy.get("ul[class='nav navbar-nav'] li a b").should("be.visible");
        cy.get("a[href='/logout']").click()
        cy.title("Automation Exercise - Signup / Login")

      });
    });
  
  
    
    
  });