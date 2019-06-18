import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import ProgressBar from '../components/ProgressBar'

import { getMovieDetails, getSimilarMovies } from '../actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class MovingDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { base: 'https://image.tmdb.org/t/p' }
  }

  componentDidMount() {
    this.props.actions.getMovieDetails(this.props.match.params.id);
  }

  getsimilar = () => {
    this.props.actions.getSimilarMovies(this.props.match.params.id)
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.actions.getMovieDetails(this.props.match.params.id);
      window.scroll(0,0);
    }
  }



  render() {
    const bgPoster = {
      backgroundImage: 'url(' + this.state.base + '/w1400_and_h450_face' + this.props.moviedetail.backdrop_path + ')'
    }
    const bgPosterMobile = {
      backgroundImage: 'url(' + this.state.base + '/w500_and_h282_face' + this.props.moviedetail.backdrop_path + ')'
    }
    const maxWidth = { maxWidth: 'initial' }
    return (
      <div>
        <Header />
        <div className="container-fluid padtop">
          <div className="bg-image row hidden-xs" style={bgPoster}></div>
          <div className="bg-image row visible-xs" style={bgPosterMobile}></div>
        </div>
        <div className="container padtop">
          <div className="row">
            <div className="col-sm-12">
              <div className="media">
                <div className="media-left">
                  <img src={this.props.moviedetail.poster_path ? 'https://image.tmdb.org/t/p/w200/' + this.props.moviedetail.poster_path : 'https://via.placeholder.com/200x300'} onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/200x300" }} alt="poster" className="img-thumbnail" style={maxWidth} />
                </div>
                <div className="media-body bg-detail">
                  <h4 className="media-heading"><span>{this.props.moviedetail.title} <small>{this.props.moviedetail.tagline}</small> </span> : {this.props.moviedetail.release_date}</h4>
                  <p>{this.props.moviedetail.overview}</p>
                  <ul >
                    <li>Is <b>A</b> Rated : <b>{this.props.moviedetail.adult ? 'Yes' : 'No'}</b></li>
                    <li>User score <b>{this.props.moviedetail.vote_average}</b> out of <b>{this.props.moviedetail.vote_count}</b> votes
                      <div><ProgressBar userRating={this.props.moviedetail.vote_average} /></div>
                    </li>
                    <li>Budget : ${this.props.moviedetail.budget}</li>
                    <li>Genres :
                        <ul>
                        {this.props.moviedetail.genres ? this.props.moviedetail.genres.map((item) => <li key={item.id} > {item.name}</li>) : null}
                      </ul>
                    </li>
                    <li>Revenue : {this.props.moviedetail.revenue}</li>
                  </ul>
                  <ul className="nav nav-tabs nav-justified">
                    <li className="active"><a data-toggle="tab" href="#trailer">Trailers</a></li>
                    <li><a data-toggle="tab" href="#similar" onClick={this.getsimilar} >Similar Movies</a></li>
                  </ul>
                  <div className="tab-content">
                    <div id="trailer" className="tab-pane fade in active">
                      <h3>Trailers</h3>
                      {this.props.moviedetail.videos ? this.props.moviedetail.videos.results.map((item) => <div key={item.id} className="col-md-6">
                        <iframe width="100%" height="300" frameBorder="0" allow="autoplay; encrypted-media" src={"https://www.youtube.com/embed/" + item.key} title={item.key}></iframe></div>) : null}
                    </div>
                    <div id="similar" className="tab-pane fade">
                      <h3>Similar Movies</h3>
                      {this.props.similar.results ? this.props.similar.results.map((item) => <div key={item.id} className="col-md-3">
                        <Link to={"/movie-detail/" + item.id}><img className="img-thumbnail margintb" src={this.state.base + '/w200' + item.poster_path} title={item.key} /></Link></div>) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
        <Footer />
      </div >
    );
  }
}


const mapStateToProps = state => ({
  moviedetail: state.moviedetail.detail,
  similar: state.moviedetail.similarmovies
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getMovieDetails, getSimilarMovies
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(MovingDetail);