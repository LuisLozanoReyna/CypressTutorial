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
        cy.fixture('contactUs').then((contactUs)=>{
           cy.get(contactUs.subjectHeading).select('Customer service');
           cy.get(contactUs.emailAddress).type("test@test.com");
           cy.get(contactUs.orderReference).type('101');
           cy.get(contactUs.Message).type("Need a refund, item broken");
           cy.wait(3000);
           cy.get(contactUs.sendButton).click();
           cy.get(contactUs.sendButton).click();

        })
     })
 })

    
      
