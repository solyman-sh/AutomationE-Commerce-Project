
import URL from "../Pages/Url";

describe("Verifying Incorrect Email / Password ", () => {
  it("Using Invalide Mail Pass ", () => {
    cy.visit("https://www.automationexercise.com/");
    cy.get("body").should("be.visible");
    cy.get("a[href='/login']").click();
    cy.get("body").should("be.visible");


    const ln = new URL()
    ln.setUserName("abc@gmail.com")
    ln.setPassword("abc123")
    ln.setButton()
    cy.get('.login-form > form > p').should('have.text', "Your email or password is incorrect!" )
  });
});
