import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  FETCH_ALL_PRODUCTS,
  UPDATE_PRODUCT,
} from "../constants/actionTypes";

export default (products = [], action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS:
      return action.payload;
    case CREATE_PRODUCT:
      return products.map((ctg) => {
        if (ctg._id === action.payload.categoryID) {
          ctg.products = [...ctg.products, action.payload];
        }
        return ctg;
      });
    case DELETE_PRODUCT:
      return products.map((ctg) => {
        ctg.products = ctg.products.filter(
          (pdct) => pdct._id !== action.payload
        );
        return ctg;
      });
    case UPDATE_PRODUCT:
      return products.map((ctg) => {
        ctg.products.map((p) => {
          if (p._id === action.payload._id) {
            return action.payload;
          } else {
            return p;
          }
        });
        return ctg;
      });
    default:
      return products;
  }
};
