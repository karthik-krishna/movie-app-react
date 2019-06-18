const movieDetail = (state = {}, action) => {
   
    switch (action.type) {
     case 'GET_MOVIES_DETAILS':
      return Object.assign({}, state, action.movieDetail);
    default:
      return state
  }
}


export default movieDetail