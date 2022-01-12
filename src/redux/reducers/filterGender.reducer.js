import { ADD_GENDER_TO_FILTER, REMOVE_GENDER_TO_FILTER } from "../actions";

/***Reducer to manage gender Filter ***/
export const filterGenderReducer = (state = "", action) => {
  switch (action.type) {
    case ADD_GENDER_TO_FILTER:
      if (state.includes(action.gender)) return state;
      return (state += action.gender);
    case REMOVE_GENDER_TO_FILTER:
      const reg = new RegExp(action.gender, "gi");
      return state.replace(reg, "");
    default:
      return state;
  }
};
