import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  TOGGLE_CART,
  UPDATE_PRODUCT_COUNT_IN_CART,
} from "../actions/actionTypes";

export const toggleCart = () => ({
  type: TOGGLE_CART,
});

export const addProduct = (product, count) => ({
  type: ADD_PRODUCT_TO_CART,
  product,
  count,
});

export const removeProduct = (id) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  id,
});

export const updateProductCount = (id, count) => ({
  type: UPDATE_PRODUCT_COUNT_IN_CART,
  id,
  count,
});
