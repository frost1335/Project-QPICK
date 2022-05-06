import { FETCH_ONEPRODUCT } from "../constants/actionTypes";

export default (product = [], action) => {
  switch (action.type) {
    case FETCH_ONEPRODUCT:
      return action.payload;
    default:
      return product;
  }
};
