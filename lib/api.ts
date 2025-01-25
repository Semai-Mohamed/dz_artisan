import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import ToastHandler from "../common/toasthHandler";

// Extend the AxiosInstance type
interface CustomAxiosInstance extends AxiosInstance {
  logoutCallback?: () => void;
  setLogoutCallback: (callback: () => void) => void;
}

const api: CustomAxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  //baseURL: "https://gb4dv9jc-3000.euw.devtunnels.ms",
  validateStatus: (status) => status == 200 || status == 201,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials : true
}) as CustomAxiosInstance;

api.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: any) => {
    if (error.response && error.response.status === 401) {
      ToastHandler("error", error.response.data?.message);

      // Perform logout
     logoutUser();

      // Trigger navigation callback if set
      if (api.logoutCallback) {
        api.logoutCallback();
      }
    }
    return Promise.reject(error);
  },
);

export default api;