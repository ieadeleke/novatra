import axios from "axios";

export const axiosURL = axios.create({
    baseURL: "https://backend.novatradar.com"
    // baseURL: "http://localhost:8000"
})