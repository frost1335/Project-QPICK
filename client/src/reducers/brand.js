import { FETCH_ALL_BRANDS } from "../constants/actionTypes";

export default (brands = [], action) => {
  switch (action.type) {
    case FETCH_ALL_BRANDS:
      return action.payload;
    default:
      return brands;
  }
};
