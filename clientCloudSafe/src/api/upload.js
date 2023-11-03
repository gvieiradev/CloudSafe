import axios from "./axios.js";

const API = "http://localhost:3000/api"

export const uploadRequest = image => axios.post(`${API}/uploader`, image);