import React, { Component } from "react";

import "./Pagination.scss";

/*-------Pagination----------*/

class Pagination extends Component {
  /*Go to the selected page*/
  onPage(n) {
    this.props.onPage(n);
  }

  /*is the last page or not*/
  isLastPage() {
    return (
      this.props.perPage * this.props.currentPage >= this.props.totalItemsCount
    );
  }

  /*total page*/
  total() {
    return Math.ceil(this.props.totalItemsCount / this.props.perPage) || 0;
  }

  /*get minimum page*/
  getMin() {
    return this.props.perPage * this.props.currentPage - this.props.perPage + 1;
  }

  /*get maximum page*/
  getMax() {
    let max = this.props.perPage * this.props.currentPage;
    if (max > this.props.totalItemsCount) {
      max = this.props.totalItemsCount;
    }
    return max;
  }

  /*go to the previous page*/
  onPrevious = () => {
    this.props.onPrevPage();
  };

  /*go to the next page*/
  onNext = () => {
    this.props.onNextPage();
  };

  /*get all pages*/
  getAllPages = () => {
    const c = Math.ceil(this.props.totalItemsCount / this.props.perPage);
    const p = this.props.currentPage || 1;
    const pagesToShow = this.props.pagesToShow || 9;
    const pages = [];
    pages.push(p);
    const times = pagesToShow - 1;
    for (let i = 0; i < times; i++) {
      if (pages.length < pagesToShow) {
        if (Math.min.apply(null, pages) > 1) {
          pages.push(Math.min.apply(null, pages) - 1);
        }
      }
      if (pages.length < pagesToShow) {
        if (Math.max.apply(null, pages) < c) {
          pages.push(Math.max.apply(null, pages) + 1);
        }
      }
    }
    pages.sort((a, b) => a - b);
    return pages;
  };

  render() {
    const pages = this.getAllPages().map((pageNum, index) => {
      let buttonClass = "page-item";

      if (pageNum === this.props.currentPage) {
        buttonClass += " active";
      }

      return (
        <li
          key={index}
          className={buttonClass}
          onClick={() => {
            this.onPage(pageNum);
          }}
        >
          <button className="page-link">{pageNum}</button>
        </li>
      );
    });

    let prevButtonClass = "page-item";

    if (this.props.currentPage === 1) {
      prevButtonClass += " disabled";
    }

    const prevButton = (
      <li className={prevButtonClass}>
        <button
          data-testid="prev"
          className="page-link"
          onClick={this.onPrevious}
          tabIndex="-1"
        >
          Previous
        </button>
      </li>
    );

    let nextButtonClass = "page-item";

    if (this.isLastPage()) {
      nextButtonClass += " disabled";
    }

    const nextButton = (
      <li className={nextButtonClass}>
        <button
          data-testid="next"
          disabled={this.isLastPage()}
          className="page-link"
          onClick={this.onNext}
        >
          Next
        </button>
      </li>
    );

    return (
      <nav aria-label="...">
        <ul className="pagination">
          {prevButton}
          {pages}
          {nextButton}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
