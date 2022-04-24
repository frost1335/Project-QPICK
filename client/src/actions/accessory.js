import { FETCH_ALL } from "../constants/actionTypes";
import * as api from "../api";

export const getAccessory = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAccessory();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
