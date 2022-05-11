import { CREATE_PRODUCT, FETCH_ALL_PRODUCTS } from "../constants/actionTypes";

export default (products = [], action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS:
      return action.payload;
    case CREATE_PRODUCT:
      console.log(products.data);
      products.data.map((ctg) => {
        ctg.products = [...ctg.products, action.payload];
        return ctg;
      });
      return products;
    default:
      return products;
  }
};
