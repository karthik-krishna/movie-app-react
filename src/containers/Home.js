import React, { Component } from 'react';
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import MovieCard from '../components/Moviecard'
import Pagination from '../components/Pagination'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMovies, getNowPlayingMovies } from '../actions'
let searchquery = '';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { listofMoviesResult: [], page: 1, listing:'NOW_PLAYING' }
  }

  componentDidMount() {
    this.props.actions.getNowPlayingMovies(this.state.page);
  }

  handleInput = (e) => {
    searchquery = e.target.value;
  }

  handleSubmit = (e) => {
    this.setState({listing:'SEARCH'})
    e.preventDefault();
    this.props.actions.getMovies(searchquery, 1)
  }

  loadMoreMovies = (page) => {
    if (this.state.listing==='NOW_PLAYING') {
      this.props.actions.getNowPlayingMovies(page);
    } 
    else if (this.state.listing==='SEARCH') {
      this.props.actions.getMovies(searchquery, page)
    }
    
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Header />
        <div className="bg-image">
          <div className="container">
            <div className="col-sm-12">
              <div className="jumbotron mt-15 card">
                <form onSubmit={this.handleSubmit}>
                  <div className="input-group">
                    <input type="search" className="form-control" placeholder="Search for movie" name="searchquery" onChange={this.handleInput} />
                    <div className="input-group-btn">
                      <button className="btn btn-default" type="submit">
                        <i className="glyphicon glyphicon-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          {this.props.listofMovies.results ? this.props.listofMovies.results.map((item, i) => <MovieCard
            key={i} data={item} />) : null}
          {this.props.listofMovies.results ? <Pagination totalPages={this.props.listofMovies.total_pages} paginate={this.loadMoreMovies} /> : null}
        </div>

        <Footer />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  listofMovies: state.movies
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getMovies, getNowPlayingMovies
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
