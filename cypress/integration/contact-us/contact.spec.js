///<reference types ="cypress"/>


describe('verify the contact-us form functionality',function(){

    beforeEach(function(){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    })


    it('TC_01-verify the contect-us logo',function(){
       // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('have.text',"CONTACT US")
    })

    it('TC_02-verify fill the contact-us form with SUBMIT button',function(){
       // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('Aarti')
        cy.get('input[name="last_name"]').type('kate')
        cy.get('input[name="email"]').type('aarti123@gmail.com')
        cy.get('textarea[name="message"]').type('  I am very intelligent')
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('contain',"Thank You for your Message!")
    })

    it('TC_03-verify fill the contact-us form with incorrect password',function(){
        //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('Aarti')
        cy.get('input[name="last_name"]').type('kate')
        cy.get('input[name="email"]').type('aarti12')
        cy.get('textarea[name="message"]').type('  I am very intelligent')
        cy.get('input[type="submit"]').click()
        cy.get('body').should('contain',"Error: Invalid email address")
    })

    it('TC_04-verify fill the contact-us form with RESET button',function(){
        //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('Aarti')
        cy.get('input[name="last_name"]').type('kate')
        cy.get('input[name="email"]').type('aarti123@gmail.com')
        cy.get('textarea[name="message"]').type('  I am very intelligent')
        cy.get('input[type="reset"]').click()
        
        cy.get('input[name="first_name"]').should('have.text',"")
        cy.get('input[name="last_name"]').type('have.text',"")
        cy.get('input[name="email"]').type('have.text',"")
        cy.get('textarea[name="message"]').type('have.text',"")
    })
})