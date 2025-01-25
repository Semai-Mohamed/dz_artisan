'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; 
import img from '../../../public/images/alireza-valizadeh-o6WViBEzOWU-unsplash 1.png';
import img2 from '../../../public/images/alireza-valizadeh-o6WViBEzOWU-unsplash 1.png';
import img3 from '../../../public/images/alireza-valizadeh-o6WViBEzOWU-unsplash 1.png';
import img4 from '../../../public/images/Subtract (2).svg'
import img5 from '../../../public/images/Vector (2).svg'
import img6 from '../../../public/images/flat-color-icons_google.svg'
import img7 from '../../../public/images/ant-design_apple-filled.svg'
import Link from 'next/link';
const Login = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [showCredentialsPrompt, setShowCredentialsPrompt] = useState(false);
  const [hasSavedCredentials, setHasSavedCredentials] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const images = [img, img2, img3];
  useEffect(() => {
    const savedCredentials = localStorage.getItem('userCredentials');
    if (savedCredentials) {
      setHasSavedCredentials(true)}
  },[])
  const handleInputFocus = () => {
    if (hasSavedCredentials && !formData.username && !formData.password) {
      setShowCredentialsPrompt(true);}}
  const loadSavedCredentials = () => {
    const savedCredentials = localStorage.getItem('userCredentials');
    if (savedCredentials) {
      setFormData(JSON.parse(savedCredentials));
      setShowCredentialsPrompt(false)}}
  const handleClick = (index: number) => {
    if (index !== activeIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsAnimating(false);
      },200)}}
  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))}
  const handleLogin = () => {
    if (formData.rememberMe) {
      localStorage.setItem('userCredentials', JSON.stringify(formData))
    } else {
      localStorage.removeItem('userCredentials')
    }
    console.log('Logging in with:', formData)}
  const handleTogglePassword = () => {
    setShowPassword(!showPassword)}
  return (
    <div className="w-full items-center justify-center flex font-Poppins">
      <div className="flex items-center justify-center gap-x-6 w-full">
        <div className="flex-1 h-[700px] flex items-end justify-end">
          <div className="w-[80%] h-[630px]">
            <div className="text-[rgba(114,114,114,1)] text-4xl font-bold mb-6">Login</div>
            <div className="text-[rgba(114,114,114,0.6)] text-sm font-thin mb-6">
              Login to access your travelwise account
            </div>
            <div className="flex pl-4 flex-col w-full relative">
              {showCredentialsPrompt && (
                <div className="absolute -top-12 left-0 w-11/12 bg-blue-50 p-4 rounded-lg text-sm text-blue-600 flex justify-between items-center">
                  <span>Saved credentials found. Would you like to use them?</span>
                  <button 
                    onClick={loadSavedCredentials}
                    className="bg-blue-500 text-white px-4 py-2 rounded">
                    Saved
                  </button>
                </div>)}
              <div className="mb-5 flex flex-col gap-y-2">
                <label className="text-[rgba(114,114,114,0.7)] text-sm">user name</label>
                <input
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  placeholder="Semai"
                  type="text"
                  className="bg-[rgba(217,217,217,0.23)] border-none outline-none text-[rgba(79,79,79,0.78)] placeholder:text-[rgba(79,79,79,0.48)] pl-5 h-14 rounded-xl w-11/12" />
              </div>
              <div className="mb-5 flex flex-col gap-y-2 relative">
                <label className="text-[rgba(114,114,114,0.8)] text-sm">password</label>
                <div className="relative w-11/12">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    placeholder="Password"
                    className="bg-[rgba(217,217,217,0.23)] border-none outline-none text-[rgba(79,79,79,0.78)] placeholder:text-[rgba(79,79,79,0.48)] pl-5 h-14 rounded-xl w-full"/>
                  <button
                    type="button"
                    onClick={handleTogglePassword}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              <div className='items-center flex justify-between mb-6 w-11/12'>
                <div className='flex justify-center items-center gap-x-2'>
                  <input 
                    type="checkbox" 
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange} />
                  <div className='text-[rgba(114,114,114,1)] text-sm'>Remember me</div>
                </div>
                <div className='text-[rgba(81,93,239,1)] text-sm cursor-pointer'>Forgot Password</div>
              </div>
              <div 
                onClick={handleLogin}
                className='w-11/12 py-5 rounded-lg cursor-pointer bg-[rgba(0,167,157,1)] text-sm text-[rgba(243,243,243,1)] flex justify-center items-center mb-4 relative bottom-0 hover:bottom-1 transition-all duration-300 ease-in-out'>
                Login
              </div>
              <div className='w-11/12 flex justify-end text-sm items-center mb-4 text-[rgba(114,114,114,1)]'>D'ont have an account? <div className='ml-1 text-[rgba(81,93,239,1)] text-sm cursor-pointer'><Link  href="/signUp">signUp</Link></div></div> 
              <div className='flex justify-center items-center w-11/12 mb-6 text-[rgba(49,49,49,0.7)] font-thin'>Or login with</div>
              <div className='flex items-center justify-between w-11/12'>
                <div className='w-[30%] py-3 items-center justify-center flex border-[rgba(81,93,239,1)] rounded-[5px] border-[1.5px] cursor-pointer'><Image alt="artisan" src={img5} width={25} /></div>
                <div className='w-[30%] py-3 items-center justify-center flex border-[rgba(81,93,239,1)] rounded-[5px] border-[1.5px] cursor-pointer'><Image alt="artisan" src={img6} width={25} /></div>
                <div className='w-[30%] py-3 items-center justify-center flex border-[rgba(81,93,239,1)] rounded-[5px] border-[1.5px] cursor-pointer'><Image alt="artisan" src={img7} width={25} /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 py-12 flex items-center justify-center">
          <div className="relative" style={{ width: 'calc(280px + 20%)' }}>
            <div
              className={`relative h-auto w-full transition-all duration-500 ${
                isAnimating ? 'opacity-50 scale-[0.98]' : 'opacity-100 scale-100'
              }`}>
              <div className="absolute h-10 w-10 top-5 right-5 flex justify-center items-center">
                <Image alt="artisan" src={img4} width={40} height={40} />
              </div>
              <Image
                key={activeIndex}
                className="h-auto w-full"
                src={images[activeIndex]}
                alt="artisan"
                width={400}
                height={320}/>
            </div>
            <div className="absolute flex left-1/2 transform -translate-x-1/2 gap-x-2 top-[94%] justify-center items-center">
              {[0, 1, 2].map((index) => (
                <span
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`cursor-pointer h-[15px] flex items-center justify-center rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-[rgba(81,93,239,1)] text-white w-12'
                      : 'bg-[rgba(217,217,217,0.43)] text-black w-4'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )}

export default Login;