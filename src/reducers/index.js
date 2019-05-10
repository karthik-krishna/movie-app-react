import { combineReducers } from 'redux'
import movies from './movie'
import upcomingMovies from './upcomingMovies'

export default combineReducers({
  movies:movies,
  upcomingMovies:upcomingMovies
})