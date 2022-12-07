

describe('Handle google search ', () => {
    it('select values from google search', () => {
        cy.visit("https://www.google.com/")
        //cy.scrollTo("bottom",{ensureScrollable:false},5000)
        cy.xpath("//button//div[.='Alle akzeptieren']").click({force:true})
        cy.get("input[name='q']").type("ruhi",{delay:100})
       cy.selectvalue("//div[contains(@role,'option')]//div[1]//span","Ruhige Musik")
        
    });
    it.only('login', () => {
        cy.visit("https://ineuron-courses.vercel.app/login");
        cy.login("ineuron@ineuron.ai","ineuron")

        
    });
});