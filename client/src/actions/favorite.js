import { GET_FAVORITE_PRODUCTS } from "../constants/actionTypes";
import * as api from "../api";

export const getFavoriteProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllProducts();

    const favorites = data.data
      .map((pdct) => (!!localStorage.getItem(`${pdct._id}-favorite`) ? pdct : null))
      .filter((pdct) => pdct !== null);

    dispatch({ type: GET_FAVORITE_PRODUCTS, payload: favorites });
  } catch (error) {
    console.log(error.messsage);
  }
};
