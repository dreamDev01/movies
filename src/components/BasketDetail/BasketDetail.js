import React from "react";
import { connect } from "react-redux";
import { removeToBasket } from "../../redux/actions";

import RemoveIcon from "../../images/remove.png";

import "./BasketDetail.scss";

/*-------Basket Details----------*/
/*props :      */
/*  - title    */
/*  - price    */
/*  - imageUrl */
/*  - id       */

const BasketDetail = (props) => {
  const { title, price, imageUrl, id, dispatch } = props;
  const imageRef = React.createRef();

  return (
    <div className="basketDetail">
      <img
        className="basketDetail__img"
        src={imageUrl}
        alt={title}
        ref={imageRef}
      />
      <div className="description">
        <div className="description__title">{title}</div>
        <div className="description__price">€{price}</div>
      </div>
      <img
        className="description__img"
        src={RemoveIcon}
        alt="Remove"
        ref={imageRef}
        onClick={() => {
          dispatch(removeToBasket(id));
        }}
      />
    </div>
  );
};

export default connect()(BasketDetail);
