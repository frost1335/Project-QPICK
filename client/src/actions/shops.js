import { FETCH_ALL_SHOPS } from "../constants/actionTypes";
import * as api from "../api";

export const getAllShops = () => async (dispatch) => {
  try {
    const { data } = await api.fetchShops();

    dispatch({ type: FETCH_ALL_SHOPS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
