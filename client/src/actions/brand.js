import {
  CREATE_BRAND,
  DELETE_BRAND,
  EDIT_BRAND,
  FETCH_ALL_BRANDS,
} from "../constants/actionTypes";
import * as api from "../api";

export const getAllBrands = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBrands();

    dispatch({ type: FETCH_ALL_BRANDS, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createBrand = (brand) => async (dispatch) => {
  try {
    const { data } = await api.createBrand(brand);

    dispatch({ type: CREATE_BRAND, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editBrand = (id, updatedBrand) => async (dispatch) => {
  try {
    const { data } = await api.editBrand(id, updatedBrand);

    dispatch({ type: EDIT_BRAND, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteBrand = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteBrand(id);

    dispatch({ type: DELETE_BRAND, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
