import { combineReducers } from "redux";

import products from "./products";
import categories from "./categories";
import shops from "./shops";
import brand from "./brand";
import product from "./product";
import similarProducts from "./similarProducts";
import favorites from "./favorites";
import cart from "./cart";
import admins from "./admin";
import auth from "./auth";
import banners from "./banners";
import sliders from "./sliders";
import buys from "./buy";

export default combineReducers({
  products,
  categories,
  shops,
  brand,
  product,
  similarProducts,
  favorites,
  cart,
  admins,
  auth,
  banners,
  sliders,
  buys,
});
