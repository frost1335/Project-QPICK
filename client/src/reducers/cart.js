import { GET_CART_PRODUCTS } from "../constants/actionTypes";

export default (cart = [], action) => {
  switch (action.type) {
    case GET_CART_PRODUCTS:
      return action.payload;
    default:
      return cart;
  }
};
