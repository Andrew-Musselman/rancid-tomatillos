const getAllMovieData = () => {
  return {
    statusCode: 200,
      ok: true,
      body: {
        movies: [{
          id: 694919,
          poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
          backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
          title: "Money Plane",
          average_rating: 6.625,
          release_date: "2020-09-29"
        }]
      }
  }
}

const getSingleMovieData = () => {
  return {
    statusCode: 200,
    ok: true,
      body: {
        movie: [{
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



describe('Main', () => {
  it('As a user, I should be able to visit the page and see a title', () => {
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', getAllMovieData())
    cy.visit('http://localhost:3000')
      .contains('Rancid Tomatillos');
  })

  it('As a user, I should be able to visit the page and see a movie reel logo', () => {
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', getAllMovieData())
    cy.visit('http://localhost:3000')
    .get('nav')
      .find('img').should('be.visible')
  })

  it('As a user, I should be able to see a section for top rated movies', () => {
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', getAllMovieData())
    cy.visit('http://localhost:3000')
      .contains('Top Rated Movies');
  })

  it('As a user, I should be able to see a section for all movies', () => {
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', getAllMovieData())
    cy.visit('http://localhost:3000')
      .contains('All Movies');
  })

  it('As a user, I should see movie cards', () => {
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', getAllMovieData())
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies/:id', getSingleMovieData())
    cy.visit('http://localhost:3000')
      .get('div[class="movie-card"]');
  })

  it('As a user, I should see an error message if the server is down', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
    statusCode: 500,
    ok: false,

    })
    cy.visit('http://localhost:3000')
      .contains('Something went wrong!');
  })

  it('As a user, I should be able to click on a movie card', () => {
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', getAllMovieData())
    cy.visit('http://localhost:3000')
      .get('div[class="movie-card"]')
      .first()
      .click()
      .url().should('eq', 'http://localhost:3000/694919')
  })
});
