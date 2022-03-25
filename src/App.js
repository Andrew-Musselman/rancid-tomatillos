import React, {Component} from 'react';
import './App.css';
import aMovie from './dummy-movie-data';
import movieData from './movie-data';
import AllMovies from './AllMovies';
import TopMovies from './TopMovies'
import Nav from './Nav';
import CurrentMovie from './CurrentMovie';


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      currentMovie: ''
    }
  }

  componentDidMount() {
    this.setState({movies: movieData.movies})
  }

  getMovieDetails = (id) => {
    const currentMovie = this.state.movies.find(movie => movie.id === id)
    this.setState({currentMovie: currentMovie})
  }

  hideMovieDetails = () => {
    this.setState({currentMovie: ''})
  }

  render() {
    return (
      <div>
        <Nav />
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
