import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Upcoming from './components/Upcoming'
import { BrowserRouter as Router, Route } from "react-router-dom";

class AppRouter extends Component {
  render() {
    return (
    	<div>
	        <Router>
	          <div>
	            <Route path="/" exact component={Home} />
	            <Route path="/upcoming" component={Upcoming} />
	          </div>
	        </Router>
        </div>
    );
  }
}

export default AppRouter;
