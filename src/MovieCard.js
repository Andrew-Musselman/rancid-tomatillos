import React from 'react';
import './MovieCard.css'

const MovieCard = ({image, title, id, getMovieDetails}) =>{
  return (
    <div className='movie-card' onClick={() => getMovieDetails(id)}>
      <img src={image} alt={`${title}'s poster`} />
      <p>{title}</p>
    </div>
  )
}

export default MovieCard;
