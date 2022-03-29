import React from 'react';
import './CurrentMovie.css';
import {Link} from 'react-router-dom';

const CurrentMovie = ({currentMovie, hideMovieDetails}) => {

  return (
      <div className='current-movie-details'>
        <img src={currentMovie.backdrop_path} alt={`Still from ${currentMovie.title}`} />
        <h2>{currentMovie.title}</h2>
        <h3>{currentMovie.tagline}</h3>
        <p>Released: {`${new Date(currentMovie.release_date).toLocaleDateString({year: 'numeric', month: '2-digit', day: '2-digit'})}`} | Run Time: {`${currentMovie.runtime} minutes`}</p>
        <p>{currentMovie.overview}</p>
        <p>{currentMovie.genre}</p>
        <p>{`Average Rating: ${parseFloat(currentMovie.average_rating).toFixed(2)}`}</p>
        <p>{`Budget: ${currentMovie.budget} | Box Office: ${currentMovie.revenue}`}</p>
        <Link to='/'><button>Back</button></Link>
      </div>
  )
}

export default CurrentMovie;
