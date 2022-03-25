const apiPath = 'https://rancid-tomatillos.herokuapp.com/api/v2'

getAllMovies = () => {
  fetch(`${apiPath}/movies`)
  .then(response => handleResponse(response))
}

getSingleMovie = (movieID) => {
  fetch(`${apiPath}/movies/:${movieID}`)
  .then(response => handleResponse(response))
}

handleResponse = (response) => {
  if(!response.ok) {
    throw new Error('Something went wrong!')
  } else {
    return response.json()
  }
}

export { getAllMovies, getSingleMovie }