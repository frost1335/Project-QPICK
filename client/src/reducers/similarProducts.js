import { FETCH_SIMILAR_PRODUCTS } from "../constants/actionTypes";

export const similarProducts = (similarProducts = [], action) => {
  switch (action.type) {
    case FETCH_SIMILAR_PRODUCTS:
      return action.payload;
    default:
      return similarProducts;
  }
};
