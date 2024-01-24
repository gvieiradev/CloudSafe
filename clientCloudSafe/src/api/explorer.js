import axios from "./axios.js";

const API = "http://localhost:3000/api"

export const searchImages = () => axios.get(`${API}/explorer`);