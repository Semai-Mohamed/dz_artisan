'use client';;
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useUserStore } from '../../../utils/authStore';
import {  useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSignUpMutation } from '../../../api/auth'; // Import the mutation hook

const SignUp = () => {
  const router = useRouter();
  const { setUser, user, updateMultipleFields } = useUserStore();
  const [showPassword, setShowPassword] = useState(false);
  const [chose, setChose] = useState<'client' | 'artisan'>('client');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [profile, setProfile] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
    user: 'client',
  });
  const [showModal, setShowModal] = useState(false);

  // Use the sign-up mutation
  const { mutate: signUp, isLoading } = useSignUpMutation({
    full_name: `${profile.firstname} ${profile.lastname}`,
    lastname: profile.lastname,
    email: profile.email,
    password: profile.password,
    role: profile.user,
  });

  const handleSignUp = () => {
    // Validate the form data
    const isEmailValid = validateEmail(profile.email);
    const isPasswordValid = validatePassword(profile.password);
    const isConfirmPasswordValid = validateConfirmPassword(profile.password, profile.confirmpassword);
    updateMultipleFields({email:profile.email,password:profile.password,full_name:`${profile.firstname} ${profile.lastname}`,role:profile.user});
    if (!isEmailValid || !isPasswordValid || !isConfirmPasswordValid) {
      return; // Stop further execution if validation fails
    }

    // If validation passes, call the sign-up mutation
    signUp();
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address' }));
      return false;
    }
    setErrors((prev) => ({ ...prev, email: '' }));
    return true;
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrors((prev) => ({
        ...prev,
        password: 'Password must be at least 8 characters long and contain 1 uppercase, 1 lowercase, and 1 special character',
      }));
      return false;
    }
    setErrors((prev) => ({ ...prev, password: '' }));
    return true;
  };

  const validateConfirmPassword = (password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
      setErrors((prev) => ({ ...prev, confirmPassword: 'Passwords do not match' }));
      return false;
    }
    setErrors((prev) => ({ ...prev, confirmPassword: '' }));
    return true;
  };

  const handleTogglePassword = () => setShowPassword(!showPassword);

  const handleRoleSelection = (role: 'client' | 'artisan') => {
    setChose(role);
    setProfile((prev) => ({ ...prev, user: role }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));

    if (name === 'email') {
      validateEmail(value);
    } else if (name === 'password') {
      validatePassword(value);
      if (profile.confirmpassword) {
        validateConfirmPassword(value, profile.confirmpassword);
      }
    } else if (name === 'confirmpassword') {
      validateConfirmPassword(profile.password, value);
    }
  };

  const isFormValid =
    profile.firstname &&
    profile.lastname &&
    profile.email &&
    profile.password &&
    profile.confirmpassword &&
    !errors.email &&
    !errors.password &&
    !errors.confirmPassword;

  return (
    <div className="flex justify-center items-center h-[700px] font-Poppins relative">
      {/* Left Section */}
      <div className="flex-1 flex items-end justify-end">
        <div className="w-[80%] h-[600px] relative">
          <div className="absolute -top-10 -left-32 shadow-custom bg-[rgba(0,167,157,0.08)] rounded-full w-64 h-40"></div>
          <h1 className="text-[rgba(114,114,114,1)] text-4xl font-bold mb-6">Sign Up</h1>
          <p className="text-[rgba(114,114,114,0.6)] text-sm font-bold mb-6">
            Let's get you all set up so you can access your personal account
          </p>
          <div className="flex pl-4 flex-col w-full relative">
            <div className="flex items-center gap-[2%]">
              <div className="mb-5 flex flex-col gap-y-2 flex-1">
                <label className="text-[rgba(114,114,114,0.7)] pl-2 font-semibold">First name</label>
                <input
                  name="firstname"
                  value={profile.firstname}
                  onChange={handleInputChange}
                  placeholder="First name"
                  type="text"
                  className="bg-[rgba(217,217,217,0.23)] border-none outline-none text-[rgba(79,79,79,0.78)] placeholder:text-[rgba(79,79,79,0.48)] pl-5 h-14 rounded-xl w-11/12"
                />
              </div>
              <div className="mb-5 flex-1 flex flex-col gap-y-2 relative">
                <label className="text-[rgba(114,114,114,0.7)] pl-2 font-semibold">Last name</label>
                <input
                  value={profile.lastname}
                  onChange={handleInputChange}
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                  className="bg-[rgba(217,217,217,0.23)] border-none outline-none text-[rgba(79,79,79,0.78)] placeholder:text-[rgba(79,79,79,0.48)] pl-5 h-14 rounded-xl w-11/12"
                />
              </div>
            </div>
            <div className="mb-5 flex flex-col gap-y-2 relative w-11/12">
              <label className="text-[rgba(114,114,114,0.7)] pl-2 font-semibold">Email</label>
              <div className="relative w-full">
                <input
                  value={profile.email}
                  onChange={handleInputChange}
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={`bg-[rgba(217,217,217,0.23)] border-none outline-none text-[rgba(79,79,79,0.78)] 
                    placeholder:text-[rgba(79,79,79,0.48)] pl-5 h-14 rounded-xl w-full 
                    ${errors.email ? 'border-2 border-red-500' : ''}`}
                />
                {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
              </div>
            </div>
            <div className="mb-5 flex flex-col gap-y-2 relative w-11/12">
              <label className="text-[hsla(0,0%,45%,1)] pl-2 font-semibold">Password</label>
              <div className="relative w-full">
                <input
                  value={profile.password}
                  onChange={handleInputChange}
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="**********"
                  className={`bg-[rgba(217,217,217,0.23)] border-none outline-none text-[rgba(79,79,79,0.78)] 
                    placeholder:text-[rgba(79,79,79,0.48)] pl-5 h-14 rounded-xl w-full
                    ${errors.password ? 'border-2 border-red-500' : ''}`}
                />
                <button
                  type="button"
                  onClick={handleTogglePassword}
                  className={`absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 ${errors.password ? 'top-[30.5%]' : ''}`}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
                {errors.password && <div className="text-red-500 text-xs mt-1">{errors.password}</div>}
              </div>
            </div>
            <div className="mb-10 flex flex-col gap-y-2 relative w-11/12">
              <label className="text-[rgba(114,114,114,0.7)] pl-2 font-semibold">Confirm password</label>
              <div className="relative w-full">
                <input
                  value={profile.confirmpassword}
                  onChange={handleInputChange}
                  type={showPassword ? 'text' : 'password'}
                  name="confirmpassword"
                  placeholder="**********"
                  className={`bg-[rgba(217,217,217,0.23)] border-none outline-none text-[rgba(79,79,79,0.78)] 
                    placeholder:text-[rgba(79,79,79,0.48)] pl-5 h-14 rounded-xl w-full
                    ${errors.confirmPassword ? 'border-2 border-red-500' : ''}`}
                />
                {errors.confirmPassword && <div className="text-red-500 text-xs mt-1">{errors.confirmPassword}</div>}
              </div>
            </div>
            <div className="flex items-center justify-between w-11/12">
            
              <button className="w-[100%] py-3 items-center justify-center flex border-[rgba(81,93,239,1)] rounded-[5px] border-[1.5px] cursor-pointer">
                <Image alt="artisan" src="/images/flat-color-icons_google.svg" width={25} height={25} />
              </button>
              
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 items-center justify-center h-full flex">
        <div className="w-4/5 items-center h-[630px] flex flex-col">
          <div className="mb-6 w-full flex justify-end">
            <Image alt="decoration" src="/images/Subtract.svg" width={100} height={100} />
          </div>
          <h2 className="w-full text-3xl mb-10 text-[rgba(114,114,114,0.9)] font-semibold">
            You are ...
          </h2>
          <div className="w-11/12 flex justify-center items-center gap-[5%] h-[400px]">
            {(['client', 'artisan'] as const).map((role) => (
              <div
                key={role}
                className="flex flex-1 flex-col items-center h-[350px] justify-center gap-y-3"
              >
                <div
                  onClick={() => handleRoleSelection(role)}
                  className={`cursor-pointer border-[1.6px] flex-1 flex relative items-center w-full rounded-3xl justify-center transition-all duration-300 ${
                    chose === role
                      ? 'bg-[rgba(0,167,157,0.12)] border-white'
                      : 'border-[rgba(0,167,157,1)]'
                  }`}
                >
                  <Image
                    alt="role"
                    src="/images/7309682.svg"
                    className="w-full flex justify-center items-center h-auto"
                    width={100}
                    height={100}
                  />
                  <span
                    className={`w-4 h-4 rounded-full absolute top-5 right-3 outline-[1px] outline-double outline-offset-[2px] outline-[rgba(0,167,157,1)] ${
                      chose === role ? 'bg-[rgba(0,167,157,1)]' : ''
                    }`}
                  />
                </div>
                <div className="text-xl text-[rgba(65,65,65,1)]">
                  {role === 'client' ? 'Client' : 'Artist'}
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleSignUp}
            className={`w-10/12 py-4 mb-3 flex items-center justify-center text-white text-sm rounded-xl relative transition-all duration-300 ease-in-out top-0 hover:top-[-4px] ${
              isFormValid ? 'bg-[rgba(0,167,157,1)] cursor-pointer' : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!isFormValid || isLoading}
          >
            {isLoading ? 'Signing up...' : 'Sign up'}
          </button>
          <div className="flex w-full justify-end items-center text-xs text-[rgba(114,114,114,0.8)]">
            Already have an account?{' '}
            <Link href="/signin" className="ml-2 text-green-500 cursor-pointer">
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Progress Modal */}
     
    </div>
  );
};

export default SignUp;