import {
  CREATE_BUY,
  DELETE_BUY,
  EDIT_BUY,
  GET_BUYS,
} from "../constants/actionTypes";

import * as api from "../api";

export const getBuys = () => async (dispatch) => {
  try {
    const { data } = await api.getBuys();

    dispatch({ type: GET_BUYS, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createBuy = (buy) => async (dispatch) => {
  try {
    const { data } = await api.createBuy(buy);

    localStorage.setItem(`${data.data._id}-buy`, data.data._id);

    dispatch({ type: CREATE_BUY, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editBuy = (id, updatedBuy) => async (dispatch) => {
  try {
    const { data } = await api.editBuy(id, updatedBuy);

    dispatch({ type: EDIT_BUY, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteBuy = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteBuy(id);

    dispatch({ type: DELETE_BUY, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
