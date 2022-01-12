import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToBasket } from "../../redux/actions";
import Field from "../common/Field/Field";

import "./MovieItem.scss";

/*-------Movie Item----------*/
/*props :      */
/*  - id       */
/*  - gender   */
/*  - imageUrl */
/*  - title    */
/*  - date     */
/*  - price    */

const MovieItem = (props) => {
  const { id, gender, imageUrl, title, date, price } = props.movie;
  const imageRef = React.createRef();
  const euroPrice = `€${price}`;
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const releaseDate = date.toLocaleDateString("fr-FR", options);

  return (
    <div className="movie">
      <img className="movie__img" src={imageUrl} alt={title} ref={imageRef} />

      <div>
        <Link to={`/movies/${id}`} className="movie__link">
          {title}
        </Link>

        <Field header="Genre" value={gender} />
        <Field header="Date de sortie" value={releaseDate} />
        <Field value={euroPrice} />
      </div>
      <div className="movie__addToBasket">
        <button
          onClick={() => {
            props.dispatch(addToBasket(props.movie));
          }}
        >
          Add to basket
        </button>
      </div>
    </div>
  );
};

export default connect()(MovieItem);
