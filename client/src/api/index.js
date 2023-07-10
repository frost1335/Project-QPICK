import axios from "axios";

import { PROXY_URL } from "../constants/actionTypes";

const URL = PROXY_URL;

// product
export const fetchProducts = () => axios.get(`${PROXY_URL}/api/shop/all`);
export const fetchAllProducts = () => axios.get(`${URL}/api/product`);
export const updateProduct = (id, updatedProduct) =>
  axios.put(`${URL}/api/product/${id}`, updatedProduct);
export const createProduct = (newProduct) =>
  axios.post(`${URL}/api/product`, newProduct);
export const deleteProduct = (id) => axios.delete(`${URL}/api/product/${id}`);

// category
export const fetchCategories = () => axios.get(`${URL}/api/category`);
export const createCategory = (category) =>
  axios.post(`${URL}/api/category/`, category);
export const editCategory = (id, updatedCtg) =>
  axios.put(`${URL}/api/category/${id}`, updatedCtg);
export const deleteCategory = (id) => axios.delete(`${URL}/api/category/${id}`);

// shop
export const fetchShops = () => axios.get(`${URL}/api/shop`);
export const createShop = (shop) => axios.post(`${URL}/api/shop`, shop);
export const editShop = (id, updatedShop) =>
  axios.put(`${URL}/api/shop/${id}`, updatedShop);
export const deleteShop = (id) => axios.delete(`${URL}/api/shop/${id}`);

// brand
export const fetchBrands = () => axios.get(`${URL}/api/brand`);
export const createBrand = (brand) => axios.post(`${URL}/api/brand/`, brand);
export const editBrand = (id, updatedBrand) =>
  axios.put(`${URL}/api/brand/${id}`, updatedBrand);
export const deleteBrand = (id) => axios.delete(`${URL}/api/brand/${id}`);

// similar product
export const fetchSimilarProducts = (id) =>
  axios.get(`${URL}/api/product/similar/${id}`);

// admin
export const getAdmins = () => axios.get(`${URL}/api/admin`);
export const createAdmin = (admin) => axios.post(`${URL}/api/admin`, admin);
export const editAdmin = (id, updatedAdmin) =>
  axios.put(`${URL}/api/admin/${id}`, updatedAdmin);
export const deleteAdmin = (id) => axios.delete(`${URL}/api/admin/${id}`);

// auth
export const authLogin = (authData) =>
  axios.post(`${URL}/api/auth/login`, authData);

// home slider
export const getSliders = () => axios.get(`${URL}/api/slider`);
export const createSlider = (slider) => axios.post(`${URL}/api/slider`, slider);
export const editSlider = (id, updatedSlider) =>
  axios.put(`${URL}/api/slider/${id}`, updatedSlider);
export const deleteSlider = (id) => axios.delete(`${URL}/api/slider/${id}`);

// home banner
export const getBanners = () => axios.get(`${URL}/api/banner/`);
export const createBanner = (banner) =>
  axios.post(`${URL}/api/banner/`, banner);
export const editBanner = (id, updatedBanner) =>
  axios.put(`${URL}/api/banner/${id}`, updatedBanner);
export const deleteBannner = (id) => axios.delete(`${URL}/api/banner/${id}`);

// buys
export const getBuys = () => axios.get(`${URL}/api/buy`);
export const createBuy = (buy) => axios.post(`${URL}/api/buy`, buy);
export const editBuy = (id, updatedBuy) =>
  axios.put(`${URL}/api/buy/${id}`, updatedBuy);
export const deleteBuy = (id) => axios.delete(`${URL}/api/buy/${id}`);
