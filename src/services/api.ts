import axios from "axios";

// const API_URL = 'http://localhost:3500/api/';
const API_URL = import.meta.env.VITE_API_URL
// const API_URL = 'https://goevent-backend.vercel.app/api/';
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      window.location.href = "/404";
    }
    return Promise.reject(error);
  }
);

export default api;
