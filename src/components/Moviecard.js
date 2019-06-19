import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ProgressBar from './ProgressBar'

class MovieCard extends Component {
  render() {
    const fixHeight = { height: '300px' };
    return (
      <div className="col-md-6 ">
        <div className="media card" >
          <Link to={"/movie-detail/" + this.props.data.id}>
            <div className="visible-xs text-center">
              <img src={this.props.data.poster_path ? 'https://image.tmdb.org/t/p/w200/' + this.props.data.poster_path : 'https://via.placeholder.com/200x300'} alt={this.props.data.title} />
            </div>
          </Link>
          <div className="media-left">
            <img className="media-object hidden-xs" style={fixHeight} src={this.props.data.poster_path ? 'https://image.tmdb.org/t/p/w200/' + this.props.data.poster_path : 'https://via.placeholder.com/200x300'} alt={this.props.data.title} />
          </div>
          <div className="media-body hidden-xs">
            <h4 className="media-heading"><Link to={"/movie-detail/" + this.props.data.id} >{this.props.data.title}</Link> : {this.props.data.release_date}</h4>
            <div className="block-with-text">
              {this.props.data.overview ? this.props.data.overview : 'No Description'}
              <div className="gradientDiv"></div>
            </div>
            <ul>
              <li>Is <b>A</b> Rated : <b>{this.props.data.adult ? 'Yes' : 'No'}</b></li>
              <li>User score <b>{this.props.data.vote_average}</b> out of <b>{this.props.data.vote_count}</b> votes</li>
              <ProgressBar userRating={this.props.data.vote_average} />
            </ul>
            <div className="moreinfo">
              <Link to={"/movie-detail/" + this.props.data.id} >More Info</Link>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default MovieCard;