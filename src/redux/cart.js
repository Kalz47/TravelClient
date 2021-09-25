import { ADD_TO_CART, RESET_CART, REMOVE_FROM_CART } from "../actions/type";

const initialState = {
  cartItems: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { payload, type } = action;
  // const values = localStorage.getItem("cart");
  // state.cartItems.push([...state.cartItems, values]);

  switch (type) {
    case ADD_TO_CART:
      const item = payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
}
