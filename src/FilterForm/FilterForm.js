import React from 'react'
import { Link } from 'react-router-dom'


const FilterForm = ({filterGenre}) => {

  const handleChange = (genre) => {
    filterGenre(genre)
  }


  return (
  
    <div className="genre-filter">
        <label className="filter-label" name="genre">Choose a genre:</label><br></br>
          <select className="genre" name="genre" onChange={({target: {value}}) => handleChange(value)}>
            <option value="All">All</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Animation">Animation</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Drama">Drama</option>
            <option value="Family">Family</option>
            <option value="Fantasy">Fantasy</option>
            <option value="History">History</option>
            <option value="Horror">Horror</option>
            <option value="Music">Music</option>
            <option value="Romance">Romance</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Thriller">Thriller</option>
            <option value="War">War</option>
          </select>
      </div>
    )

}




export default FilterForm