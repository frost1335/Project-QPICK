import { GET_FAVORITE_PRODUCTS } from "../constants/actionTypes";
import * as api from "../api";

export const getFavoriteProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();

    const favorites = data.data
      .map((ctg) => {
        ctg.products = ctg.products.filter(
          (pdct) => !!localStorage.getItem(`${pdct._id}-favorite`)
        );

        return ctg.products.length ? ctg : null;
      })
      .filter((ctg) => ctg !== null);

    dispatch({ type: GET_FAVORITE_PRODUCTS, payload: favorites });
  } catch (error) {
    console.log(error.messsage);
  }
};
