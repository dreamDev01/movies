import { Component } from "react";
import { connect } from "react-redux";

import {
  filterByGender,
  filterByOrder,
  pagination,
} from "../../Helpers/Filter.helper";
import MovieItem from "../MovieItem/MovieItem";
import Pagination from "../Pagination/Pagination";

import "./MovieList.scss";

/*-------Movies List----------*/

class MovieList extends Component {
  state = {
    perPage: 6,
    currentPage: 1,
    pagesToShow: 2,
  };

  onPrevious = () => {
    const updatedState = { ...this.state };
    updatedState.currentPage = this.state.currentPage - 1;
    this.setState(updatedState);
  };

  onNext = () => {
    this.setState({
      ...this.state,
      currentPage: this.state.currentPage + 1,
    });
  };

  goToPage = (n) => {
    this.setState({
      ...this.state,
      currentPage: n,
    });
  };
  render() {
    return (
      <main className="grid-layout">
        <div className="dashboard">
          {pagination(this.props.movies, this.state).map((movie) => {
            return (
              <div key={movie.id}>
                <MovieItem movie={movie} />
              </div>
            );
          })}
        </div>
        <div className="pagination">
          <Pagination
            totalItemsCount={this.props.movies.length}
            currentPage={this.state.currentPage}
            perPage={this.state.perPage}
            pagesToShow={this.state.pagesToShow}
            onPage={this.goToPage}
            onPrevPage={this.onPrevious}
            onNextPage={this.onNext}
          />
        </div>
      </main>
    );
  }
}

/*Map filter state to props: filter movies for selected genders and sort type*/
const listToProps = (state) => {
  const genders = state.filterGender;
  const sort = state.filterOrder;

  const byGender = filterByGender(state.movieStore.movies, genders);
  const byOrder = filterByOrder(byGender, sort);

  return { movies: byOrder };
};

export default connect(listToProps, null)(MovieList);
