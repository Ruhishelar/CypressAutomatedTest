describe('smoke test', () => {
    it('verify title', () => {
        cy.visit('https://ineuron-courses.vercel.app')
        cy.title().should('contain','Courses')
        
    });
    it('verify exacttitle', () => {
        cy.visit('https://ineuron-courses.vercel.app')
        cy.title().should('eq','iNeuron Courses')
        
    });
    it('verify partialurl', () => {
        cy.visit('https://ineuron-courses.vercel.app')
        cy.url().should('contain','ineuron')
        
    });
});