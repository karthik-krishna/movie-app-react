const upcomingMovies = (state = {}, action) => {
  switch (action.type) {
    case 'GET_UPCOMING_MOVIES':
      return Object.assign({}, state, action.upcomingmovies);
     case 'GET_MOVIES_DETAILS':
      return Object.assign({}, state, action.movieDetail);
    default:
      return state
  }
}


export default upcomingMovies