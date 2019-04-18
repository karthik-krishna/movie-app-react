import React, { Component } from 'react';
//import { Link } from "react-router-dom";

class MovieCard extends Component {
   render() {
      return (
        <div className="col-sm-12">
          <div className="media">
            <div className="media-left">
              <img src={this.props.data.poster_path ? 'https://image.tmdb.org/t/p/w200/'+this.props.data.poster_path : 'https://via.placeholder.com/200'} alt="poster" />
            </div>
            <div className="media-body">
              <h4 className="media-heading"><span>{this.props.data.title}</span> : {this.props.data.release_date}</h4>
              <p>{this.props.data.overview}</p>
              <ul>
                <li>Is <b>A</b> Rated : <b>{this.props.data.adult ? 'Yes' : 'No'}</b></li>
                <li>Vote average is <b>{this.props.data.vote_average}</b> out of <b>{this.props.data.vote_count}</b> votes</li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
      );
   }
}

export default MovieCard;