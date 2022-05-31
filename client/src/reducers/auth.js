import { AUTH_LOGIN } from "../constants/actionTypes";

export const auth = (auth = [], action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return action.payload;
    default:
      return auth;
  }
};
