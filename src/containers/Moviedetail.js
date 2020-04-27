import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import ProgressBar from '../components/ProgressBar';
import Pagination from '../components/Pagination'

import { getMovieDetails, getSimilarMovies, getMovieCredits, getMovieReviews } from '../state/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class MovingDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { base: 'https://image.tmdb.org/t/p' };
    this.myRef = null;
  }

  componentDidMount() {
    this.props.actions.getMovieDetails(this.props.match.params.id);
    this.props.actions.getMovieCredits(this.props.match.params.id);
  }

  scrollToMyRef = () => window.scrollTo(0, this.myRef.offsetTop+900);

  getsimilar = () => {
    this.props.actions.getSimilarMovies(this.props.match.params.id, 1)
  }

  getreviews = () => {
    this.props.actions.getMovieReviews(this.props.match.params.id, 1)
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.actions.getMovieDetails(this.props.match.params.id);
      this.props.actions.getMovieCredits(this.props.match.params.id);
      this.getsimilar();
      window.scroll(0, 0);
    }
  }

  loadMoreReviews = (page) => {
    this.props.actions.getMovieReviews(this.props.match.params.id, page);
    this.scrollToMyRef();
  }

  loadMoreMovies = (page) => {
    this.props.actions.getSimilarMovies(this.props.match.params.id, page);
    this.scrollToMyRef();
  }



  render() {
    const backdrop_path = this.props.moviedetail.backdrop_path ? this.state.base + '/w1400_and_h450_face' + this.props.moviedetail.backdrop_path : '';
    const backdrop_path_mobile = this.props.moviedetail.backdrop_path ? this.state.base + '/w500_and_h282_face' + this.props.moviedetail.backdrop_path : '';
    const bgPoster = {
      backgroundImage: 'url(' + backdrop_path + ')'
    }
    const bgPosterMobile = {
      backgroundImage: 'url(' + backdrop_path_mobile + ')'
    }
    const maxWidth = { maxWidth: 'initial' };
    const fixHeight = { height: '300px' };
    return (
      <div>
        <Header />
        <div className="container-fluid padtop">
          <div className="bg-image row hidden-xs" style={bgPoster}></div>
          <div className="bg-image row visible-xs" style={bgPosterMobile}></div>
        </div>
        <div className="container padtop">
          <div className="row">
            <div className="panel panel-default">
              <div className="panel-body">

                <div className="col-sm-3 text-center">
                  <img src={this.props.moviedetail.poster_path ? this.state.base + '/w200' + this.props.moviedetail.poster_path : 'https://via.placeholder.com/200x300'} onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/200x300" }} alt="poster" className="img-thumbnail hidden-xs" style={maxWidth} />
                  <img src={this.props.moviedetail.poster_path ? this.state.base + '/w116_and_h174_face' + this.props.moviedetail.poster_path : 'https://via.placeholder.com/100x200'} onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/100x200" }} alt="poster" className="img-thumbnail visible-xs" style={maxWidth} />
                </div>

                <div className="col-sm-9 bg-detail">
                  <div className="col-md-12 margintb">
                    <h4 className="media-heading"><span>{this.props.moviedetail.title} <small>{this.props.moviedetail.tagline}</small> </span> : {this.props.moviedetail.release_date}</h4>
                    <p>{this.props.moviedetail.overview}</p>
                    <ul className="list-of-details">
                      <li>Is <b>A</b> Rated : <b>{this.props.moviedetail.adult ? 'Yes' : 'No'}</b></li>
                      <li>User score <b>{this.props.moviedetail.vote_average}</b> out of <b>{this.props.moviedetail.vote_count}</b> votes
                          <div><ProgressBar userRating={this.props.moviedetail.vote_average} /> </div>
                      </li>
                      <li>Budget : ${this.props.moviedetail.budget}</li>
                      <li>Genres :
                        <ul >
                          {this.props.moviedetail.genres ? this.props.moviedetail.genres.map((item) => <li style={{ listStyleType: 'disc' }} key={item.id} > {item.name}</li>) : null}
                        </ul>
                      </li>
                      <li>Languages spoken:
                        <ul >
                          {this.props.moviedetail.spoken_languages ? this.props.moviedetail.spoken_languages.map((item) => <li style={{ listStyleType: 'disc' }} key={item.iso_639_1} > {item.name}</li>) : null}
                        </ul>
                      </li>
                      <li>Revenue : ${this.props.moviedetail.revenue}</li>
                      <li>Duration : {this.props.moviedetail.runtime} mins</li>
                      <li>IMDB : <a href={"https://www.imdb.com/title/"+this.props.moviedetail.imdb_id} target="_blank" rel="noopener noreferrer">{"https://www.imdb.com/title/"+this.props.moviedetail.imdb_id}</a></li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-12 margintb">
                  <h3>Cast and Crew</h3>
                  <div className="col-md-12 margintb overflow">
                    <h4>Cast</h4>
                    <div className="col-md-12 card showinslider">
                      {this.props.credits.cast ? this.props.credits.cast.map((person, i) =>
                        <div className="castDiv text-center" key={person.id}>
                          <img src={person.profile_path ? this.state.base + '/w92' + person.profile_path : 'https://via.placeholder.com/80x80'} onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/80x80" }} className="imgCast img-circle" alt={person.name} />
                          <div className="col-md-12">
                            <p>{person.character}</p>
                            <p>{person.name}</p>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-12 margintb overflow">
                    <h4>Crew</h4>
                    <div className="col-md-12 card showinslider">
                      {this.props.credits.crew ? this.props.credits.crew.map((person, i) =>
                        <div className="castDiv text-center" key={person.credit_id}>
                          <img src={person.profile_path ? this.state.base + '/w92' + person.profile_path : 'https://via.placeholder.com/80x80'} onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/80x80" }} className="imgCast img-circle" alt={person.name} />
                          <div className="col-md-12">
                            <p>{person.job}</p>
                            <p>{person.name}</p>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-12" ref={ (ref) => this.myRef=ref }>
                    <ul className="nav nav-tabs nav-justified">
                      <li className="active"><a data-toggle="tab" href="#trailer">Trailers</a></li>
                      <li><a data-toggle="tab" href="#reviews" onClick={this.getreviews} >Reviews &amp; Critics</a></li>
                      <li><a data-toggle="tab" href="#similar" onClick={this.getsimilar} >Similar Movies</a></li>
                    </ul>
                    <div className="tab-content">
                      <div id="trailer" className="tab-pane fade in active">
                        <h3>Trailers</h3>
                        {this.props.moviedetail.videos && this.props.moviedetail.videos.results.length > 0 ? this.props.moviedetail.videos.results.map((item) => <div key={item.id} className="col-md-6">
                          <iframe width="100%" height="300" frameBorder="0" allow="autoplay; encrypted-media" src={"https://www.youtube.com/embed/" + item.key} title={item.key}></iframe></div>) : 'No Trailers, yet'}
                      </div>
                      <div id="reviews" className="tab-pane fade in">
                        <h3>Reviews</h3>
                        {this.props.reviews.results && this.props.reviews.results.length > 0 ? this.props.reviews.results.map((review) => <div className="col-sm-12 reviewBox" key={review.id} >
                          <p><a href={review.url}>A review by {review.author}</a></p>
                          <blockquote>
                            {review.content}
                          </blockquote> </div>) : 'No reviews, yet'}

                        <Pagination totalPages={this.props.reviews.total_pages} paginate={this.loadMoreReviews} />

                      </div>
                      <div id="similar" className="tab-pane fade">
                        <h3>Similar Movies</h3>
                        {this.props.similar.results && this.props.similar.results.length > 0 ? this.props.similar.results.map((item) => <div key={item.id} className="col-md-3 text-center">
                          <Link to={"/movie-detail/" + item.id}><img className="img-thumbnail margintb" src={this.state.base + '/w200' + item.poster_path} onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/200x300" }} alt={item.title} title={item.title} style={fixHeight} /></Link></div>) : 'No similar movies are found'}
                        <Pagination totalPages={this.props.similar.total_pages} paginate={this.loadMoreMovies} />
                      </div>
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
  similar: state.moviedetail.similarmovies,
  credits: state.moviedetail.credits,
  reviews: state.moviedetail.reviews,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getMovieDetails, getSimilarMovies, getMovieCredits, getMovieReviews
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(MovingDetail);