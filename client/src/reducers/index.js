import { combineReducers } from "redux";

import products from "./products";
import categories from "./categories";
import shops from "./shops";
import brand from "./brand";
import product from "./product";
import similarProducts from "./similarProducts";
import favorites from "./favorites";
import cart from "./cart";

export default combineReducers({
  products,
  categories,
  shops,
  brand,
  product,
  similarProducts,
  favorites,
  cart,
});
