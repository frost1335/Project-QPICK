import { getAllBrands, createBrand, deleteBrand, editBrand } from "./brand";
import { getCartProducts } from "./cart";
import {
  getCategories,
  deleteCategory,
  createCategory,
  editCategory,
} from "./category";
import { getFavoriteProducts } from "./favorite";
import { getAllProducts, editProducts } from "./products";
import { getAllShops, createShop, deleteShop, editShop } from "./shops";
import { getSimilarProducts } from "./similarProducts";
import {
  getProducts,
  createProduct,
  deleteProduct,
  editProduct,
} from "./product";

import { deleteAdmin, createAdmin, editAdmin, getAdmins } from "./admin";

import { authLogin } from "./auth";

import { editSlider, createSlider, deleteSlider, getSliders } from "./slider";

import { editBanner, createBanner, deleteBannner, getBanners } from "./banner";

import { createBuy, deleteBuy, editBuy, getBuys } from "./buy";

export {
  getAllBrands,
  createProduct,
  deleteCategory,
  deleteProduct,
  editProduct,
  editProducts,
  getAllProducts,
  getAllShops,
  getCartProducts,
  getCategories,
  getFavoriteProducts,
  getProducts,
  getSimilarProducts,
  createCategory,
  editCategory,
  createShop,
  deleteShop,
  editShop,
  createBrand,
  deleteBrand,
  editBrand,
  deleteAdmin,
  createAdmin,
  editAdmin,
  getAdmins,
  authLogin,
  editBanner,
  createBanner,
  deleteBannner,
  getBanners,
  editSlider,
  createSlider,
  deleteSlider,
  getSliders,
  createBuy,
  deleteBuy,
  editBuy,
  getBuys,
};
