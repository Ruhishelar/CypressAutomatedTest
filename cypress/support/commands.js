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

//const cypress = require("cypress");
//const { functions } = require("cypress/types/lodash");

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("selectvalue",function(locator,txttosearch) {
    cy.xpath(locator)
       .each(function(ele)
       {
        cy.log(ele.text())
        if (ele.text().includes(txttosearch)) {
           cy.wrap(ele).click({force:true})
            
        }

       })
    
})
Cypress.Commands.add("login",function(uname,pass) {

    cy.get("input[name='email1']").type(uname);
    cy.get("input[name='password1']").type(pass);
      cy.get('.submit-btn').click();
})

 Cypress.Commands.add("switchtoFrame",function(Frameidornameorlocator){
   return cy.get(Frameidornameorlocator)
    .its("0.contentDocument")
    .its("body")
    .then(cy.wrap) 
})