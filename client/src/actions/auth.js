import * as api from "../api";
import { AUTH_LOGIN } from "../constants/actionTypes";

export const authLogin = (authData) => async (dispatch) => {
  try {
    console.log(authData);

    dispatch({ type: AUTH_LOGIN, payload: authData });
  } catch (error) {
    console.log(error.message);
  }
};
