describe('fixture demo', function() {
    beforeEach(function(){
        cy.fixture("cypressdata").then(function(jsondata){
            this.jsondata=jsondata

        })
        
    });
    it('fixture demo for json file', function()  {
        cy.log(this.jsondata.name)
        cy.log(this.jsondata.email)
        cy.log(this.jsondata.body)
        
    });
});