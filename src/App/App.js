import React, {Component} from 'react';
import './App.css';
import AllMovies from '../AllMovies/AllMovies';
import TopMovies from '../TopMovies/TopMovies'
import Nav from '../Nav/Nav';
import CurrentMovie from '../CurrentMovie/CurrentMovie';
import { Route } from 'react-router-dom';
import {getData} from '../apiCalls'


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      currentMovie: null,
      error: null
    }
  }

  componentDidMount() {
    getData('/movies')
    .then(data => this.setState({movies: data.movies}))
    .catch(error => this.setState({error: error}))
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
              <TopMovies movies={this.state.movies} />
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
