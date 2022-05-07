import { FETCH_SIMILAR_PRODUCTS } from "../constants/actionTypes";

export default (similarProducts = [], action) => {
  switch (action.type) {
    case FETCH_SIMILAR_PRODUCTS:
      return action.payload;
    default:
      return similarProducts;
  }
};
