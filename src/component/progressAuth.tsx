'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import img2 from '../../public/images/trophy-dynamic-color.svg'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import postSignUpData from '../../api/auth'
import { useRouter } from 'next/navigation'
import { useUserStore } from '../../utils/authStore'
interface ChildComponentProps {
    skip: boolean; 
    showModal : boolean
    progress : number
    setShowModal :React.Dispatch<React.SetStateAction<boolean>>
  }

const ProgressAuth : React.FC<ChildComponentProps> = ({ skip ,progress,showModal,setShowModal}) => {
    console.log(skip,progress,showModal)
    const router = useRouter()
      const { user } = useUserStore();
    const { mutateAsync, isLoading } = useMutation(postSignUpData, {
        onSuccess: (data) => {
          if (data.token) {
            localStorage.setItem('token', data.token)
            toast.success('Sign-up successful!')
            if (typeof window !== 'undefined' && router) {
              router.push('/landingPage');
            }
          } else {
            toast.error('No token received from server')
          }
        },
        onError: (error: any) => {
          toast.error(error.message || 'Failed to sign up')
          setShowModal(false);
        },
      });
      const handleSkip = async () => {
        try {
          if (!user) {
            toast.error('User data not found');
            return;
          }
          console.log(user)
          await mutateAsync(user);
        } catch (error) {
          console.error('Error during sign-up:', error);
          toast.error('Failed to complete signup');
        }
      };
  return (
    <div 
  className={`absolute ${showModal ? 'flex opacity-100' : 'hidden opacity-0'} transition-opacity duration-300 ease-in-out bg-[rgba(255,255,255,0.5)] w-full h-full justify-center items-center ${showModal ? 'opacity-100' : 'opacity-0'}`}
  style={{
    position: 'absolute',
    display: showModal ? 'flex' : 'none',
    opacity: showModal ? 1 : 0,
    transition: 'opacity 300ms ease-in-out',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }}
>
  <div 
    style={{
      width: '520px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '340px',
      backgroundColor: 'white',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Assuming shadow-custom-shadow is similar to this
      borderRadius: '16px'
    }}
  >
    <div 
      style={{
        width: '80%',
        height: '80%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <div 
        style={{
          display: 'flex',
          gap: '0',
          marginBottom: '0',
          alignItems: 'center'
        }}
      >
        <div 
          style={{
            color: 'rgba(96, 95, 95, 1)',
            fontSize: '1.875rem', // 3xl in Tailwind
            fontWeight: '700'
          }}
        >
          Congrats
        </div>
        <div>
          <Image alt='' src={img2} />
        </div>
      </div>
      <div 
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          fontSize: '0.875rem', // text-sm in Tailwind
          color: 'rgba(0, 167, 157, 1)'
        }}
      >
        Profile
      </div>
      <div 
        style={{
          fontSize: '0.875rem', // text-sm in Tailwind
          color: 'rgba(0, 167, 157, 1)',
          marginBottom: '0.5rem'
        }}
      >
        {progress}%
      </div>
      <div 
        style={{
          backgroundColor: 'rgba(226, 226, 226, 0.22)',
          borderRadius: '1.5rem', // rounded-3xl in Tailwind
          height: '32px',
          width: '100%',
          marginBottom: '1rem'
        }}
      >
        <div 
          style={{
            backgroundColor: 'rgba(0, 167, 157, 0.68)',
            borderRadius: '1.5rem',
            height: '100%',
            width: `${progress}%`
          }}
        ></div>
      </div>
      <div 
        style={{
          color: 'rgba(114, 114, 114, 1)',
          fontWeight: '100', // font-thin in Tailwind
          fontSize: '0.75rem', // text-xs in Tailwind
          marginBottom: '1rem'
        }}
      >
        Now you are one of us, we want to know more about you
      </div>
      <div 
        style={{
          backgroundColor: 'rgba(0, 167, 157, 1)',
          color: 'white',
          padding: '1rem',
          borderRadius: '0.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '0.75rem',
          cursor: 'pointer'
        }}
      >
        <Link href={'/setup'}>Setup your profile</Link>
      </div>
      <div 
        style={{
          color: 'rgba(0, 167, 157, 1)',
          fontWeight: '100', // font-thin in Tailwind
          fontSize: '0.75rem', // text-xs in Tailwind
          cursor: 'pointer',
          width: '100%',
          display: skip ? 'none' : 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Link 
          href={user?.role === "artisan" ? "/signUp/artisan" : "/landingpage"} 
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