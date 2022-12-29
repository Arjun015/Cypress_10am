///<reference types = "cypress"/>


describe('verify the RadioButton functinality',function(){

    beforeEach(function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    it('verify the radioButton with check',function(){

        cy.get('input[value="green"]').check().should('be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')
       
    })

    it('verify the check all radio button with check function',function(){
        cy.get('input[name ="color"]').each(function(el){
            cy.wrap(el).as('radioBtn')
            cy.get('@radioBtn').check().should('be.checked')
        })
    })


    //disabled
    it.only('check whether the particular element is disabled',function(){
        cy.get('input[value="cabbage"]').should('be.disabled')

    })
    // enabled
    it.only('check whether the particular element is enabled', function () {
        cy.get('input[value="lettuce"]').should('be.enabled')
    })
})