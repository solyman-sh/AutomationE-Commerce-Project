// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "./commands";

import "cypress-file-upload";

/// <reference types="cypress" />
// / <reference types="cypress-xpath" />
// /<reference types="cypress-iframe" />

Cypress.Commands.add("loginapp", (user, password) => {
  cy.visit("https://www.automationexercise.com/");
  cy.get("body").should("be.visible");
  cy.get("a[href='/login']").click();
  cy.get("body").should("be.visible");

  
  cy.get("input[data-qa='login-email']").type(user);
  cy.get("input[placeholder='Password']").type(password);
  cy.get("button[data-qa='login-button']").click();
  cy.get("ul[class='nav navbar-nav'] li a b").should("be.visible");
  cy.wait(3000)
});

Cypress.Commands.add("logout", () => {
  cy.get("a[href='/logout']").click();
  cy.title("Automation Exercise - Signup / Login");
});




