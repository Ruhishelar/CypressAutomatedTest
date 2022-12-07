describe('Handle Clicks', () => {
    it('Rightclick on Elements', () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.contains("right click me").rightclick()
        cy.xpath("//span[text()='Cut']").click()
        cy.on("window:alert",function(msg){
            expect(msg).to.be.equal("clicked: cut")
        })
    });
});