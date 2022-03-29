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
      <section className='current-movie-page'>
      {this.state.isLoading ? <h1>Loading...</h1> :
        <article className='current-movie-details' >
          <div className='current-movie-image' style={{ backgroundImage: `linear-gradient(rgb(255 255 255 / 0%), rgb(179 176 176)), url(${this.state.currentMovie.backdrop_path})` }}>
          </div>
          <div className='current-movie-text'>
            <h2>{this.state.currentMovie.title}</h2>
            <h3>{this.state.currentMovie.tagline}</h3>
            <p><b>Released:</b> {`${new Date(this.state.currentMovie.release_date).toLocaleDateString({year: 'numeric', month: '2-digit', day: '2-digit'})}`} | <b> Run Time: </b> {`${this.state.currentMovie.runtime} minutes`}</p>
            <p>{this.state.currentMovie.overview}</p>
            <p>{this.state.currentMovie.genre}</p>
            <p><b>Average Rating:</b> {`${parseFloat(this.state.currentMovie.average_rating).toFixed(2)}`}</p>
            <p><b>Budget:</b> {`${this.state.currentMovie.budget}`} | <b> Box Office: </b>{`${this.state.currentMovie.revenue}`}</p>
            <Link to='/'><button>Back</button></Link>
          </div>
        </article> }
      </section>
    )
  }
}

export default CurrentMovie;
