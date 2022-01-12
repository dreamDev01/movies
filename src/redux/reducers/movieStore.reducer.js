import { ADD_TO_BASKET, REMOVE_TO_BASKET } from "../actions";
import { movies } from "../../data/movies";

const initialState = {
  movies: movies,
  basket: [],
};

/***Reducer to manage movies***/
const movieStoreReducer = (state = initialState, action) => {
  let newBasket;
  let index;

  switch (action.type) {
    case ADD_TO_BASKET:
      newBasket = [...state.basket];
      index = newBasket.findIndex((b) => b.id === action.payload.id);

      if (index < 0) {
        newBasket.push({ ...action.payload });
      } else {
        const updatedBasket = {
          ...newBasket[index],
        };

        updatedBasket.quantity++;
        newBasket[index] = updatedBasket;
      }

      return { ...state, basket: newBasket };
    case REMOVE_TO_BASKET:
      newBasket = [...state.basket];
      index = newBasket.findIndex((item) => item.id === action.payload);

      newBasket.splice(index, 1);

      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default movieStoreReducer;
