import {
  CREATE_BANNER,
  DELETE_BANNER,
  EDIT_BANNER,
  GET_BANNERS,
} from "../constants/actionTypes";

export default (banners = [], action) => {
  switch (action.type) {
    case GET_BANNERS:
      return action.payload;
    case CREATE_BANNER:
      return [...action.payload, action.payload];
    case EDIT_BANNER:
      return banners.map((b) =>
        b._id === action.payload._id ? action.payload : b
      );
    case DELETE_BANNER:
      return banners.filter((b) => b._id !== action.payload);
    default:
      return banners;
  }
};
