import { connect } from "react-redux";

import BasketDetail from "../../components/BasketDetail/BasketDetail";

import "./Basket.scss";

/*-------Basket Page---------*/
/*props :          */
/*  - basketItems  */
/*  - total        */

const Basket = (props) => {
  const { basketItems, total } = props;

  return (
    <div className="basket">
      <div className="basket__title">Panier de location</div>
      {basketItems.map((item, index) => {
        return (
          <div key={index}>
            <BasketDetail {...item} />
          </div>
        );
      })}
      <div className="basket__total">Total: €{total}</div>
    </div>
  );
};

/*Map basket state to props: list of items added to the basket and item count*/
const basketToProps = (state) => {
  return {
    basketItems: state.movieStore.basket,
    total: state.movieStore.basket.reduce((count, curItem) => {
      return count + curItem.price;
    }, 0),
  };
};

export default connect(basketToProps, null)(Basket);
