// external imports
import { combineReducers } from "redux";

// reducers import
import ProductsReducer from "./products";

export default combineReducers({
  products: ProductsReducer,
});
