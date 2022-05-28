import { GET_CART_PRODUCTS } from "../constants/actionTypes";
import * as api from "../api";

export const getCartProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();

    const cart = [];

    data.data
      .map((ctg) => {
        ctg.products = ctg.products.filter((pdct) =>
          !!localStorage.getItem(`${pdct._id}-cart`) ? cart.push(pdct) : pdct
        );

        return ctg.products.length ? ctg : null;
      })
      .filter((ctg) => ctg !== null);

    dispatch({ type: GET_CART_PRODUCTS, payload: cart });
  } catch (error) {
    console.log(error.message);
  }
};
