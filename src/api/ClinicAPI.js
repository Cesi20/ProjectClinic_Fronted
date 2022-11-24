import axios from "axios";

export const ClinicAPI = axios.create({
    baseURL: "http://localhost:3001/api",
})