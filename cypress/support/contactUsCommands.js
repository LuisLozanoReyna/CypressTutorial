Cypress.Commands.add('contactUs',(Subject,email, orderRef, Message)=>{
        cy.fixture('contactUs').then((contactUs)=>{
        cy.get(contactUs.subjectHeading).select(Subject);
        cy.get(contactUs.emailAddress).type(email);
        cy.get(contactUs.orderReference).type(orderRef);
        cy.get(contactUs.Message).type(Message);
        cy.get(contactUs.sendButton).click();
    })
})
