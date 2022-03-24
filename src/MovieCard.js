import React from 'react';

const MovieCard = ({image, title, id}) =>{
  return (
    <div className='movie-card'>
      <img src={image} alt={`${title}'s poster`} />
      <p>{title}</p>
    </div>
  )
}

export default MovieCard;
