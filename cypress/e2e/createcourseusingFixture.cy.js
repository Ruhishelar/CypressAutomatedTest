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
cy.contains("Manage Courses").click({force:true})
cy.xpath("//table[contains(@class,'courses')]//tbody//tr").should("have.length",0);
cy.contains("Add New Course ").click({force:true})
cy.get("#thumbnail").attachFile("Bestquotes.jpg")
cy.get("input[name='name']").type(this.jsondata.courseName)
//cy.get("input[name='description']").type("Its a cypress Automation Course")
cy.xpath("//textarea[@id='description']").type(this.jsondata.courseDescription)
cy.get("input[name='instructorName']").type(this.jsondata.name)
cy.get("input[name='price']").type(this.jsondata.price)
cy.get("input[name='startDate']").click()
//cy.xpath("//div[@class='react-datepicker__current-month']")
//cy.xpath("//button//span").click({force:true})
cy.xpath("//div[@class='react-datepicker__month']/div/div")
.each(function(ele)
{
 cy.log(ele.text())
 if (ele.text().includes("27")) {
    cy.wrap(ele).click({force:true})
     
 }
 
   
    });
    cy.get("input[name='endDate']").click()
    cy.wait(3000)
    cy.xpath("(//div[@aria-label='month  2022-11'])/div/div")
.each(function(ele)
{
 cy.log(ele.text())
 if (ele.text().includes("21")) {
    cy.wrap(ele).click()
     
 }
 
   
    });
    cy.get("button[class='menu-btn'] ").click()
    cy.xpath("//div[contains(@class,'menu-items')]/button")
    .each(function(ele)
{
 cy.log(ele.text())
 if (ele.text().includes(this.jsondata.CATEGORY)) {
   
    cy.wrap(ele).click({force:true})
     
 }
 
   
    });
    cy.get("button[class='action-btn']").click()
    //cy.xpath("//table[contains(@class,'courses')]//tbody//tr").should("have.length",2);
    
   })
   
   })
