

class URL {

    textPass = "input[placeholder='Password']"
    
    setUserName(username){
        cy.get("input[data-qa='login-email']").type(username);
      
    }
    setPassword(password){
        cy.get(this.textPass).type(password);
      
    }
    setButton(){
        cy.get("button[data-qa='login-button']").click();
    }
    setErrorMsg(){
        cy.get("body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > p:nth-child(4)").should("have.text", "Your email or password is incorrect!")
    }
    loginWithFixture(){
        cy.fixture('AutomationExercise').then((data)=>{
            this.username(data.username)
            this.password(data.password)
            this.setButton()
        })
    }
}

export default URL