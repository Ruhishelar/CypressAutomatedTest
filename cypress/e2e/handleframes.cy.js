describe('Handle Frames', () => {
    it('Handleframes without plugin', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.get("iframe")
        .its("0.contentDocument")
        .its("body")
        .then(cy.wrap)
        .clear()
        .type("Cypress")
    });
    it.only('Handleframes without plugin using custom command', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.switchtoFrame("iframe")
        .clear()
        .type("Cypress")
    });

    it('Handleframes with plugin', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.frameLoaded()
        .iframe()
        .clear()
        .type("Cypress")
    });
});