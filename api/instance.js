import { loadState } from "@/helpers/storage";
import axios from "axios";

const handleAxios = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

handleAxios.interceptors.request.use(
  (config) => {
    const token = loadState("user");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
handleAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default handleAxios;
