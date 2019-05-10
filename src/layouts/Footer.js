import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {
   render() {
      return (
        <footer className="footer navbar-inverse">
          <div className="text-right">
            &copy; Designed and developed by <a href="mailto:kb.karthik1@gmail.com">Karthik K B</a>
          </div>
        </footer>
      );
   }
}

export default Footer;