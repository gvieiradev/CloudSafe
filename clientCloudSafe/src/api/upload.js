import axios from "./axios.js";

const API = "http://localhost:3000/api"

export const uploadRequest = (data) => axios.post(`${API}/uploader`, data);
export const deleteRequest = (id) => axios.delete(`${API}/uploader/:${id}`, id);