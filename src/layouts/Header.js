import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

class Header extends Component {
   render() {
	const route = this.props.location.pathname;

      return (
         <header className="">
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand" > Movie App</Link>
              </div>
              <ul className="nav navbar-nav">
                <li className={route==='/' ? 'active' : ''}><Link to="/">Home</Link></li>
                <li className={route==='/upcoming' ? 'active' : ''}><Link to="/upcoming">Upcoming</Link></li>
              </ul>
            </div>
          </nav>
        </header>
      );
   }
}

export default withRouter(Header);