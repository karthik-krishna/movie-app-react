import React, { Component } from 'react';
import Header  from "../layouts/Header";
import Footer  from "../layouts/Footer";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class ErrorPage extends Component {
  
goback = () => {
    //console.log(this.props);
  }

   render() {
      return (
        <div>
        <Header />
        <div className="container padtop">
          <div className="row">
            <div className="col-sm-12 min-height">
            <h2>Oops!</h2>
            <hr/>
            <p>Sorry, Please check your conection and try later</p>
            <button className="btn btn-primary" onClick={this.goback} >
                Go Back
            </button>
            </div>
          </div>
        </div>
        <Footer />
        </div>
      );
   }
}



const mapStateToProps = state => ({
    history: state.history,
  })
  

//export default connect(mapStateToProps)(ErrorPage);
export default withRouter(connect(mapStateToProps)(ErrorPage))