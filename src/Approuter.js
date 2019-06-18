import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';
import Upcoming from './containers/Upcoming';
import MovingDetail from './containers/Moviedetail';
import { BrowserRouter as Router, Route } from "react-router-dom";

class AppRouter extends Component {
  render() {
    return (
    	<div>
	        <Router>
	          <div>
	            <Route path="/" exact component={Home} />
	            <Route path="/upcoming" component={Upcoming} />
	            <Route path="/movie-detail/:id" component={MovingDetail} />
				
	          </div>
	        </Router>
        </div>
    );
  }
}

export default AppRouter;
