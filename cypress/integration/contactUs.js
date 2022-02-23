describe('Contact us  - customer service',()=>{
    beforeEach(()=>{
        cy.visit('/');
    })
    it('Navigate to Contact us site',()=>{
        cy.fixture('home').then((home)=>{
           cy.get(home.ContactUsLink).click();
        })
     })
})

describe('Contact us  - customer service',()=>{
    it('Send Message to Customer Service',()=>{
    
     /*
     Command to fill Contact us form
     type, email, orderReference, message
     */
     cy.contactUs('Customer service','test@test.com',10001,'Need a refund, item broken.');
     cy.fixture('contactUs').then((contactUs)=>{
        cy.get(contactUs.SuccessMessagw).should('contain','Your message has been successfully sent to our team.');
     })

     })
 })

    
      
