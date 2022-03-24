import React, {Component} from 'react';
import './App.css';
import movieData from './movie-data';
import AllMovies from './AllMovies';
import TopMovies from './TopMovies';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [movieData]
    }
  }
  render() {
    return (
      <main>
        <TopMovies movies={this.state.movies}/>
        <AllMovies movies={this.state.movies}/>
      </main>
    )
  }

}

export default App;
