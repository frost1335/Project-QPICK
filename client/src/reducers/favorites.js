import { GET_FAVORITE_PRODUCTS } from "../constants/actionTypes";

export default (favorites = [], action) => {
  switch (action.type) {
    case GET_FAVORITE_PRODUCTS:
      return action.payload;
    default:
      return favorites;
  }
};
