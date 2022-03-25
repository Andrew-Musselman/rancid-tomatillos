import React from 'react';

const CurrentMovie = ({currentMovie}) => {

  return (
    <div className='current-movie-details'>
      <img src={currentMovie.backdrop_path} alt={`Still from ${currentMovie.title}`} />
      <h2>{currentMovie.title}</h2>
      <p>{`Released: ${currentMovie.release_date} | Run Time: ${currentMovie.runtime} minutes`}
      <p>{currentMovie.tagline}</p>
      <p>{currentMovie.overview}</p>
      <p>{currentMovie.genre}</p>
      <p>{`Average Rating: ${currentMovie.average_rating}`}</p>
      <p>{`Budget: ${currentMovie.budget} | Box Office: ${currentMovie.revenue}`}</p>
    </div>
  )
}

export default CurrentMovie;
