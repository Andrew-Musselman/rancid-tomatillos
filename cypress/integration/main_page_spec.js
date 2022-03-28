describe('Main', () => {
  it('As a user, I should be able to visit the page and see a title', () => {
    cy.visit('http://localhost:3000')
      .contains('Rancid Tomatillos');
  })
  it('As a user, I should be able to see a section for top rated movies', () => {
    cy.visit('http://localhost:3000')
      .contains('Top Rated Movies');
  })
  it('As a user, I should be able to see a section for all rated movies', () => {
    cy.visit('http://localhost:3000')
      .contains('All Movies');
  })
  it('As a user, I should see movie cards', () => {
    cy.visit('http://localhost:3000')
      .get('div[class="movie-card"]');
  })
});
