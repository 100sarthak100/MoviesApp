import axios from 'axios';

export const fetchMovies = () => axios.get('https://wookie.codesubmit.io/movies', {
 headers: {
   Authorization: "Bearer Wookie2019" 
 }
})
