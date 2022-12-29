///<reference types ="cypress"/>



// describe('Verify concept of hooks in js',function(){

//     before(function(){
//         cy.log('Before everthing')
//     })
//     after(function(){
//         cy.log('after every thing')
//     })
//     beforeEach(function(){
//         cy.log('I am before each testcase')  
//     })
//     afterEach(function(){
//         cy.log('I am after every testcase')
//     })

//     it('Testcase one',function(){
//         cy.log('Testcase one')
//     })

//     it('Testcase two',function(){
//         cy.log('Testcase two')  
//     })

// })
describe('Hooks in cypress',function(){
    before(function(){
        cy.log('I am executing before')
    })

    after(function(){
        cy.log('I am executing after')
    })
    
    beforeEach(function(){
        cy.log('I am executing beforeEach of Testcase')
    })
    
    
    
    afterEach(function(){
        cy.log('I am executing afterEach of testCase')
    })
    
   


    it('TC_01- testcase-1',function(){
        cy.log('TestCase-1')
    })
    
    it('TC_02- testcase-2',function(){
        cy.log('TestCase-2')
    })

})
