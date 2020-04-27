import axios from 'axios';
import { push } from 'react-router-redux';
import config from '../config'

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


  export const getNowPlayingMovies = (page) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(config.baseURL + 'movie/now_playing?api_key=' + config.apikey + '&language=en-US&page=' + page);
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
        const response = await axios.get(config.baseURL + 'search/movie?api_key=' + config.apikey + '&query=' + query + '&page=' + page);
        dispatch(fetchMovies(response.data));
      }
      catch (error) {
        dispatch(push('error'));
        throw (error);
      }
    };
  };