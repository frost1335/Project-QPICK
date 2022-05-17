import * as api from "../api";
import { FETCH_SIMILAR_PRODUCTS } from "../constants/actionTypes";

export const getSimilarProducts = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchSimilarProducts(id);

    dispatch({ type: FETCH_SIMILAR_PRODUCTS, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};
