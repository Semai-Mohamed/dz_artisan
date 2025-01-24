'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import img2 from '../../public/images/trophy-dynamic-color.svg'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import postSignUpData, { SignUpResponse } from '../../api/auth'
import { useRouter } from 'next/navigation'
import { useUserStore } from '../../utils/authStore'
interface ChildComponentProps {
  skip: boolean;
  progress: number;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  urlArtisan: string;
  urlClient: string;
}
const ProgressAuth: React.FC<ChildComponentProps> = ({ 
  skip, 
  progress, 
  showModal, 
  setShowModal, 
  urlArtisan, 
  urlClient }) => {
  const router = useRouter();
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const { user } = useUserStore();
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: postSignUpData,
    onSuccess: (response: SignUpResponse) => {
      if (response.success) {
        setSignUpSuccess(true);
        toast.success('Sign-up successful!');
        if (typeof window !== 'undefined') {
          router.push('/landingPage');
        }
      } else {
        if (response.message.includes('already exists')) {
          toast.error('This email is already registered. Please try logging in.');
        } else {
          toast.error(response.message);
        }
        setShowModal(false);
      }},
    onError: () => {
      toast.error('Network error. Please try again.');
      setShowModal(false);
    },
  })
  const handleSkip = async () => {
    if (!user) {
      toast.error('User data not found');
      return;
    }
    try {
      const response = await mutateAsync(user); 
      if (response.success) {
        setSignUpSuccess(true);
        router.push('/logIn');
      }} 
    catch (error) {
      toast.error('Failed to complete signup');
    }
  };
  return (
    <div 
    className={`absolute w-full h-full flex justify-center items-center bg-[rgba(255,255,255,0.5)] transition-opacity duration-300 ease-in-out ${showModal ? 'opacity-100 flex' : 'opacity-0 hidden'}`}
  >
    <div className="w-[520px] h-[340px] flex justify-center items-center bg-white shadow-md rounded-2xl">
      <div className="w-4/5 h-4/5 flex justify-center flex-col">
        <div className="flex gap-0 mb-0 items-center">
          <div className="text-[#605F5F] text-[1.875rem] font-bold">
            Congrats
          </div>
          <div>
            <Image alt='' src={img2} />
          </div>
        </div>
        <div className="w-full flex justify-end text-sm text-[#00A79D]">
          Profile
        </div>
        <div className="text-sm text-[#00A79D] mb-2">
          {progress}%
        </div>
        <div className="bg-[rgba(226,226,226,0.22)] rounded-3xl h-8 w-full mb-4">
          <div 
            className="bg-[rgba(0,167,157,0.68)] rounded-3xl h-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-[#727272] font-thin text-xs mb-4">
          {progress == 100 ? <div>Congratulations, now you are one of us. All that remains is confirmation</div> : <div>we want to know more about you</div>}
        </div>
        <div className="bg-[#00A79D] text-white p-4 rounded-lg flex justify-center items-center mb-3 cursor-pointer">
          <div>
            {progress === 100 ? (
              signUpSuccess ? (
                <div>Redirecting to login...</div>
              ) : (
                <button onClick={handleSkip}>Complete Sign-up</button>
              )
            ) : (
              <Link href={user?.role === 'artisan' ? urlArtisan : urlClient}>
                Complete Setup your profile
              </Link>
            )}
          </div>
        </div>
        <div className={`text-[#00A79D] font-thin text-xs cursor-pointer w-full ${skip ? 'hidden' : 'flex'} justify-end`}>
          <Link 
            href={user?.role === "artisan" ? "/signUp/artisan" : "/logIn"} 
            onClick={handleSkip}
          >
            skip for now
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProgressAuth