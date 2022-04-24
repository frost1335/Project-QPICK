import axios from "axios";

export const fetchAccessory = () => axios.get("/api/category");
