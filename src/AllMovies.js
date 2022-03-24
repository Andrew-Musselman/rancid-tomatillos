import React from 'react';
import MovieCard from './MovieCard';

const AllMovies = ({movies}) => {

  const movieCards = movies.map(movie => {
    return (
      <MovieCard
        image={movie.poster_path}
        title={movie.title}
        id={movie.id}
        key={movie.id}
        />
      )
  })

  return (
    <div className='all-movie-container'>
      {movieCards}
    </div>
  )
}

export default AllMovies;
