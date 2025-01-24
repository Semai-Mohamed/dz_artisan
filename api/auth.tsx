import axios from 'axios';
import { toast } from 'react-hot-toast';
import { User } from "../utils/authStore"
interface UserCredentials {
  email: string;
  password: string;
}
interface SuccessResponse {
  success: true;
  data: any;  
}
interface ErrorResponse {
  success: false;
  message: string;
}
type LoginResponse = SuccessResponse | ErrorResponse;

export type SignUpResponse = SuccessResponse | ErrorResponse;

export const postSignUpData = async (userData: User): Promise<SignUpResponse> => {
  try {
    const response = await fetch('http://localhost:3000/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: response.status === 409 
          ? (data.message || 'Email already exists')
          : (data.message || 'Sign-up failed')
      };
    }

    return {
      success: true,
      data
    };
  } catch (error) {
    return {
      success: false,
      message: 'Network error occurred'
    };
  }
};
export default postSignUpData



const loginSignUpData = async (userData: UserCredentials): Promise<LoginResponse> => {
  const response = await fetch('http://localhost:3000/user/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  
  if (!response.ok) {
    return {
      success: false,
      message: data.message || (response.status === 401 ? 'Invalid credentials' : 'Login failed')
    };
  }

  return {
    success: true,
    data
  };
};
// const isAuthenticated = () => {
//   const token = cookies.getItem('authToken')
//   return token ? true : false
// };

export { loginSignUpData,};


