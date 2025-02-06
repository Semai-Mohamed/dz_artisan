import { useMutation, useQueryClient } from "react-query";
import { useRouter } from "next/navigation";
import api from "../lib/api";
import ToastHandler from "../common/toasthHandler";

const getProfile = async () => {
  try {
    const response = await api.get("/user/me", { withCredentials: true });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const useProfileMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: getProfile,
    onSuccess: (data) => {
      console.log("Profile data fetched:", data); // Added console.log
      ToastHandler("success", "User profile fetched successfully!");
      return data; // Return the data so it can be accessed in the component
    },
    onError: (error: any) => {
      console.error("Error fetching profile:", error.response?.data || error.message);
      ToastHandler("error", error.response?.data?.message || "Failed to fetch user profile");
    },
  });
};



const createJob = async (formData: FormData) => {
  try {
    const response = await api.post("/job", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const useCreateJobMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (formData: FormData) => createJob(formData),
    onSuccess: (data) => {
      console.log("Job created successfully:", data); // Added console.log
      ToastHandler("success", "Job created successfully!");
      window.location.reload();
      return data; // Return the data so it can be accessed in the component
    },
    onError: (error: any) => {
      console.error("Error creating job:", error.response?.data || error.message);
      ToastHandler("error", error.response?.data?.message || "Failed to create job");
    },
  });
};



const getArtisanJobs = async () => {
  try {
    const response = await api.get("/job/all", { withCredentials: true });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

// ✅ Still using `useMutation` but triggered manually
export const useGetArtisanJobsMutation = () => {
  return useMutation({
    mutationFn: getArtisanJobs,
    onSuccess: (data) => {
      console.log("Fetched artisan jobs successfully:", data);
      ToastHandler("success", "Jobs fetched successfully!");
    },
    onError: (error: any) => {
      console.error("Error fetching artisan jobs:", error.response?.data || error.message);
      ToastHandler("error", error.response?.data?.message || "Failed to fetch jobs");
    },
  });
};







export { getProfile , createJob , getArtisanJobs ,  };