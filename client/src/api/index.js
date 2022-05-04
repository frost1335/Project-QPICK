import axios from "axios";

export const fetchProducts = () => axios.get("/api/shop/all");
export const fetchCategories = () => axios.get("/api/category");
export const fetchShops = () => axios.get("/api/shop");
export const fetchBrands = () => axios.get("/api/brand");
