import {
  CREATE_SHOP,
  DELETE_SHOP,
  EDIT_SHOP,
  FETCH_ALL_SHOPS,
} from "../constants/actionTypes";

export default (shops = [], action) => {
  switch (action.type) {
    case FETCH_ALL_SHOPS:
      return action.payload;
    case CREATE_SHOP:
      return [...shops, action.payload];
    case EDIT_SHOP:
      return shops.map((sh) =>
        sh._id === action.payload._id ? action.payload : sh
      );
    case DELETE_SHOP:
      return shops.filter((sh) => sh._id !== action.payload);
    default:
      return shops;
  }
};
