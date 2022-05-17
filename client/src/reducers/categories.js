import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
  FETCH_ALL_CATEGORIES,
} from "../constants/actionTypes";

export default (categories = [], action) => {
  switch (action.type) {
    case FETCH_ALL_CATEGORIES:
      return action.payload;
    case DELETE_CATEGORY:
      return categories.filter((c) => c._id !== action.payload);
    case CREATE_CATEGORY:
      return [...categories, action.payload];
    case EDIT_CATEGORY:
      return categories.map((c) =>
        c._id === action.payload._id ? action.payload : c
      );
    default:
      return categories;
  }
};
