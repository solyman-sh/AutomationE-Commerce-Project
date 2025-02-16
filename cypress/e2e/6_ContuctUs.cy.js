

describe('Verify Contact Us Page', () => {
    
    it('Contact Use verifying', () => {
        cy.visit("https://www.automationexercise.com")

        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should('be.visible')
        cy.get("a[href='/contact_us']").click()
        cy.wait(3000)
        // page verificaiton 
        cy.get("div[class='contact-form'] h2[class='title text-center']").should('be.visible')
        // form section 

        cy.get("input[placeholder='Name']").type("Akash")
        cy.get("input[placeholder='Email']").type("akash@gmail.com")
        cy.get("input[placeholder='Subject']").type("Automation test")
        cy.get("#message").type("i am prcatics autamation testing . this test only for study purpose")
        cy.get("input[name='upload_file']").attachFile('1.png')
        cy.get("input[value='Submit']").click()
        cy.wait(3000)
        cy.get(".status.alert.alert-success").should('be.visible')
        cy.get(".btn.btn-success").click()
        cy.wait(3000)
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should('be.visible')
    });

    

});