import axios from 'axios';
import { push } from 'react-router-redux';
import config from '../config';

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

export const getMovieDetails = (movieId) => {

    return async (dispatch) => {
      try {
        const response = await axios.get(config.baseURL + 'movie/' + movieId + '?api_key=' + config.apikey + '&append_to_response=videos');
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
        const response = await axios.get(config.baseURL + 'movie/' + movieId + '/similar?api_key=' + config.apikey + '&page=' + page);
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
        const response = await axios.get(config.baseURL + 'movie/' + movieId + '/credits?api_key=' + config.apikey);
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
        const response = await axios.get(config.baseURL + 'movie/' + movieId + '/reviews?api_key=' + config.apikey + '&language=en-US&page=' + page);
        dispatch(fetchMovieReviews(response.data));
      }
      catch (error) {
        throw (error);
      }
    };
  };
  