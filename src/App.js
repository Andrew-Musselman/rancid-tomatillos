import React, {Component} from 'react';
import './App.css';
import movieData from './movie-data';
import AllMovies from './AllMovies';


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    this.setState({movies: movieData.movies})
  }

  render() {
    return (
      <main className='App'>
        <AllMovies movies={this.state.movies}/>
      </main>
    )
  }

}

export default App;
