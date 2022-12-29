///<reference types = "cypress"/>

describe('window command in cypress', function () {
    it('window comand in cypress', function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.window().should((win) => {
            // console.log(win.location.host)
            // console.log(win.location.hostname)
            // console.log(win.location.hash)
            // console.log(win.location.href)

            expect(win.location.host).to.eq('www.webdriveruniversity.com')
            expect(win.location.hash).to.eq("")
            expect(win.location.hostname).to.eq('www.webdriveruniversity.com')
            expect(win.location.href).to.eq('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            expect(win.location.pathname).to.eq("/Contact-Us/contactus.html")
            expect(win.location.protocol).to.eqls('http:')

            // Cypress 



            // cy.location('hash').should('eq',"")
            cy.location('host').should('eq', 'www.webdriveruniversity.com')
            cy.location('protocal').should('eq', 'http:')
            cy.location('pathname').should('eq', '/Contact-Us/contactus.html')
        })

    })

    it('window reload and with cypress', function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        // cy.window().should(function(win){
        //    console.log( win.location.reload())
        // })

        // cypress
        cy.reload()
    })


    it('window history object and with cypress', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('p[class]').eq(2).click()
        cy.window().should(function (win) {
            console.log(win.history.forward())
            console.log(win.history.back())
            console.log(win.history.go(1))
            console.log(win.history.go(-1))
        })
        // cypress 
        //cy.go('back')
        //cy.go('forward')

        //cy.go(1)
        //cy.go(-1)

        
    })

    it.only('verify the title with Cypress command',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // set
        cy.setCookie('username','Arjun123')
        //get
        cy.getCookie('username')
        // update 
        cy.setCookie('username','Alen')
        // get 
        cy.getCookie('username')
        // Add another coockies
        //cy.get('password','123')

        // clearing cookies
        cy.clearCookie('password')
         
        // clear All cookies
        cy.clearCookies()

    })





})