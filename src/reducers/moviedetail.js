const initialState = {
    detail: {},
    similarmovies: {},
    credits: {},
    reviews: {},
}
const movieDetail = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_MOVIES_DETAILS':
            return Object.assign({}, state, { detail: action.movieDetail });
        case 'GET_SIMILAR_MOVIES':
            return Object.assign({}, state, { similarmovies: action.similarmovies });
        case 'GET_MOVIE_CREDITS':
            return Object.assign({}, state, { credits: action.credits });
        case 'GET_MOVIE_REVIEWS':
            return Object.assign({}, state, { reviews: action.reviews });
        default:
            return state
    }
}


export default movieDetail