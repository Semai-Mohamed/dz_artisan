'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import img from '../../public/images/logout.svg'
import img2 from '../../public/images/Subtract.svg'
import img3 from '../../public/images/people.svg'
import img4 from '../../public/images/Heart.svg'
import img5 from '../../public/images/direct-inbox.svg'
import img6 from '../../public/images/setting-2.svg'
import img7 from '../../public/images/home.svg'

const menuItems = [
  {
    section: 'OVERVIEW',
    items: [
      { icon: img7, text: 'Home' },
      { icon: img6, text: 'Inbox' },
      { icon: img5, text: 'Liked' },
      { icon: img4, text: 'Group' }
    ]
  },
  {
    section: 'SETTINGS',
    items: [
      { icon: img3, text: 'Settings' },
      { icon: img, text: 'Logout' }
    ]
  }
];

const Layout = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (text) => {
    setActiveItem(text === activeItem ? null : text);
  };

  return (
    <div className=' top-0 left-0 h-[730px] w-[250px] bg-white shadow-lg mr-4'>
      <div className='w-[80%] mx-auto flex justify-center flex-col gap-y-6 py-6'>
        <div className='flex gap-x-2 justify-center items-center'>
          <Image alt='' className='h-14 w-14' src={img2}></Image>
          <div className='text-[rgba(0,167,157,1)] flex flex-col text-xl font-bold'>
            <div>DZ</div>
            <div>ARTISAN</div>
          </div>
        </div>
        
        {menuItems.map((section, sectionIndex) => (
          <React.Fragment key={sectionIndex}>
            <div className='text-xl font-semibold text-gray-700 mt-10'>{section.section}</div>
            {section.items.map((item, itemIndex) => (
              <div 
                key={itemIndex} 
                onClick={() => handleItemClick(item.text)}
                className={`flex gap-x-3 w-[80%] py-2 rounded-xl items-center cursor-pointer 
                  transition-all duration-300 ease-in-out
                  ${activeItem === item.text 
                    ? 'bg-[rgba(0,167,157,0.1)] scale-105 pl-2 rounded-md' 
                    : 'hover:bg-[rgba(0,167,157,0.05)] hover:pl-1'}`}
              >
                <div><Image alt='' src={item.icon}></Image></div>
                <div>{item.text}</div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Layout