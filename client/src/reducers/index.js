import { combineReducers } from "redux";

import products from "./products";
import categories from "./categories";
import shops from "./shops";
import brand from "./brand";
import productID from "./productID";

export default combineReducers({
  products,
  categories,
  shops,
  brand,
  productID,
});
