export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const REMOVE_TO_BASKET = "REMOVE_TO_BASKET";
export const ADD_GENDER_TO_FILTER = "ADD_GENDER_TO_FILTER";
export const REMOVE_GENDER_TO_FILTER = "REMOVE_GENDER_TO_FILTER";
export const BY_ASC = "BY_ASC";
export const BY_DESC = "BY_DESC";

/*action : ascending sort*/
export const byAsc = () => {
  return {
    type: BY_ASC,
  };
};

/*action : descending sort*/
export const byDesc = () => {
  return {
    type: BY_DESC,
  };
};

/*action : add movie to basket*/
export const addToBasket = (movie) => {
  return {
    type: ADD_TO_BASKET,
    payload: movie,
  };
};

/*action : remove movie to basket*/
export const removeToBasket = (movieId) => {
  return {
    type: REMOVE_TO_BASKET,
    payload: movieId,
  };
};

/*action : filter by gender*/
export const addGenderToFilter = (gender) => {
  return {
    type: ADD_GENDER_TO_FILTER,
    gender,
  };
};

/*action : remove a gender on the filter*/
export const removeGenderToFilter = (gender) => {
  return {
    type: REMOVE_GENDER_TO_FILTER,
    gender,
  };
};
