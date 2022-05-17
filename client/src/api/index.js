import axios from "axios";

export const fetchProducts = () => axios.get("/api/shop/all");
export const fetchCategories = () => axios.get("/api/category");
export const fetchShops = () => axios.get("/api/shop");
export const fetchBrands = () => axios.get("/api/brand");
export const fetchSimilarProducts = (id) =>
  axios.get(`/api/product/similar/${id}`);
export const createProduct = (newProduct) =>
  axios.post("/api/product", newProduct);
export const deleteProduct = (id) => axios.delete(`/api/product/${id}`);
export const updateProduct = (id, updatedProduct) =>
  axios.put(`/api/product/${id}`, updatedProduct);
export const deleteCategory = (id) => axios.delete(`/api/category/${id}`);
export const fetchAllProducts = () => axios.get("/api/product");
export const createCategory = (category) =>
  axios.post("/api/category/", category);
export const editCategory = (id, updatedCtg) =>
  axios.put(`/api/category/${id}`, updatedCtg);
export const createShop = (shop) => axios.post("/api/shop", shop);
export const editShop = (id, updatedShop) =>
  axios.put(`/api/shop/${id}`, updatedShop);
export const deleteShop = (id) => axios.delete(`/api/shop/${id}`);
