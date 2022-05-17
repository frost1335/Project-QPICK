import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
  FETCH_ALL_CATEGORIES,
} from "../constants/actionTypes";
import * as api from "../api";

export const getCategories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCategories();

    dispatch({ type: FETCH_ALL_CATEGORIES, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createCategory = (category) => async (dispatch) => {
  try {
    const { data } = await api.createCategory(category);

    dispatch({ type: CREATE_CATEGORY, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editCategory = (id, updatedCtg) => async (dispatch) => {
  try {
    const { data } = await api.editCategory(id, updatedCtg);

    dispatch({ type: EDIT_CATEGORY, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteCategory(id);

    dispatch({ type: DELETE_CATEGORY, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
