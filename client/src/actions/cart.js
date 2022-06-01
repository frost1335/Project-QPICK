import { GET_CART_PRODUCTS } from "../constants/actionTypes";
import * as api from "../api";

export const getCartProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllProducts();

    const cart = data.data
      .map((pdct) => (!!localStorage.getItem(`${pdct._id}-cart`) ? pdct : null))
      .filter((pdct) => pdct !== null);

    dispatch({ type: GET_CART_PRODUCTS, payload: cart });
  } catch (error) {
    console.log(error.message);
  }
};
