import React from "react";

import GenderFilter from "../../components/GenderFilter/GenderFilter";
import SortByDateFilter from "../../components/SortByDateFilter/SortByDateFilter";
import MovieList from "../../components/MovieList/MovieList";
import { movies } from "../../data/movies";

import "./Home.scss";

/*-------Home Page---------*/

const Home = () => {
  return (
    <React.Fragment>
      <div className="home" style={{ paddingTop: "4rem" }}>
        <div className="leftPanel">
          <GenderFilter />
          <SortByDateFilter />
        </div>
        <div className="list">
          <MovieList movies={movies} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
