///<reference types = "cypress"/>

describe('verify the details functionality of Table',function(){
    it('TC_01-verify the sum of Table one',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        let sum = 0
        cy.get('#t01').find('tr').each(function(el,index){
            //cy.log(el)
            if(index !==0){
               // cy.log(el.children('td').last().text())
               sum = sum + Number(el.children('td').last().text())

            }

        }).then(function(){
            //cy.log(sum)
            expect(sum).to.eq(159)

        })
        
    })


    it('TC_02-verify the sum of Table Two',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        let sum = 0
        cy.get('#t02').find('tr').each(function(el,index){
            //cy.log(el)
            if(index !==0){
               // cy.log(el.children('td').last().text())
               sum = sum + Number(el.children('td').last().text())

            }

        }).then(function(){
            //cy.log(sum)
            expect(sum).to.eq(163)

        })
        
    })

    it('TC_03-verify the  table using utility',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.ValidateTable(1,159)
        cy.ValidateTable(2,163)
        

    })
})