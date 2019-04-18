import React, { Component } from 'react';
import Header  from "../Header";
import MovieCard from './Moviecard'


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
    let pageNo=page+1;
    this.setState({page:pageNo});
    this.props.actions.getUpcomingMovies(pageNo) 
  }

  componentWillReceiveProps(newProps) {  
  let moviesList=this.state.listofMoviesResult;
    newProps.listofMovies.results.map((item)=>{
      moviesList.push(item);
    })  
    this.setState({
        listofMoviesResult:moviesList
      });
   }

   render() {
      return (
        <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
            {this.state.listofMoviesResult.map((item, i) => <MovieCard 
                  key = {i} data = {item}/>)}
            </div>

            <div className="text-center">
              { this.state.listofMoviesResult.length>0 && this.props.listofMovies.results.length>0 && <button className="btn btn-default" onClick={() => this.loadMoreMovies(this.state.page)} >Load More</button> }
            </div>
            <div className="text-center">
            { this.state.listofMoviesResult.length>0 && this.props.listofMovies.results.length===0 && 'Thats all folks'}
            </div>

          </div>
        </div>
        </div>
      );
   }
}


const mapStateToProps = state => ({
  listofMovies: state.movies
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
      getUpcomingMovies
    }, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Upcoming);