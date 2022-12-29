///<reference types = "cypress"/>

describe('verify the checkBox functionality',function(){
    beforeEach(function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    // check() & uncheck()

    it('checkBox functionality with check() & uncheck() method',function(){
       
        cy.get('input[value="option-1"]').check().should('be.checked')
        cy.get('input[value="option-1"]').uncheck().should('not.be.checked')

    })
     
    //  click()

    it('checkBox functionality with click() method',function(){
        
        cy.get('input[value="option-2"]').click().should('be.checked')
        cy.get('input[value="option-2"]').click().should('not.be.checked')

    })

    it('verify the  mutiple check box with checked() and unchecked() function',function(){
        
        cy.get('input[type="checkbox"]').each(function(el){
            cy.log(el)
            cy.wrap(el).as('checkBox')
            cy.get('@checkBox').check().should('be.checked')
            cy.get('@checkBox').uncheck().should('not.be.checked')
        })
    })
    
})