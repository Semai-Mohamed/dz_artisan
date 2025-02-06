import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import img6 from '../../public/images/direct-inbox.svg'
import img from '../../public/images/Icon Strategy.svg'
import searchIcon from '../../public/images/search-normal.svg' 
import { useProfileMutation } from '../../api/artisanApi'
import Link from 'next/link'
import { useUserStore } from '../../utils/authStore'

const headerData = {
  searchPlaceholder: "Search...",
  searchButtonText: "Search",
  user: {
    settingsIcon: img6
  }
};


const Header = () => { 
    const { user, setUser } = useUserStore();
  
  return (
    <div className='w-full py-4'>
      <div className='flex items-center mx-auto gap-x-4'>
        <div className='flex items-center justify-evenly w-[80%] gap-x-5'>
          <div className='relative w-[60%]'>
            <input 
              className='w-full bg-[rgba(217,217,217,0.23)] border-none outline-none 
              text-[rgba(79,79,79,0.78)] placeholder:text-[rgba(79,79,79,0.48)] 
              pl-5 pr-10 h-14 rounded-xl' 
              type="text" 
              placeholder={headerData.searchPlaceholder}
            />
            <Image 
              src={searchIcon} 
              alt="Search" 
              className='absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500'
            />
          </div>
          <button  className="bg-[rgba(32,32,32,1)] py-3 px-12 font-thin text-xs text-white rounded-lg">
            {headerData.searchButtonText}
          </button>       
        </div>
        
        <div className='flex space-x-4 items-center w-[20%]'>
          <Image 
            className='h-5 w-5' 
            alt='Settings' 
            src={headerData.user.settingsIcon}
          ></Image>
          
          <Link href={'/profile'} className='flex space-x-3 cursor-pointer'>
            <div className=''>
              <div className='text-sm '>{user?.lastname}</div>
              <div className='text-xs text-gray-500'>{user?.full_name}</div>
            </div>
            <Image 
  className='rounded-full h-10 w-10 object-cover' 
  alt='Profile' 
  src={user?.profile_picture || "/placeholder.svg?height=40&width=40"}
  width={40}
  height={40}
/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header