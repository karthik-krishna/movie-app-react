import React, { useState } from 'react';


function Pagination(pageData) {
  const [currentPage, setCurrentPage] = useState(0)

  const handleFirst = () => {
    if (currentPage !== 0) {
      setCurrentPage(0)
      pageData.paginate(1)
    }
  }

  const handleBack = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 1)
      pageData.paginate(currentPage)
    }
  }

  const loadNextMovies = (i) => {
    if (i !== currentPage) {
      setCurrentPage(i)
      pageData.paginate(i + 1);
    }

  }

  const handleNext = () => {
    if (currentPage + 2 <= pageData.totalPages) {
      setCurrentPage(currentPage + 1)
      pageData.paginate(currentPage + 2)
    }
  }

  const handleLast = () => {
    if (currentPage + 2 <= pageData.totalPages) {
      setCurrentPage(pageData.totalPages - 1)
      pageData.paginate(pageData.totalPages)
    }
  }


    let arr = []
    for (var i = 0; i < pageData.totalPages; i++) {
      arr.push(i)
    }
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 text-right">
        <ul className="pagination justify-content-center">
          <li className={currentPage === 0 ? "page-item disabled" : "page-item"}><span className="page-link" onClick={handleFirst}>First</span></li>
          <li className={currentPage === 0 ? "page-item disabled" : "page-item"}><span className="page-link" onClick={handleBack}>Previous</span></li>
          {arr.map((item, i) => <li key={i} className={currentPage === i ? 'page-item active' : 'page-item'}><span className="page-link" onClick={() => loadNextMovies(i)} >{item+1}</span></li>)}
          <li className={currentPage + 1 >= pageData.totalPages ? "page-item disabled" : "page-item"}><span className="page-link" onClick={handleNext}>Next</span></li>
          <li className={currentPage + 1 >= pageData.totalPages ? "page-item disabled" : "page-item"}><span className="page-link" onClick={handleLast}>Last</span></li>
        </ul>
      </div>
    );
}


export default Pagination;