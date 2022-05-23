import axios from "axios";

// product
export const fetchProducts = () => axios.get("/api/shop/all");
export const fetchAllProducts = () => axios.get("/api/product");
export const updateProduct = (id, updatedProduct) =>
  axios.put(`/api/product/${id}`, updatedProduct);
export const createProduct = (newProduct) =>
  axios.post("/api/product", newProduct);
export const deleteProduct = (id) => axios.delete(`/api/product/${id}`);

// category
export const fetchCategories = () => axios.get("/api/category");
export const createCategory = (category) =>
  axios.post("/api/category/", category);
export const editCategory = (id, updatedCtg) =>
  axios.put(`/api/category/${id}`, updatedCtg);
export const deleteCategory = (id) => axios.delete(`/api/category/${id}`);

// shop
export const fetchShops = () => axios.get("/api/shop");
export const createShop = (shop) => axios.post("/api/shop", shop);
export const editShop = (id, updatedShop) =>
  axios.put(`/api/shop/${id}`, updatedShop);
export const deleteShop = (id) => axios.delete(`/api/shop/${id}`);

// brand
export const fetchBrands = () => axios.get("/api/brand");
export const createBrand = (brand) => axios.post("/api/brand/", brand);
export const editBrand = (id, updatedBrand) =>
  axios.put(`/api/brand/${id}`, updatedBrand);
export const deleteBrand = (id) => axios.delete(`/api/brand/${id}`);

// similar product
export const fetchSimilarProducts = (id) =>
  axios.get(`/api/product/similar/${id}`);

// admin
export const getAdmins = () => axios.get("/api/admin");
export const createAdmin = (admin) => axios.post("/api/admin", admin);
export const editAdmin = (id, updatedAdmin) =>
  axios.put(`/api/admin/${id}`, updatedAdmin);
export const deleteAdmin = (id) => axios.delete(`/api/admin/${id}`);

// auth
export const authLogin = (authData) => axios.post("/api/auth/login", authData);

// home slider
export const getSliders = () => axios.get("/api/slider");
export const createSlider = (slider) => axios.post("/api/slider", slider);
export const editSlider = (id, updatedSlider) =>
  axios.put(`/api/slider/${id}`, updatedSlider);
export const deleteSlider = (id) => axios.delete(`/api/slider/${id}`);

// home banner
export const getBanners = () => axios.get(`/api/banner/`);
export const createBanner = (banner) => axios.post(`/api/banner/`, banner);
export const editBanner = (id, updatedBanner) =>
  axios.put(`/api/banner/${id}`, updatedBanner);
export const deleteBannner = (id) => axios.delete(`/api/banner/${id}`);

// buys
export const getBuys = () => axios.get("/api/buy");
export const createBuy = (buy) => axios.post("/api/buy", buy);
export const editBuy = (id, updatedBuy) =>
  axios.put(`/api/buy/${id}`, updatedBuy);
export const deleteBuy = (id) => axios.delete(`/api/buy/${id}`);
