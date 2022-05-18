import * as api from "../api";
import { AUTH_LOGIN } from "../constants/actionTypes";

export const authLogin = (authData) => async (dispatch) => {
  try {
    const { data } = await api.authLogin(authData);

    console.log(data);

    dispatch({ type: AUTH_LOGIN, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};
