import axios from 'axios';

export const fetchMovies = (movies) => {
  return {
    type: 'GET_MOVIES_BASED_ON_SEARCH',
    movies
  }
};

export const fetchUpcomingMovies = (movies) => {
  return {
    type: 'GET_UPCOMING_MOVIES',
    movies
  }
};

export const fetchMovieDetails = (movieDetail) => {
  return {
    type: 'GET_MOVIES_DETAILS',
    movieDetail
  }
};

export const getMovies = (query,page) => {
  return (dispatch) => {
    return axios.get('https://api.themoviedb.org/3/search/movie?api_key=84c481f0a53d6c1b488b947bd25286ba&query='+query+'&page='+page)
      .then(response => {
        dispatch(fetchMovies(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const getUpcomingMovies = (page) => {
  return (dispatch) => {
    return axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=84c481f0a53d6c1b488b947bd25286ba&language=en-US&page='+page)
      .then(response => {
        dispatch(fetchUpcomingMovies(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const getMovieDetails = (movieId) => {
  return (dispatch) => {
    return axios.get('https://api.themoviedb.org/3/movie/'+movieId+'?api_key=84c481f0a53d6c1b488b947bd25286ba&append_to_response=videos')
      .then(response => {
        dispatch(fetchMovieDetails(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};



