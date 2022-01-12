import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import basketIcon from "../../images/basket.png";

import "./Header.scss";

/*-------Header----------*/
/*props :         */
/*  - basketCount */

const Header = (props) => {
  const { basketCount } = props;
  return (
    <div className="header">
      <p className="header__title">Movies Store</p>
      <div className="header__basket">
        <NavLink to="/basket">
          <img className="header__img" src={basketIcon} alt="Basket" />
        </NavLink>
        <div>
          {basketCount > 0 &&
            `(
          ${basketCount} vidéo(s))`}
        </div>
      </div>
    </div>
  );
};

/*Map basket state to props: count of movies present on the basket*/
const headerToProps = (state) => {
  return {
    basketCount: state.movieStore.basket.length,
  };
};

export default connect(headerToProps, null)(Header);
