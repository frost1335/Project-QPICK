import { FETCH_ONEPRODUCT } from "../constants/actionTypes";
import * as api from "../api";

export const getProductById = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchProductByID(id);

    dispatch({ type: FETCH_ONEPRODUCT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
