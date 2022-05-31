import { GET_CART_PRODUCTS } from "../constants/actionTypes";

export const cart = (cart = [], action) => {
  switch (action.type) {
    case GET_CART_PRODUCTS:
      return action.payload;
    default:
      return cart;
  }
};
