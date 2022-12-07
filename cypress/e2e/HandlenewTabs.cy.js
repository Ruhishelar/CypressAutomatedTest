describe('Create a new course', () => {
    beforeEach(function(){
       cy.fixture("cypressdata").then(function(jsondata){
           this.jsondata=jsondata
       })
    });
     it('Add a new course', function(){
         cy.visit("https://ineuron-courses.vercel.app/login")
         cy.get("input[name='email1']").type(this.jsondata.username).should("have.value",this.jsondata.username)
         cy.get("input[name='password1']").type(this.jsondata.password).should("have.value",this.jsondata.password)
         cy.get('.submit-btn').should("have.enabled").click()
         cy.wait(2000)
 cy.contains("Manage").realHover();
 cy.wait(3000)
 cy.contains("Manage Categories").invoke("removeAttr","target").click({force:true})
 cy.window().then(function(win)
 {
    cy.contains("Add New Category ").click({force:true})
    cy.stub(win,"prompt").returns("Cypress")

 })
 cy.contains("Cypress").should("be.visible")
 
     })
     })