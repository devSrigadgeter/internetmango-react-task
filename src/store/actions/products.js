import { SET_PAGINATED_PRODUCTS, SET_PRODUCTS } from "./actionTypes";

export const updateProducts = (products) => ({
  type: SET_PRODUCTS,
  products,
});

export const updatePaginatedProducts = (paginatedProducts) => ({
  type: SET_PAGINATED_PRODUCTS,
  paginatedProducts,
});
