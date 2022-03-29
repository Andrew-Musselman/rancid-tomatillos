import React, {Component} from 'react';
import './App.css';
import AllMovies from '../AllMovies/AllMovies';
import TopMovies from '../TopMovies/TopMovies'
import Nav from '../Nav/Nav';
import CurrentMovie from '../CurrentMovie/CurrentMovie';
import { Route, NavLink } from 'react-router-dom';
import {
  getAllMovies,
  getSingleMovie
} from '../apiCalls'


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      currentMovie: '',
      error: ''
    }
  }

  componentDidMount() {
    getAllMovies()
    .then(data => this.setState({movies: data.movies}))
    .catch(error => this.setState({error: error}))
  }

  getMovieDetails = (id) => {
    const currentMovie = this.state.movies.find(movie => movie.id === id)
    getSingleMovie(currentMovie.id)
    .then(data => this.setState({currentMovie: data.movie}))
    .catch(error => this.setState({error: error}))
  }

  hideMovieDetails = () => {
    this.setState({currentMovie: ''})
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
              <TopMovies movies={this.state.movies} getMovieDetails={this.getMovieDetails}/>
              <AllMovies movies={this.state.movies} getMovieDetails={this.getMovieDetails}/>
            </div>
        )}}/>
        <Route exact path='/:movieId' render={({match}) => {
          let id= parseInt(match.params.movieId)
          this.getMovieDetails(id)
          return <CurrentMovie currentMovie={this.state.currentMovie} hideMovieDetails={this.hideMovieDetails}/>
        }}/>
        </main>
      </div>
    )
  }

}

export default App;
