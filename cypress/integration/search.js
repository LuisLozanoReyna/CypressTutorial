describe ('Search elements',() =>{
    beforeEach(()=>{
        cy.visit('/');

    })
    it('Search for elements with multiple results', () =>{
        cy.fixture('home').then((home) =>{
            cy.get(home.SearchBar).type('dress')
            cy.get(home.SearchBttn).click();
        })
        cy.fixture('SearchResults').then((searchResults)=>{
            cy.get(searchResults.SearchItem).should('contain','dress');
        })
    })
    it('Search for elements with no results',()=>{
            cy.fixture('home').then((home) =>{
            cy.get(home.SearchBar).type('qwerty')
            cy.get(home.SearchBttn).click();
      })
      cy.fixture('SearchResults').then((searchResults)=>{
        cy.get(searchResults.Alert).should('contain','No results were found for your search');
         })
    })
})