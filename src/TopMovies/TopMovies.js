import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './TopMovies.css'

const TopMovies = ({movies, getMovieDetails}) => {
  const topMovies = movies.filter(movie => movie.average_rating >= 7)
  const topMovieCards = topMovies.map(movie => {
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
    <div className='top-movie-wrapper'>
      <h2>Top Rated Movies</h2>
      <div className='top-movie-container'>
        {topMovieCards}
      </div>
    </div>
  )
}

export default TopMovies
