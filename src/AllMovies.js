import React from 'react';

const AllMovies = ({movies}) => {

  const movieCards = movies.map(movie => {
    return (
      <MovieCard
        image={movie.img}
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
