

describe('Keyboard Events', () => {
    it('keyboard Events using keys', () => {
        
        cy.visit("https://ineuron-courses.vercel.app/login");
        cy.get("a").debug()
        cy.get("input[name='email1']").type("ruhishelar@ineuron.ai");
        cy.pause()
        cy.get("input[name='password1']").type("ineuron{enter}");
       
    });
});