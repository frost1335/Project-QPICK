import {
  CREATE_ADMIN,
  DELETE_ADMIN,
  EDIT_ADMIN,
  FETCH_ADMINS,
} from "../constants/actionTypes";

export default (admins = [], action) => {
  switch (action.type) {
    case FETCH_ADMINS:
      return action.payload;
    case CREATE_ADMIN:
      console.log([...admins, action.payload]);
      return [...admins, action.payload];
    case EDIT_ADMIN:
      return admins.map((a) =>
        a._id === action.payload._id ? action.payload : a
      );
    case DELETE_ADMIN:
      return admins.filter((a) => a._id !== action.payload);
    default:
      return admins;
  }
};
