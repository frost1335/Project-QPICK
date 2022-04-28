import axios from "axios";

export const fetchProducts = () => axios.get("/api/shop/all");  
export const fetchCategories = () => axios.get("/api/category");
