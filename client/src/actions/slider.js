import * as api from "../api";
import {
  CREATE_SLIDER,
  DELETE_SLIDER,
  EDIT_SLIDER,
  GET_SLIDERS,
} from "../constants/actionTypes";

export const getSliders = () => async (dispatch) => {
  try {
    const { data } = await api.getSliders();

    dispatch({ type: GET_SLIDERS, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createSlider = (slider) => async (dispatch) => {
  try {
    const { data } = await api.createSlider(slider);

    dispatch({ type: CREATE_SLIDER, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editSlider = (id, updatedSlider) => async (dispatch) => {
  try {
    const { data } = await api.editSlider(id, updatedSlider);

    dispatch({ type: EDIT_SLIDER, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteSlider = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteSlider(id);

    dispatch({ type: DELETE_SLIDER, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
