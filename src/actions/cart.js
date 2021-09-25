import { ADD_TO_CART, RESET_CART, REMOVE_FROM_CART } from "./type";
import axios from "axios";

export const addToCart = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:8000/api/service/${id}`);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      price: data.price,
      time: data.time,
      location: data.location,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
