import {
  CREATE_SHOP,
  DELETE_SHOP,
  EDIT_SHOP,
  FETCH_ALL_SHOPS,
} from "../constants/actionTypes";
import * as api from "../api";

export const getAllShops = () => async (dispatch) => {
  try {
    const { data } = await api.fetchShops();

    dispatch({ type: FETCH_ALL_SHOPS, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createShop = (shop) => async (dispatch) => {
  try {
    const { data } = await api.createShop(shop);

    dispatch({ type: CREATE_SHOP, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editShop = (id, updatedShop) => async (dispatch) => {
  try {
    const { data } = await api.editShop(id, updatedShop);

    dispatch({ type: EDIT_SHOP, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteShop = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteShop(id);

    dispatch({ type: DELETE_SHOP, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
