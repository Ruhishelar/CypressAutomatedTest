

describe('handle alert', () => {
    it('my first alert', function(){

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains("Click for JS Alert").click()
        cy.on("window:alert", function(msg)
        {
            expect(msg).to.be.equal("I am a JS Alert")

        })
        cy.get("#result").should('have.text','You successfully clicked an alert')
        
    });

    it('Conformation alert', function(){

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains("Click for JS Confirm").click()
        cy.on("window:confirm", function(msg)
        {
            expect(msg).to.be.equal("I am a JS Confirm")

        })
        cy.get("#result").should('have.text','You clicked: Ok')
        
    });

    it('Conformation alert, cancel', function(){

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains("Click for JS Confirm").click()
        cy.on("window:confirm", function(msg)
        {
            expect(msg).to.be.equal("I am a JS Confirm")
            return false;

        })
        
        cy.get("#result").should('have.text','You clicked: Cancel')
        
    });
    it.only('Prompt alert', function(){

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
       
        cy.window().then(function(win)
        {
            cy.contains("Click for JS Prompt").click()
            cy.stub(win,"prompt").returns("Cypress")

        })
        cy.contains("You entered: Cypress").should("be.visible");
    })

});