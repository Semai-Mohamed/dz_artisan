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