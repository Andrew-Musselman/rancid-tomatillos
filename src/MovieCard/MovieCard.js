import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ({image, title, id, getMovieDetails}) =>{
  return (

      <Link to={`/${id}`} >
      <div className='movie-card'>
        <img src={image} alt={`${title}'s poster`} />
        <p>{title}</p>
        </div>
        </Link>

  )
}

export default MovieCard;
