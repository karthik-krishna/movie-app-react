import React, { Component } from 'react';
import Header  from "../Header";

import {getMovieDetails} from '../actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class MovingDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {listofMoviesResult: [],page:1}
  }

  componentDidMount(){
    this.props.actions.getMovieDetails(this.props.match.params.id);
  }

  shouldComponentUpdate(nextProps) {
        const differentTitle = this.props.moviedetail.id !== nextProps.moviedetail.id;
        return differentTitle;
    }


   render() {
    console.log(this.props)
      return (
        <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="media">
                <div className="media-left">
                  <img src={this.props.moviedetail.poster_path ? 'https://image.tmdb.org/t/p/w200/'+this.props.moviedetail.poster_path : 'https://via.placeholder.com/200'} alt="poster" />
                </div>
                <div className="media-body">
                  <h4 className="media-heading"><span>{this.props.moviedetail.title} <small>{this.props.moviedetail.tagline}</small> </span> : {this.props.moviedetail.release_date}</h4>
                  <p>{this.props.moviedetail.overview}</p>
                  <ul>
                      <li>Is <b>A</b> Rated : <b>{this.props.moviedetail.adult ? 'Yes' : 'No'}</b></li>
                      <li>Vote average is <b>{this.props.moviedetail.vote_average}</b> out of <b>{this.props.moviedetail.vote_count}</b> votes</li>
                      <li>Budget : ${this.props.moviedetail.budget}</li>
                      <li>Genres : 
                        <ul>
                          {this.props.moviedetail.genres ? this.props.moviedetail.genres.map((item)=> <li key={item.id} > {item.name}</li> ) : null}
                        </ul>
                      </li>
                      <li>Revenue : {this.props.moviedetail.revenue}</li>
                      <li>Videos &amp; Trailers: { this.props.moviedetail.videos && this.props.moviedetail.videos.results.length===0 ? 'None' : null}
                        <ul>
                          {this.props.moviedetail.videos ? this.props.moviedetail.videos.results.map((item)=> <li key={item.id} className="inline"> 
                            <iframe width="250px" height="300px" src={"https://www.youtube.com/embed/"+item.key} title={item.key}></iframe></li> ) : null }
                        </ul>
                      </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      );
   }
}


const mapStateToProps = state => ({
  moviedetail: state.movies
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
      getMovieDetails
    }, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(MovingDetail);