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
