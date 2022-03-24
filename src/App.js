import React, {Component} from 'react';
import './App.css';
import movieData from './movie-data';
import AllMovies from './AllMovies';
import Nav from './Nav';


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
      <div>
        <Nav />
        <main className='App'>
          <AllMovies movies={this.state.movies}/>
        </main>
      </div>
    )
  }

}

export default App;
