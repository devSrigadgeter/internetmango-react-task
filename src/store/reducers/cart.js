import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  UPDATE_PRODUCT_COUNT_IN_CART,
} from "../actions/actionTypes";

const initialState = {
  cart: [],
};

const Reducer = (state = initialState, action) => {
  switch (action?.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            count: action.count,
            product: action.product,
          },
        ],
      };
    case REMOVE_PRODUCT_FROM_CART: {
      const currentCart = [...state.cart];
      const updatedCart = currentCart.filter(
        (item) => item?.product?.id !== action.id
      );
      return {
        ...state,
        cart: updatedCart,
      };
    }
    case UPDATE_PRODUCT_COUNT_IN_CART: {
      const currentCart = [...state.cart];
      const updatedCart = currentCart.map((item) => {
        if (item?.product?.id === action.id) {
          return {
            ...item,
            count: action.count,
          };
        }
        return item;
      });
      return {
        ...state,
        cart: updatedCart,
      };
    }
    default:
      return state;
  }
};

export default Reducer;
