
import axios from 'axios';
import { push } from 'react-router-redux';
import config from '../config'


export const fetchUpcomingMovies = (upcomingmovies) => {
  return {
    type: 'GET_UPCOMING_MOVIES',
    upcomingmovies
  }
};

export const getUpcomingMovies = (page) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(config.baseURL + 'movie/upcoming?api_key=' + config.apikey + '&language=en-US&page=' + page);
      dispatch(fetchUpcomingMovies(response.data));
    }
    catch (error) {
      dispatch(push('/error'));
      throw (error);
    }
  };
};
