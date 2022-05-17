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
