import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ({image, title, id, getMovieDetails}) =>{
  return (
    <div className='movie-card'>
      <Link to={`/${id}`} >
        <img src={image} alt={`${title}'s poster`} className='movie-card-img'/>
      </Link>
    </div>
  )
}

export default MovieCard;
