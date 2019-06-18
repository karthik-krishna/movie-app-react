import React, { Component } from 'react';
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

import { getMovieDetails } from '../actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class MovingDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { listofMoviesResult: [], page: 1, base: 'https://image.tmdb.org/t/p/' }
  }

  componentDidMount() {
    this.props.actions.getMovieDetails(this.props.match.params.id);
  }

  shouldComponentUpdate(nextProps) {
    const differentTitle = this.props.moviedetail.id !== nextProps.moviedetail.id;
    return differentTitle;
  }


  render() {
    console.log(this.props)
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
                  <img src={this.props.moviedetail.poster_path ? 'https://image.tmdb.org/t/p/w200/' + this.props.moviedetail.poster_path : 'https://via.placeholder.com/200'} onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/200x300" }} alt="poster" className="img-thumbnail" style={maxWidth} />
                </div>
                <div className="media-body bg-detail">
                  <h4 className="media-heading"><span>{this.props.moviedetail.title} <small>{this.props.moviedetail.tagline}</small> </span> : {this.props.moviedetail.release_date}</h4>
                  <p>{this.props.moviedetail.overview}</p>
                  <ul >
                    <li>Is <b>A</b> Rated : <b>{this.props.moviedetail.adult ? 'Yes' : 'No'}</b></li>
                    <li>Vote average is <b>{this.props.moviedetail.vote_average}</b> out of <b>{this.props.moviedetail.vote_count}</b> votes</li>
                    <li>Budget : ${this.props.moviedetail.budget}</li>
                    <li>Genres :
                        <ul>
                        {this.props.moviedetail.genres ? this.props.moviedetail.genres.map((item) => <li key={item.id} > {item.name}</li>) : null}
                      </ul>
                    </li>
                    <li>Revenue : {this.props.moviedetail.revenue}</li>

                {this.props.moviedetail.videos ? this.props.moviedetail.videos.results.map((item) => <div key={item.id} className="col-md-6">
                  <iframe width="100%" height="300" frameborder="0" allow="autoplay; encrypted-media" src={"https://www.youtube.com/embed/" + item.key} title={item.key}></iframe></div>) : null}
                       
                  </ul>
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
  moviedetail: state.moviedetail
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getMovieDetails
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(MovingDetail);