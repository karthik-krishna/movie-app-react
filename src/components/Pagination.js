import React, { Component } from 'react';


class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
  }

  handleFirst() {
    if (this.state.currentPage !== 0) {
      this.setState({
        currentPage: 0
      })
      this.props.paginate(1)
    }
  }

  handleBack() {
    if (this.state.currentPage !== 0) {
      this.setState({
        currentPage: this.state.currentPage - 1
      })
      this.props.paginate(this.state.currentPage)
    }
  }

  loadNextMovies = (i) => {
    if (i !== this.state.currentPage) {
      this.setState({
        currentPage: i
      })
      this.props.paginate(i + 1);
    }

  }

  handleNext() {
    if (this.state.currentPage + 2 <= this.props.totalPages) {
      this.setState({
        currentPage: this.state.currentPage + 1
      })
      this.props.paginate(this.state.currentPage + 2)
    }
  }

  handleLast() {
    if (this.state.currentPage + 2 <= this.props.totalPages) {
      this.setState({
        currentPage: this.props.totalPages - 1
      })
      this.props.paginate(this.props.totalPages)
    }
  }


  render() {
    let arr = []
    for (var i = 0; i < this.props.totalPages; i++) {
      arr.push(i)
    }
    return (
      <div className="col-md-12 text-right">
        <ul className="pagination justify-content-center">
          <li className={this.state.currentPage === 0 ? "page-item disabled" : "page-item"}><span className="page-link" onClick={() => this.handleFirst()}>First</span></li>
          <li className={this.state.currentPage === 0 ? "page-item disabled" : "page-item"}><span className="page-link" onClick={() => this.handleBack()}>Previous</span></li>
          {arr.map((item, i) => <li key={i} className={this.state.currentPage === i ? 'page-item active' : 'page-item'}><span className="page-link" onClick={() => this.loadNextMovies(i)} >{item+1}</span></li>)}
          <li className={this.state.currentPage + 2 >= this.props.totalPages ? "page-item disabled" : "page-item"}><span className="page-link" onClick={() => this.handleNext()}>Next</span></li>
          <li className={this.state.currentPage + 2 >= this.props.totalPages ? "page-item disabled" : "page-item"}><span className="page-link" onClick={() => this.handleLast()}>Last</span></li>
        </ul>
      </div>
    );
  }
}


export default Pagination;