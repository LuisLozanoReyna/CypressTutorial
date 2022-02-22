describe ('Search elements',() =>{
    beforeEach(()=>{
        cy.visit('/');

    })
    it('Search for elements with multiple results', () =>{
            cy.search('dress');
            cy.fixture('SearchResults').then((searchResults)=>{
            cy.get(searchResults.SearchItem).should('contain','dress');
         })
    })
    it('Search for elements with no results',()=>{
            cy.search('qwerty');
            cy.fixture('SearchResults').then((searchResults)=>{
            cy.get(searchResults.Alert).should('contain','No results were found for your search');
             })
    })
})