import { EDIT_PRODUCT, FETCH_PRODUCTS } from "../constants/actionTypes";
import * as api from "../api";

export const getAllProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllProducts();

    dispatch({ type: FETCH_PRODUCTS, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editProducts = (id, updatedProduct) => async (dispatch) => {
  try {
    const { data } = await api.updateProduct(id, updatedProduct);

    dispatch({ type: EDIT_PRODUCT, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};
