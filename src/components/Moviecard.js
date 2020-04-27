import React from 'react';
import { Link } from "react-router-dom";
import ProgressBar from './ProgressBar'

function MovieCard(movieDetail) {
    const fixHeight = { height: '300px' };
    return (
      <div className="col-xs-6 col-sm-12 col-md-6 ">
        <div className="media card" >
          <Link to={"/movie-detail/" + movieDetail.data.id}>
            <div className="visible-xs text-center">
              <img src={movieDetail.data.poster_path ? 'https://image.tmdb.org/t/p/w200' + movieDetail.data.poster_path : 'https://via.placeholder.com/200x300'} alt={movieDetail.data.title} style={fixHeight}/>
            </div>
          </Link>
          <div className="media-left">
            <img className="media-object hidden-xs" style={fixHeight} src={movieDetail.data.poster_path ? 'https://image.tmdb.org/t/p/w200' + movieDetail.data.poster_path : 'https://via.placeholder.com/200x300'} alt={movieDetail.data.title} />
          </div>
          <div className="media-body hidden-xs">
            <h4 className="media-heading"><Link to={"/movie-detail/" + movieDetail.data.id} >{movieDetail.data.title}</Link> : {movieDetail.data.release_date}</h4>
            <div className="block-with-text">
              {movieDetail.data.overview ? movieDetail.data.overview : 'No Description'}
              <div className="gradientDiv"></div>
            </div>
            <ul>
              <li>Is <b>A</b> Rated : <b>{movieDetail.data.adult ? 'Yes' : 'No'}</b></li>
              <li>User score <b>{movieDetail.data.vote_average}</b> out of <b>{movieDetail.data.vote_count}</b> votes</li>
              <ProgressBar userRating={movieDetail.data.vote_average} />
            </ul>
            <div className="moreinfo">
              <Link to={"/movie-detail/" + movieDetail.data.id} >More Info</Link>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
}

export default MovieCard;