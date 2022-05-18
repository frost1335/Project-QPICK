import {
  CREATE_BRAND,
  DELETE_BRAND,
  EDIT_BRAND,
  FETCH_ALL_BRANDS,
} from "../constants/actionTypes";

export default (brands = [], action) => {
  switch (action.type) {
    case FETCH_ALL_BRANDS:
      return action.payload;
    case CREATE_BRAND:
      return [...brands, action.payload];
    case EDIT_BRAND:
      return brands.map((b) =>
        b._id === action.payload._id ? action.payload : b
      );
    case DELETE_BRAND:
      return brands.filter((b) => b._id !== action.payload);
    default:
      return brands;
  }
};
