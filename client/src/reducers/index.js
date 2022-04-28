import { combineReducers } from "redux";

import products from "./products";
import categories from "./categories";

export default combineReducers({ products, categories });
