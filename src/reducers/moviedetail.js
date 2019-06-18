const initialState={
    detail:{},
    similarmovies:{}
}
const movieDetail = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_MOVIES_DETAILS':
            return Object.assign({}, state, {detail: action.movieDetail});
        case 'GET_SIMILAR_MOVIES':
            return Object.assign({}, state, {similarmovies: action.similarmovies});
        default:
            return state
    }
}


export default movieDetail