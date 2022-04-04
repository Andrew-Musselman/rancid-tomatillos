import React, {Component} from 'react';
import './App.css';
import AllMovies from '../AllMovies/AllMovies';
import Nav from '../Nav/Nav';
import CurrentMovie from '../CurrentMovie/CurrentMovie';
import MovieCarousel from '../MovieCarousel/MovieCarousel';
import { Route } from 'react-router-dom';
import {getData} from '../apiCalls'
import FilteredMovies from '../FilteredMovies/FilteredMovies';
import loading from '../loading.gif'


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      currentMovie: null,
      filteredMovies: [],
      selectedGenre: null,
      error: null,
      isLoading: true
    }
  }

  componentDidMount() {
    getData('/movies')
    .then(data => this.getGenres(data))
    .catch(error => this.setState({error: error}))
    
  }

  getGenres = async (movies) => {
    const moviesMapped = []
    for(const movie of movies.movies) { 
      const singleMovie = await getData(`movies/${movie.id}`)
      movie.genres = singleMovie.movie.genres
      moviesMapped.push(movie)
    }
    this.setState({movies: moviesMapped, filteredMovies: moviesMapped, isLoading: false})
  }

  filterGenre = (genre) => {
    if(genre === 'All') {
      this.setState({filteredMovies: this.state.movies, selectedGenre: null})
      return
    }

    const filteredMovies = this.state.movies.filter(movie => movie.genres.includes(genre))
    this.setState({filteredMovies: filteredMovies, selectedGenre: genre})
  }



  render() {
    return (
      <div>
        <div>
        <Nav filterGenre={this.filterGenre}/>
        {this.state.error && <h2>{this.state.error.message}</h2>}
        </div>
        {this.state.isLoading && <img className='loading-gif' src={loading}/>}
        <main className='App'>
        <Route exact path='/' render={() => {
          return (
            <div>
              <MovieCarousel movies={this.state.movies}/>
              {this.state.selectedGenre ? <FilteredMovies genre={this.state.selectedGenre} filteredMovies={this.state.filteredMovies}/> :
              <AllMovies movies={this.state.movies} />}
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
