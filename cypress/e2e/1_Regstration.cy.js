describe('Login Page Authentication ', () => {
    it('SignUp / Login', () => {
        cy.visit("https://www.automationexercise.com/")
        cy.get("body").should('be.visible')
        cy.get("a[href='/login']").click()
        cy.wait(3000)

        // Registration Form
        cy.get("input[placeholder='Name']").type("jordiporn")
        cy.get("input[data-qa='signup-email']").type("jordiporn25@gmail.com")
        cy.get("button[data-qa='signup-button']").click()
        cy.wait(3000)
        
        // Form 
        cy.get("#id_gender1").click()
        cy.get("#password").type("@Abc123#")
        cy.get("#days").select(5).should('have.value', "5")// Days
        cy.get("#months").select("June").should('have.value', "6" ) // Month 
        cy.get("#years").select("1999").should('have.value', "1999")// Years


        cy.get("#newsletter").click()
        cy.get("#optin").click()

        cy.get("#first_name").type("jordiporn")
        cy.get("#last_name").type("ENP")
        cy.get("#company").type("Uk, Belmont ")


        cy.get("#address1").type("312, hollywood, UK")
        cy.get("#address2").type("312, hollywood, UK")
        cy.get("#country").select("Canada").should("have.value", "Canada")
        cy.get("#state").type("North")
        cy.get("#city").type("belmont")
        cy.get("#zipcode").type("32510")
        cy.get("#mobile_number").type("01888888888")

        cy.get("button[data-qa='create-account']").click()

        cy.get('[data-qa="account-created"]').contains("Account Created!")
        cy.get('[data-qa="continue-button"]').click()
    });
});
