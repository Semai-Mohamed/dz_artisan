  import axios from 'axios';
  import { toast } from 'react-hot-toast';
  import { User, useUserStore } from "../utils/authStore"
  import { useRouter } from 'next/navigation';
  import api from '../lib/api';
  import { useMutation } from 'react-query';
  import ToastHandler from '../common/toasthHandler';
import { set } from 'zod';

  const postSignUpData = async (userData: User) => {
      const response = await fetch(`http://localhost:3000/user/signup`, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        if (response.status === 409) {
          throw new Error(errorData.message || 'Email already exists')}
        throw new Error(errorData.message || 'Sign-up failed')
      }
  return response.json();}
  export default postSignUpData

  export const googleAuth = async (token: string) => {
      try {
        const response = await axios.post(`http://localhost:3000/user/google/callback`, { token });
    
        if (response.data.success) {
          
          toast.success('Login successful!');
          localStorage.setItem('token', response.data.token); // Store the JWT token locally
          return response.data; // Return data for further processing
        } else {
          throw new Error(response.data.message || 'Google authentication failed');
        }
      } catch (error: any) {
        toast.error(error.response?.data?.message || 'Failed to authenticate with Google');
        throw error;
      }
    };
    
    export type SigninDto = {
      email: string;
      password: string;
    };
    
    export type SignupDto = {
      full_name: string;
      lastname: string;
      email: string;
      password: string;
      role : string
    };
    export type CompleteProfileDto = {
      username: string;
      birthday?: Date | null;
      employment_status?: string;
      bio?: string;
      profile_picture?: File | null;
    };
    export type ProjectDto = {
      title: string;
      description: string;
      completion_date: string;
    };
    
    // Job Details type
    export type JobDetailsDto = {
      job_title: string;
      years_experience: number;
      cv_document: File | null;
    };
    // api calls
    export const Signin = async (form: SigninDto) => {
      const response = await api.post("/user/signin", form);
      return response.data;
    };
    
    export const Signup = async (form: SignupDto) => {
      const response = await api.post("/user/signup", form);
      return response.data;
    };
    
    export const postProjects = async (projects: ProjectDto[]) => {
      try {
        console.log("Sending request with:", projects);
    
        const response = await api.post("/experience", { projects }, { withCredentials: true });
    
        console.log("Response received:", response.data);
        return response.data;
      } catch (error: any) {
        console.error("Error in postProjects:", error.response?.data || error.message);
        throw error;
      }
    };

export const postJobDetails = async (jobDetails: JobDetailsDto) => {
  const formData = new FormData();
  formData.append('job_title', jobDetails.job_title);
  formData.append('years_experience', jobDetails.years_experience.toString());
  
  if (jobDetails.cv_document) {
    formData.append('cv_document', jobDetails.cv_document);
  }

  const response = await api.post("/user/artisan", formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data;
};
    export const useSignInMutation = (form: SigninDto) => {
      const router = useRouter();
    
      return useMutation({
        mutationFn: () => Signin(form), 
        onSuccess: async (data : any) => {
          router.replace("/artist");
        },
        onError: (error: any) => {
          console.log(error.response.data);
          ToastHandler("error", error.response?.data.message);
        },
      });
    };
    export const useSignUpMutation = (form: SignupDto) => {
      const router = useRouter();
      
      return useMutation({
        mutationFn: () => Signup(form), 
        onSuccess: async (data : any) => {
          ToastHandler("success","Welcome aboard");
          router.replace("/signup/setup");
        },
        onError: (error: any) => {
          ToastHandler(
            "error",
            error.response?.data.message,
          );
        },
      });
    };


    export const completeProfile = async (form: FormData) => {
      const response = await api.post("/user/complete-profile", form, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      return response.data;
    };

    export const useCompleteProfileMutation = (user: User | null) => {
      const router = useRouter();
    
      return useMutation({
        mutationFn: (form: FormData) => completeProfile(form),
        onSuccess: async (data: any) => {
          ToastHandler("success", "Profile completed successfully!");
          router.replace(`/${user?.role === "artisan" ? "signup/artisan" : "home"}`);
        },
        onError: (error: any) => {
          ToastHandler("error", error.response?.data.message || "Failed to complete profile");
        },
      });
    };

    export const useProjectsMutation = () => {
      const router = useRouter();
    
      return useMutation({
        mutationFn: postProjects,
        onSuccess: async () => {
          ToastHandler("success", "Projects submitted successfully!");
          router.replace("/artist");
        },
        onError: (error: any) => {
          console.error("Mutation error:", error.response?.data || error.message);
          if (error.response?.data?.message === "JWT cookie not found") {
            ToastHandler("error", "Session expired, please log in again.");
            router.replace("/signin");
          } 
        },
      });
    };
export const useJobDetailsMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (jobDetails: JobDetailsDto) => postJobDetails(jobDetails),
    onSuccess: async (data: any) => {
      ToastHandler("success", "Job details submitted successfully!");
      router.replace("/artist"); 
    },
    onError: (error: any) => {
      ToastHandler(
        "error",
        error.response?.data.message || "Failed to submit job details"
      );
    },
  });
};
