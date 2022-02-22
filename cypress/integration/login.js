describe('Login',()=>{
    beforeEach(()=>{
        cy.visit('/');
    })
    it('Login with invalid credentials',()=>{
            cy.login('something','other');
            cy.fixture('login').then((login)=>{
                cy.get(login.InvalidMessageBanner).should('contain','Invalid email address.');

            })
        })
})