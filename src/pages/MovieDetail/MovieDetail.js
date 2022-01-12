import React from "react";
import { connect } from "react-redux";

import MovieDetails from "../../components/MovieDetails/MovieDetails";

import "./MovieDetail.scss";

/*-------Movie details Page---------*/
/*props :       */
/*  - imageUrl  */
/*  - title     */
const MovieDetail = (props) => {
  const { imageUrl, title } = props.movie;
  const imageRef = React.createRef();

  return (
    <div className="detail" style={{ padding: "6rem" }}>
      <div className="leftPanel">
        <img
          className="detail__img"
          src={imageUrl}
          alt={title}
          ref={imageRef}
        />
      </div>
      <div className="detail__details">
        <MovieDetails movie={props.movie} />
      </div>
    </div>
  );
};

/*Map movie state to props: find selected movie*/
const movieToProps = (state, props) => {
  const movie = state.movieStore.movies.find(
    (movie) => movie.id === props.match.params.id
  );

  return {
    movie,
  };
};

export default connect(movieToProps, null)(MovieDetail);
