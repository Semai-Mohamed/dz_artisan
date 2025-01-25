import React from 'react'
import google_icon from "@/../public/images/flat-color-icons_google.svg";
import Image from 'next/image';
const SocialAuth = () => {
  return (
    <button className='w-full hover:scale-50 hover:opacity-90  py-3 items-center justify-center flex border-[rgba(81,93,239,1)] rounded-[5px] border-[1.5px] cursor-pointer'>
        <Image alt="artisan" src={google_icon} width={25} />
    </button>
  )
}

export default SocialAuth