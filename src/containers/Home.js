import React, { Component } from 'react';
import Header  from "../layouts/Header";
import Footer  from "../layouts/Footer";
import MovieCard from '../components/Moviecard'
import Pagination from '../components/Pagination'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getMovies} from '../actions'
let searchquery='';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {listofMoviesResult: []}
  }
  
  handleInput=(e)=>{
    searchquery=e.target.value;
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.actions.getMovies(searchquery,1) 
  }

  loadMoreMovies= (page)=>{
    this.props.actions.getMovies(searchquery, page) 
  }
   
   render() {
    console.log(this.props)
      return (
        <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="jumbotron">
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
            <hr/>
            <div>
            {this.props.listofMovies.results ? this.props.listofMovies.results.map((item, i) => <MovieCard 
                  key = {i} data = {item}/>) : null}
            </div>
            {this.props.listofMovies.results ? <Pagination totalPages={this.props.listofMovies.total_pages} paginate={this.loadMoreMovies} /> : null }
          </div>
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
      getMovies
    }, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);
