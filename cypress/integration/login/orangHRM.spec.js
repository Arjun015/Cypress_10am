///<reference types ="cypress"/>

describe('verify the functionality of OraHRM',function(){


    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
    })

    
    it('TC_01-OrangeHRM login functionality with valid Credentials',function(){
        //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.get('div[class="oxd-brand-banner"]').should('be.visible')

    })


    it('TC_02-OrangeHRM login functionality with Invalid Credentials',function(){
        //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admiin')
        cy.get('input[name="password"]').type('admin1223')
        cy.get('button[type="submit"]').click()
        cy.get('div[class="oxd-alert oxd-alert--error"]').should('be.visible')

    })
})