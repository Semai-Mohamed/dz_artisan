  import axios from 'axios';
  import { toast } from 'react-hot-toast';
  import { User } from "../utils/authStore"
  import { useRouter } from 'next/navigation';
  import api from '../lib/api';
  import { useMutation } from 'react-query';
  import ToastHandler from '../common/toasthHandler';
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
    
    // api calls
    export const Signin = async (form: SigninDto) => {
      const response = await api.post("/user/signin", form);
      return response.data;
    };
    
    export const Signup = async (form: SignupDto) => {
      const response = await api.post("/user/signup", form);
      return response.data;
    };
    
    // mutations
    export const useSignInMutation = (form: SigninDto) => {
      const router = useRouter();
    
      return useMutation({
        mutationFn: () => Signin(form), // Pass the form data directly
        onSuccess: async (data : any) => {
          router.replace("/");
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
        mutationFn: () => Signup(form), // Use the signUp function from your auth API
        onSuccess: async (data : any) => {
          ToastHandler("success","Welcome aboard");
          router.replace("/home");
        },
        onError: (error: any) => {
          ToastHandler(
            "error",
            error.response?.data.message,
          );
        },
      });
    };