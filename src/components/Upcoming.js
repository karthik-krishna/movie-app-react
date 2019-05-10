import React, { Component } from 'react';
import Header  from "../Header";
import MovieCard from './Moviecard'
import Pagination from './Pagination'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getUpcomingMovies} from '../actions'

class Upcoming extends Component {
  constructor(props) {
    super(props);
    this.state = {listofMoviesResult: [],page:1}
  }

  componentDidMount(){
    this.props.actions.getUpcomingMovies(this.state.page);
  }

  loadMoreMovies= (page)=>{
    this.props.actions.getUpcomingMovies(page) 
  }

  

   render() {
    console.log(this.props)
      return (
        <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
            {this.props.listofUpcomingMovies.results ? this.props.listofUpcomingMovies.results.map((item, i) => <MovieCard 
                  key = {i} data = {item}/>) : null}
            </div>

            {this.props.listofUpcomingMovies.results ? <Pagination totalPages={this.props.listofUpcomingMovies.total_pages} paginate={this.loadMoreMovies} /> : null }

          </div>
        </div>
        </div>
      );
   }
}


const mapStateToProps = state => ({
  listofUpcomingMovies: state.upcomingMovies
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
      getUpcomingMovies
    }, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Upcoming);