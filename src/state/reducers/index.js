import { combineReducers } from 'redux'
import movies from './movie'
import upcomingMovies from './upcomingMovies'
import moviedetail from './moviedetail'

export default combineReducers({
  movies:movies,
  moviedetail:moviedetail,
  upcomingMovies:upcomingMovies
})