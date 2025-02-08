import axios, { AxiosInstance, AxiosResponse, } from "axios";
import { toast } from 'react-hot-toast';
interface CustomAxiosInstance extends AxiosInstance {
  logoutCallback?: () => void;
  setLogoutCallback: (callback: () => void) => void;
}

const api: CustomAxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  validateStatus: (status) => status == 200 || status == 201,
  headers: {
    "Content-Type": "application/json",
  },
    withCredentials: true, // Add this line
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
    }
    return Promise.reject(error);
  },
);
export default api;