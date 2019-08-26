import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';
import Upcoming from './containers/Upcoming';
import MovingDetail from './containers/Moviedetail';
import ErrorPage from './containers/error';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {history} from 'react-router-redux'

class AppRouter extends Component {
	render() {
		return (
			<Router history={history}>
				<Route path="/" exact component={Home} />
				<Route path="/upcoming" component={Upcoming} />
				<Route path="/movie-detail/:id" component={MovingDetail} />
				<Route path="/error" component={ErrorPage} />
			</Router>
		);
	}
}

export default AppRouter;
