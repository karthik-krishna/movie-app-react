const movies = (state = {}, action) => {
  switch (action.type) {
    case 'GET_MOVIES_BASED_ON_SEARCH':
      return Object.assign({}, state, action.movies);
     case 'GET_MOVIES_DETAILS':
      return Object.assign({}, state, action.movieDetail);
    default:
      return state
  }
}


export default movies