import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const FilteredMovies = ({filteredMovies, genre, getMovieDetails}) => {
  const filteredMovieCards = filteredMovies.map(movie => {
    return (
      <MovieCard
        image={movie.poster_path}
        title={movie.title}
        getMovieDetails={getMovieDetails}
        id={movie.id}
        key={movie.id}
        />
      )
  })

  return (
    <div className='all-movie-wrapper'>
    <h2>{genre}</h2>
    <div className='all-movie-container'>
      {filteredMovieCards}
    </div>
  </div>
  )
}


export default FilteredMovies