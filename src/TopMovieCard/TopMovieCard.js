import React from 'react';
import { Link } from 'react-router-dom';
import './TopMovieCard.css';

const TopMovieCard = ({image, title, id, getMovieDetails}) => {
  return (
    <div className='top-movie-card'>
      <Link to={`/${id}`} >
        <img src={image} alt={`${title}'s poster`} className='top-movie-card-img' />
      </Link>
      <p>{title}</p>
    </div>
  )
}

export default TopMovieCard;
