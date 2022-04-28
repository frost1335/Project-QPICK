import { FETCH_ALL_PRODUCTS } from "../constants/actionTypes";
import * as api from "../api";

export const getAccessory = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();

    dispatch({ type: FETCH_ALL_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
