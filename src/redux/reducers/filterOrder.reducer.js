import { BY_ASC, BY_DESC } from "../actions";

/***Reducer to manage date Filter by order ***/
export const filterOrderReducer = (state = "", action) => {
  switch (action.type) {
    case BY_ASC:
      return "asc";
    case BY_DESC:
      return "desc";
    default:
      return state;
  }
};
