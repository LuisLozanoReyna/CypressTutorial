describe('Login',()=>{
    beforeEach(()=>{
        cy.visit('/');
    })
    it('Login with invalid credentials',()=>{
        /*
        Command to enter credentials
        username, password
        */
            cy.login('something','other');
            cy.fixture('login').then((login)=>{
                cy.get(login.InvalidMessageBanner).should('contain','Invalid email address.');

            })
        })
})