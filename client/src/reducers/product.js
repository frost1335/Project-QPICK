import { EDIT_PRODUCT, FETCH_PRODUCTS } from "../constants/actionTypes";

export default (product = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload;
    case EDIT_PRODUCT:
      return product.map((p) =>
        p._id === action.payload._id ? action.payload : p
      );
    default:
      return product;
  }
};
