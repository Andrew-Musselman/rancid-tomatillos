import React from 'react';
import TopMovieCard from '../TopMovieCard/TopMovieCard';
import './MovieCarousel.css'


const MovieCarousel = ({movies, getMovieDetails}) => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  const topMovies = movies.filter(movie => movie.average_rating >= 7)
  const topMovieCards = topMovies.map(movie => {
    return (
      <TopMovieCard
        image={movie.backdrop_path}
        getMovieDetails={getMovieDetails}
        title={movie.title}
        id={movie.id}
        key={movie.id}
      />
    )
  })

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => prevIndex === topMovieCards.length -1 ? 0 : prevIndex +1), 4000
    )
    return () => {
      resetTimeout()
    }
  }, [index, topMovieCards])

    return (
      <div className='top-movies'>
        <h2> Top Rated Movies </h2>
        <div className='slide-show'>
          <div className='slide-show-slider' style={{ transform:'translate(' + (-index * 100) + '%, 0)'}}>
              {topMovieCards.map((movie, index) => (
                <div className='slide' key={index} >{movie}</div>
              ))}
          </div>
          <div className='slide-show-dots'>
            {topMovies.map((_, idx) => (
              <div key={idx} className={`slide-show-dot${index === idx ? ' active' : ''}`} onClick={() => {
                setIndex(idx)
              }}>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}

export default MovieCarousel;
