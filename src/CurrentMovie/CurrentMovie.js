import React, { Component } from 'react';
import './CurrentMovie.css';
import {Link} from 'react-router-dom';
import { getSingleMovie } from '../apiCalls';

class CurrentMovie extends Component {
  constructor() {
    super()
    this.state = {
      currentMovie: '',
      isLoading: true
    }
  }

  componentDidMount() {
    getSingleMovie(this.props.currentMovieId)
    .then(data => this.setState({currentMovie: data.movie, isLoading: false}))
  }

  render() {
    return (
      <div>
      {this.state.isLoading ? <h1>Loading...</h1> :
      <div className='current-movie-details'>
        <img src={this.state.currentMovie.backdrop_path} alt={`Still from ${this.state.currentMovie.title}`} />
        <h2>{this.state.currentMovie.title}</h2>
        <h3>{this.state.currentMovie.tagline}</h3>
        <p>Released: {`${new Date(this.state.currentMovie.release_date).toLocaleDateString({year: 'numeric', month: '2-digit', day: '2-digit'})}`} | Run Time: {`${this.state.currentMovie.runtime} minutes`}</p>
        <p>{this.state.currentMovie.overview}</p>
        <p>{this.state.currentMovie.genre}</p>
        <p>{`Average Rating: ${parseFloat(this.state.currentMovie.average_rating).toFixed(2)}`}</p>
        <p>{`Budget: ${this.state.currentMovie.budget} | Box Office: ${this.state.currentMovie.revenue}`}</p>
        <Link to='/'><button>Back</button></Link>
      </div> }
      </div>
    )
  }
}

export default CurrentMovie;
