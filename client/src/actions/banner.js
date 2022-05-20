import * as api from "../api";
import {
  CREATE_BANNER,
  DELETE_BANNER,
  EDIT_BANNER,
  GET_BANNERS,
} from "../constants/actionTypes";

export const getBanners = () => async (dispatch) => {
  try {
    const { data } = await api.getBanners();

    dispatch({ type: GET_BANNERS, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createBanner = (banner) => async (dispatch) => {
  try {
    const { data } = await api.createBanner(banner);

    dispatch({ type: CREATE_BANNER, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};
export const editBanner = (id, updatedBanner) => async (dispatch) => {
  try {
    const { data } = await api.editBanner(id, updatedBanner);

    dispatch({ type: EDIT_BANNER, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteBannner = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteBannner(id);

    dispatch({ type: DELETE_BANNER, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
