import axios from "axios";

let logoutHandler = null;

export const setLogoutHandler = (fn) => {
  logoutHandler = fn;
};

export const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("bl_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      if (logoutHandler) logoutHandler();
    }
    return Promise.reject(error);
  }
);
localhost