

describe('Handle google search ', () => {
    it('select values from google search', () => {
        cy.visit("https://www.google.com/")
        //cy.scrollTo("bottom",{ensureScrollable:false},5000)
        cy.xpath("//button//div[.='Alle akzeptieren']").click({forse:true})
        cy.get("input[name='q']").type("Ruhi Shelar",{delay:100})
       cy.xpath("//div[contains(@role,'option')]//div[1]//span")
       .each(function(ele)
       {
        cy.log(ele.text())
        if (ele.text().includes("ruhighund")) {
           cy.wrap(ele).click({forse:true})
            
        }

       })
        
    });
});