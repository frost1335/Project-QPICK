import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  FETCH_ALL_PRODUCTS,
} from "../constants/actionTypes";

export default (products = [], action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS:
      return action.payload;
    case CREATE_PRODUCT:
      return products.data.map((ctg) => {
        if (ctg._id === action.payload.categoryID) {
          ctg.products = [...ctg.products, action.payload];
        }
        return ctg;
      });
    case DELETE_PRODUCT:
      let newProducts = {
        data: products.data.map((ctg) => {
          ctg.products = ctg.products.filter(
            (pdct) => pdct._id !== action.payload
          );
          return ctg;
        }),
      };
      console.log(newProducts, action.payload);
      return newProducts;
    default:
      return products;
  }
};
