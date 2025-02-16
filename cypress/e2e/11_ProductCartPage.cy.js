describe("Product Cart Page", () => {
  beforeEach(() => {
    cy.loginapp("jordiporn25@gmail.com", "@Abc123#");
  });
  afterEach(() => {
    cy.logout();
  });

  it("Add to Cart Verification", () => {
    cy.get("a[href='/products']").click()
    cy.get(".title.text-center").should('have.text', 'All Products')
    
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('u').click()
    cy.wait(3000)
    cy.get("#product-1").should('exist')
    cy.get("tbody>tr:nth-child(1)>td:nth-child(3)>p").contains('Rs. 500')
    cy.get("tbody>tr:nth-child(1)>td:nth-child(4)").should("exist")
    cy.get("tbody>tr:nth-child(1)>td:nth-child(5)>p").should('exist')
    cy.wait(3000)

  });
});
