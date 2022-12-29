///<reference types="cypress"/>

describe('verify the Slider functionality', function () {
    it('Slider Test - input type=range', function () {
        cy.visit('http://127.0.0.1:5500/cypress/integration/Slider/index.html')
        cy.get('#rangeone').invoke('val','63').trigger('change')
        cy.get('p#one').should('have.text',"60")
        cy.get('#rangetwo').invoke('val','76').trigger('change')
        cy.get('p#two').should('have.text',"80")
    })

    it('Slider Test - Built from CSS',function(){
        cy.visit('http://127.0.0.1:5500/cypress/integration/Slider/index2.html')
        cy.get('div#slide-2').click({force:true})
        cy.get('div#slide-3').click({force:true})
        cy.get('a[href="#slide-1"]').click()
        cy.url().should("include", "#slide-1")
    })

    it.only('Slider Test - http://testautomationpractice.blogspot.com/',function(){
        cy.visit('http://testautomationpractice.blogspot.com/')
        cy.get('div#slider span').invoke('attr',"style",'left:80%')

    })
})