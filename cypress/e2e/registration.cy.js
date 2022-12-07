describe('Registration form', () => {
    it('create new user', () => {
        cy.visit("https://ineuron-courses.vercel.app/login");
        cy.viewport(1920,1080);
        cy.contains('New user? Signup').click();
        cy.get("input[name='name']").type(`Ruhi`);
        cy.get("input[name='email']").type('ruhi1234@gmail.com');
        cy.get("input[name='password']").type('ruhi1234');
        //cy.get("input[type='checkbox']").click({ multiple: true });
       // cy.get("input[type='checkbox']").first().click();
      // cy.get("input[type='checkbox']").last().click();
      cy.xpath("//label[text()='Testing']//preceding::input[1]").click();
      cy.get("input[type='radio']").first().click();
      //cy.get("select[name='state']").select(1);
      cy.get("select[name='state']").select('Goa');
      cy.contains("Sign up").should('be.enabled').click();
      cy.get('#email1').type("ruhi1234@gmail.com");
        cy.get('#password1').type("ruhi1234");
        cy.get('.submit-btn').should('be.enabled').click();
        cy.get('.home-container').should('be.visible').wait(4000);
        cy.get('.navbar-menu-links > button').should('be.enabled').click();
        
    });
});