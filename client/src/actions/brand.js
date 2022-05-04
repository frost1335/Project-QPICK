import { FETCH_ALL_BRANDS } from "../constants/actionTypes";
import * as api from "../api";

export const getAllBrands = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBrands();

    dispatch({ type: FETCH_ALL_BRANDS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
