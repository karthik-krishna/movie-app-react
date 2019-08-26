import axios from 'axios';
import { push } from 'react-router-redux';

const baseURL = 'https://api.themoviedb.org/3/';
const apikey = '84c481f0a53d6c1b488b947bd25286ba';

export const fetchMovies = (movies) => {
  return {
    type: 'GET_MOVIES_BASED_ON_SEARCH',
    movies
  }
};

export const fetchNowPlayingMovies = (nowPlaying) => {
  return {
    type: 'GET_NOW_PLAYING_MOVIES',
    nowPlaying
  }
};

export const fetchUpcomingMovies = (upcomingmovies) => {
  return {
    type: 'GET_UPCOMING_MOVIES',
    upcomingmovies
  }
};

export const fetchMovieDetails = (movieDetail) => {

  return {
    type: 'GET_MOVIES_DETAILS',
    movieDetail
  }
};

export const fetchSimilarMovies = (similarmovies) => {
  return {
    type: 'GET_SIMILAR_MOVIES',
    similarmovies
  }
};

export const fetchMovieCredits = (credits) => {
  return {
    type: 'GET_MOVIE_CREDITS',
    credits
  }
};

export const fetchMovieReviews = (reviews) => {
  return {
    type: 'GET_MOVIE_REVIEWS',
    reviews
  }
}

export const gotoError = () => {
  return {
    type: 'GOT_ERROR'
  }
}



export const getNowPlayingMovies = (page) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(baseURL + 'movie/now_playing?api_key=' + apikey + '&language=en-US&page=' + page);
      dispatch(fetchNowPlayingMovies(response.data));
    }
    catch (error) {
      dispatch(push('/error'));
      throw (error);
    }
  };
};

export const getMovies = (query, page) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(baseURL + 'search/movie?api_key=' + apikey + '&query=' + query + '&page=' + page);
      dispatch(fetchMovies(response.data));
    }
    catch (error) {
      dispatch(push('error'));
      throw (error);
    }
  };
};

export const getUpcomingMovies = (page) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(baseURL + 'movie/upcoming?api_key=' + apikey + '&language=en-US&page=' + page);
      dispatch(fetchUpcomingMovies(response.data));
    }
    catch (error) {
      dispatch(push('/error'));
      throw (error);
    }
  };
};

export const getMovieDetails = (movieId) => {

  return async (dispatch) => {
    try {
      const response = await axios.get(baseURL + 'movie/' + movieId + '?api_key=' + apikey + '&append_to_response=videos');
      dispatch(fetchMovieDetails(response.data));
    }
    catch (error) {
      dispatch(push('/error'));
      throw (error);
    }
  };
};

export const getSimilarMovies = (movieId,page) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(baseURL + 'movie/' + movieId + '/similar?api_key=' + apikey + '&page=' + page);
      dispatch(fetchSimilarMovies(response.data));
    }
    catch (error) {
      throw (error);
    }
  };
};

export const getMovieCredits = (movieId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(baseURL + 'movie/' + movieId + '/credits?api_key=' + apikey);
      dispatch(fetchMovieCredits(response.data));
    }
    catch (error) {
      throw (error);
    }
  };
};

export const getMovieReviews = (movieId, page) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(baseURL + 'movie/' + movieId + '/reviews?api_key=' + apikey + '&language=en-US&page=' + page);
      dispatch(fetchMovieReviews(response.data));
    }
    catch (error) {
      throw (error);
    }
  };
};



