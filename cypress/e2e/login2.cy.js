describe('Login Test with Cypress', () => {
    it('login with valid credential', () => {
        cy.visit("https://ineuron-courses.vercel.app/login");
        cy.get('#email1').type("ineuron@ineuron.ai");
        cy.get('#password1').type("ineuron");
        cy.get('.submit-btn').should('be.enabled').click();
        cy.get('.home-container').should('be.visible').wait(4000);
        cy.get('.navbar-menu-links > button').should('be.enabled').click();
        
    });
});

/*describe('Login test with Cypress', () => {
    it('login with valid credential', () => {
        
        cy.visit("https://ineuron-courses.vercel.app/login");
       // cy.get("input[name='email1']").type("ineuron@ineuron.ai");
       // cy.get("input[name='password1']").type("ineuron");
       // cy.get('.submit-btn').click();
        //cy.get('.navbar-menu-links > button').should('be.visible');
        cy.xpath("//input[@name='email1']").type("ineuron@ineuron.ai");
        cy.xpath("//input[@name='password1']").type("ineuron");
    });
});*/