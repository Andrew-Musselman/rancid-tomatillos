const getSingleMovieData = () => {
  return {
    statusCode: 200,
    ok: true,
      body: {
        movies: [{
          title: 'Money Plane',
          poster_path: 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg',
          backdrop_path: 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg',
          release_date: '2020-09-29',
          overview: 'A professional thief with $40 million in debt and his family\'s life on the line must commit one final heist - rob a futuristic airborne casino filled with the world\'s most dangerous criminals.',
          genres: [
            'Action'
          ],
          budget: 0,
          revenue: 0,
          runtime: 82,
          tagline: '',
          average_rating: 6.625
        }]
      }
  }
}

describe('Movie Details', () => {
  it('As a user, as the movie details are loading, I see the words loading', () => {
    cy.intercept('GET', getSingleMovieData())
    cy.visit('http://localhost:3000/694919')
    .contains('h1', 'Loading...')
  })

  it('As a user, I should be able to see a movie title', () => {
    cy.intercept('GET', getSingleMovieData())
    cy.visit('http://localhost:3000/694919')
    .contains('h2', 'Money Plane')
  })

  it('As a user, I should be able to see a movie image', () => {
    cy.intercept('GET', getSingleMovieData())
    cy.visit('http://localhost:3000/694919')
    .get('img')
  })

  it('As a user, I should be able to see movie details', () => {
    cy.intercept('GET', getSingleMovieData())
    cy.visit('http://localhost:3000/694919')
    .contains('p')
  })

  it('As a user, I should be able see the back button to return to the home page', () => {
    cy.intercept('GET', getSingleMovieData())
    cy.visit('http://localhost:3000/694919')
    .get('button')
  })

  it('As a user, I should be able to click the back button to return to the home page', () => {
    cy.intercept('GET', getSingleMovieData())
    cy.visit('http://localhost:3000/694919')
    .get('button')
    .click()
    .url().should('eq', 'http://localhost:3000/')
  })

  it('As a user, I should be able to click the page title to return to the home page', () => {
    cy.intercept('GET', getSingleMovieData())
    cy.visit('http://localhost:3000/694919')
    .get('h1')
    .first()
    .click()
    .url().should('eq', 'http://localhost:3000/')
  })

})
