describe('Create a new course', () => {
    it('Add a new course', () => {
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.viewport(1920,1080);
        cy.get("input[name='email1']").type("ineuron@ineuron.ai").should("have.value","ineuron@ineuron.ai")
        cy.get("input[name='password1']").type("ineuron").should("have.value","ineuron")
        cy.get('.submit-btn').should("have.enabled").click()
        cy.wait(2000)
cy.contains("Manage").realHover();
cy.wait(3000)
cy.contains("Manage Courses").click({force:true})
cy.xpath("//table[contains(@class,'courses')]//tbody//tr").should("have.length",0);
cy.contains("Add New Course ").click({force:true})
//cy.get("#thumbnail").attachFile("Bestquotes.jpg");
cy.get("input[name='name']").type("CypressAutomation")
//cy.get("input[name='description']").type("Its a cypress Automation Course")
cy.xpath("//textarea[@id='description']").type("Its a cypress Automation Course")
cy.get("input[name='instructorName']").type("RuhiShelar")
cy.get("input[name='price']").type(10000)
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
 if (ele.text().includes("11")) {
    cy.wrap(ele).click()
     
 }
 
   
    });
    cy.get("button[class='menu-btn'] ").click()
    cy.xpath("//div[contains(@class,'menu-items')]/button")
    .each(function(ele)
{
 cy.log(ele.text())
 if (ele.text().includes("Web Development")) {
    cy.wrap(ele).click({force:true})
     
 }
 
   
    });
    cy.get("button[class='action-btn']").click()
    cy.xpath("//table[contains(@class,'courses')]//tbody//tr").should("have.length",11);
    
    })
})
