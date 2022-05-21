// external imports
import { combineReducers } from "redux";

// reducers import
import ProductsReducer from "./products";
import CartReducer from "./cart";

export default combineReducers({
  products: ProductsReducer,
  cart: CartReducer,
});
