import React, { Component } from 'react';
import Header  from "../Header";
import MovieCard from './Moviecard'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getMovies} from '../actions'
let searchquery='';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {listofMoviesResult: [], page:1}
  }
  
  handleInput=(e)=>{
    searchquery=e.target.value;
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.actions.getMovies(searchquery,this.state.page) 
  }
  loadMoreMovies= (page)=>{
    let pageNo=page+1;
    this.setState({page:pageNo});
    this.props.actions.getMovies(searchquery, pageNo) 
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
      getMovies
    }, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);
