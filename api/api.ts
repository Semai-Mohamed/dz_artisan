    // File: @/constants/api.ts
import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { toast } from 'react-hot-toast';

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
}) as CustomAxiosInstance;

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: any) => {
    if (error.response && error.response.status === 401) {
      const errMessage =
        typeof error.response.data?.message === "string"
          ? error.response.data.message
          : error.response.data?.message?.[0] || "Authentication error";

      toast.error(errMessage);

      // Perform logout
    }
    return Promise.reject(error);
  },
);



export default api;