import { SET_PRODUCTS, SET_PAGINATED_PRODUCTS } from "../actions/actionTypes";

const initialState = {
  products: [],
  paginatedProducts: [],
};

const Reducer = (state = initialState, action) => {
  switch (action?.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    case SET_PAGINATED_PRODUCTS:
      return {
        ...state,
        paginatedProducts: action.paginatedProducts,
      };
    default:
      return state;
  }
};

export default Reducer;
