import axios from "./axios.js";

const API = "http://localhost:3000/api"

export const getUserRequest = () => axios.get(`${API}/profile`);