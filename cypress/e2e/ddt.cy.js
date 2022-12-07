const testvaluefixture=[
    {
      "name":"test1",
      "context":"1"
    },
    {
    "name":"test2",
    "context":"2"
    }

]

describe('DDT test for Cypress', function() {
    testvaluefixture.forEach(function(fixturedata)
    {
        describe(fixturedata.context, function(){
            
      
        before(function() {
            cy.fixture(fixturedata.name).then(function(testdata)
            {
              this.testdata=testdata
            })

        })
        
        it('Login to application', function() {
           /*cy.log(this.testdata.name)
            cy.log(this.testdata.email)
            cy.log(this.testdata.body)*/
            cy.visit("https://ineuron-courses.vercel.app/login")
            cy.login(this.testdata.uname,this.testdata.pass)
            
        });
        
    })  

        
    })
    
});