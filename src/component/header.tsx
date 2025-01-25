import React from 'react'
import Image from 'next/image'
import img6 from '../../public/images/setting-2.svg'
import img from '../../public/images/Icon Strategy.svg'

const headerData = {
  searchPlaceholder: "Search...",
  searchButtonText: "Search",
  user: {
    username: "@spoki",
    fullName: "iyed hamoudi",
    profileImage: img,
    settingsIcon: img6
  }
};

const Header = () => {
  return (
    <div className='w-full py-4  '>
      <div className='flex items-center   mx-auto gap-x-4'>
        <div className='flex items-center justify-around  w-[70%] gap-x-5 '>
          <input 
            className='w-[100%] bg-[rgba(217,217,217,0.23)] border-none outline-none 
            text-[rgba(79,79,79,0.78)] placeholder:text-[rgba(79,79,79,0.48)] 
            pl-5 h-14 rounded-xl' 
            type="text" 
            placeholder={headerData.searchPlaceholder}
          />
          <button className="bg-[rgba(32,32,32,1)] py-3 px-12 font-thin text-xs text-white rounded-lg">
            {headerData.searchButtonText}
          </button>       
        </div>
        
        <div className='flex  space-x-4 justify-around items-center w-[30%]'>
          <Image 
            className='h-5 w-5' 
            alt='Settings' 
            src={headerData.user.settingsIcon}
          ></Image>
          
          <div className='flex  space-x-3'>
            <div className=''>
              <div className='text-sm '>{headerData.user.username}</div>
              <div className='text-xs text-gray-500'>{headerData.user.fullName}</div>
            </div>
            <Image 
              className='rounded-full h-10 w-10 object-cover' 
              alt='Profile' 
              src={headerData.user.profileImage}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header