import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  FETCH_ALL_PRODUCTS,
  UPDATE_PRODUCT,
} from "../constants/actionTypes";
import * as api from "../api";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();

    dispatch({ type: FETCH_ALL_PRODUCTS, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createProduct = (product) => async (dispatch) => {
  try {
    const { data } = await api.createProduct(product);

    dispatch({ type: CREATE_PRODUCT, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteProduct(id);

    console.log(data, id);

    dispatch({ type: DELETE_PRODUCT, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const editProduct = (id, product) => async (dispatch) => {
  try {
    const { data } = await api.updateProduct(id, product);

    dispatch({ type: UPDATE_PRODUCT, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};
