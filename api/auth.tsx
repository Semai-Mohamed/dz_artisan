import axios from 'axios';
import { toast } from 'react-hot-toast';
import { User } from "../utils/authStore"
const postSignUpData = async (userData: User) => {
    const response = await fetch(`http://localhost:3001/user/signup`, { //env
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
      const response = await axios.post(`http://localhost:3001/user/google/callback`, { token });
  
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