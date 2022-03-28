const apiPath = 'https://rancid-tomatillos.herokuapp.com/api/v2'

const getAllMovies = () => {
  return fetch(`${apiPath}/movies`)
  .then(response => handleResponse(response))
}

const getSingleMovie = (movieID) => {
  return fetch(`${apiPath}/movies/${movieID}`)
  .then(response => handleResponse(response))
}

const handleResponse = (response) => {
  if(!response.ok) {
    throw new Error('Something went wrong!')
  } else {
    return response.json()
  }
}

export { getAllMovies, getSingleMovie }