import {
  DELETE_CATEGORY,
  FETCH_ALL_CATEGORIES,
} from "../constants/actionTypes";

export default (categories = [], action) => {
  switch (action.type) {
    case FETCH_ALL_CATEGORIES:
      return action.payload;
    case DELETE_CATEGORY:
      return (categories = {
        ...categories,
        data: categories.data.filter((ctg) => ctg._id !== action.payload),
      });
    default:
      return categories;
  }
};
