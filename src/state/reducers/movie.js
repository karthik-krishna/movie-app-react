const movies = (state = {}, action) => {
  switch (action.type) {
    case 'GET_MOVIES_BASED_ON_SEARCH':
      return Object.assign({}, state, action.movies);
    case 'GET_NOW_PLAYING_MOVIES':
      return Object.assign({}, state, action.nowPlaying);
    case "GET_ERROR":
      return Object.assign({}, state, {error:true});
    default:
      return state
  }
}


export default movies