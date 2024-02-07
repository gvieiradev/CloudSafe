import axios from "./axios.js";

const API = "http://localhost:3000/api"

export const searchImages = () => axios.get(`${API}/explorer`);
export const removeImages = (id) => axios.delete(`${API}/explorer/${id}`, id);