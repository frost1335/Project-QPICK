import { CREATE_PRODUCT, FETCH_ALL_PRODUCTS } from "../constants/actionTypes";
import * as api from "../api";

export const getAccessory = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();

    dispatch({ type: FETCH_ALL_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createProduct = (product) => async (dispatch) => {
  try {
    const { data } = await api.createProduct(product);

    console.log(data);

    dispatch({ type: CREATE_PRODUCT, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};
