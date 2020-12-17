import { combineReducers } from "redux";
import BurgerReducer from "./BurgerReducers";
const rootReducer = combineReducers({
  BurgerReducer,
});
export default rootReducer;
