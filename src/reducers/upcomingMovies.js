const upcomingMovies = (state = {}, action) => {
  switch (action.type) {
    case 'GET_UPCOMING_MOVIES':
      return Object.assign({}, state, action.upcomingmovies);
    default:
      return state
  }
}


export default upcomingMovies