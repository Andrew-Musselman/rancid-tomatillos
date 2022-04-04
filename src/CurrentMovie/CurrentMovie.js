import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {getData} from '../apiCalls';
import loading from '../loading.gif';
import './CurrentMovie.css';

class CurrentMovie extends Component {
  constructor() {
    super()
    this.state = {
      currentMovie: null,
      isLoading: true,
      error: null
    }
  }

  componentDidMount() {
    getData(`movies/${this.props.currentMovieId}`)
    .then(data => this.setState({currentMovie: data.movie, isLoading: false}))
    .catch(err => this.setState({error: err}))
  }

  convertDate(releaseDate) {
    return new Date(releaseDate).toLocaleDateString({year: 'numeric', month: '2-digit', day: '2-digit'})
  }

  formatCurrency(money) {
    return money.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  render() {
    if(this.state.error) {
      return <h2>{this.state.error.message}</h2>
    } else {
      return (
        <section className='current-movie-page'>
        {this.state.isLoading ? <img className='loading-gif' src={loading} alt='loading wheel' /> :
          <article className='current-movie-details' >
            <div className='current-movie-image' style={{ backgroundImage: `linear-gradient(rgb(255 255 255 / 0%), rgb(179 176 176)), url(${this.state.currentMovie.backdrop_path})` }}>
            </div>
            <div className='current-movie-text'>
              <h2>{this.state.currentMovie.title}</h2>
              <h3>{this.state.currentMovie.tagline}</h3>
              <p><b>Released:</b> {`${this.convertDate(this.state.currentMovie.release_date)}`} | <b> Run Time: </b> {`${this.state.currentMovie.runtime} minutes`}</p>
              <p>{this.state.currentMovie.overview}</p>
              <p>{this.state.currentMovie.genres.join(', ')}</p>
              <p><b>Average Rating:</b> {`${parseFloat(this.state.currentMovie.average_rating).toFixed(2)}`}</p>
              <p><b>Budget:</b> {`${this.formatCurrency(this.state.currentMovie.budget)}`} | <b> Box Office: </b>{`${this.formatCurrency(this.state.currentMovie.revenue)}`}</p>
              <Link to='/'><button>Back</button></Link>
            </div>
          </article> }
        </section>
      )
    }
  }
}
export default CurrentMovie;
