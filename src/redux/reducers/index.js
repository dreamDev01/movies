import { combineReducers } from "redux";
import { filterGenderReducer } from "./filterGender.reducer";
import { filterOrderReducer } from "./filterOrder.reducer";
import movieStore from "./movieStore.reducer";

export default combineReducers({
  movieStore,
  filterGender: filterGenderReducer,
  filterOrder: filterOrderReducer,
});
