import { combineReducers } from "redux";

import products from "./products";
import categories from "./categories";
import shops from "./shops";
import brand from "./brand";
import productID from "./productID";
import similarProducts from "./similarProducts";
import favorites from "./favorites";
import cart from "./cart";

export default combineReducers({
  products,
  categories,
  shops,
  brand,
  productID,
  similarProducts,
  favorites,
  cart,
});
