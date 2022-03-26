import React, {Component} from 'react';
import './App.css';
import AllMovies from './AllMovies';
import TopMovies from './TopMovies'
import Nav from './Nav';
import CurrentMovie from './CurrentMovie';
import {
  getAllMovies, 
  getSingleMovie 
} from './apiCalls'


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
          { this.state.currentMovie && <CurrentMovie currentMovie={this.state.currentMovie} hideMovieDetails={this.hideMovieDetails}/> }
          {!this.state.currentMovie &&
          <div>
            <TopMovies movies={this.state.movies} getMovieDetails={this.getMovieDetails}/>
            <AllMovies movies={this.state.movies} getMovieDetails={this.getMovieDetails}/>
          </div> }
        </main>
      </div>
    )
  }

}

export default App;
