import {
  CREATE_BUY,
  DELETE_BUY,
  EDIT_BUY,
  GET_BUYS,
} from "../constants/actionTypes";

export default (buys = [], action) => {
  switch (action.type) {
    case GET_BUYS:
      return action.payload;
    case CREATE_BUY:
      return [...buys, action.payload];
    case EDIT_BUY:
      return buys.map((b) =>
        b._id === action.payload._id ? action.payload : b
      );
    case DELETE_BUY:
      return buys.filter((b) => b._id !== action.payload);
    default:
      return buys;
  }
};
