import React, {Component} from 'react';
import './App.css';
import AllMovies from '../AllMovies/AllMovies';
import Nav from '../Nav/Nav';
import CurrentMovie from '../CurrentMovie/CurrentMovie';
import MovieCarousel from '../MovieCarousel/MovieCarousel';
import { Route } from 'react-router-dom';
import {getData} from '../apiCalls'


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      currentMovie: null,
      filteredMovies: [],
      error: null,
      isLoading: true
    }
  }

  componentDidMount() {
    getData('/movies')
    .then(data => console.log(data.movies))
    .then(data => this.getGenres(data.movies))
    .catch(error => this.setState({error: error}))
  }

  getGenres = async (movies) => {
    
    const moviesMapped = []
    for(const movie of movies) { 
      const singleMovie = await getData(`movies/${movie.id}`)
      movie.genres = singleMovie.movie.genres
      moviesMapped.push(movie)
    }
    this.setState({movies: moviesMapped, filteredMovies: moviesMapped, isLoading: false})
  }

  filterGenre = (genre) => {
    if(genre === 'All') {
      this.setState({filteredMovies: this.state.movies})
      return
    }

    const filteredMovies = this.state.movies.filter(movie => movie.genre.includes(genre))
    this.setState({filteredMovies: filteredMovies})
  }



  render() {
    return (
      <div>
        <div>
        <Nav />
        {this.state.error && <h2>{this.state.error.message}</h2>}
        </div>

        <main className='App'>
        <Route exact path='/' render={() => {
          return (
            <div>
              <MovieCarousel movies={this.state.movies}/>
              <AllMovies movies={this.state.movies} />
            </div>
        )}}/>
        <Route exact path='/:movieId' render={({match}) => {
          let id= parseInt(match.params.movieId)
          return <CurrentMovie currentMovieId={id} />
        }}/>
        </main>
      </div>
    )
  }

}

export default App;
