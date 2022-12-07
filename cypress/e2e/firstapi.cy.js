describe('first API Call', () => {
    it('Get request vai Cypress', () => {
        cy.request("https://ineuron-courses.vercel.app/login").then(function(resp)
        {
            cy.log(resp.status)
            cy.log(resp.body)
            cy.log(resp.duration)
            cy.log(resp.statusText)

        })
        
    });
    it('Get request vai Cypress', () => {
        cy.request("https://www.linkedin.com").then(function(resp)
        {
            cy.log(resp.status)
            cy.log(resp.body)
            cy.log(resp.duration)
            cy.log(resp.statusText)

        })
        
    });
});