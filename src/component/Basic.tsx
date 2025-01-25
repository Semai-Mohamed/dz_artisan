'use client'
import React from 'react'
import img from '../../public/images/Vector (3).svg'
import img2 from '../../public/images/Frame (1).svg'
import img3 from '../../public/images/Frame (2).svg'
import img4 from '../../public/images/Frame.svg'
import imgprofile from '../../public/images/Icon Strategy.svg'
import Image from 'next/image'

interface ChoseCardProps {
  showForm: boolean;
  onContinueClick: (data: {
    whatHeWillDo: string;
    imgProfile: string;
    username: string;
    profession: string;
  }) => void; // دالة لتمرير البيانات إلى المكون الأب
}

const ChoseCard: React.FC<ChoseCardProps> = ({ showForm, onContinueClick }) => {
  const basicPackageInfo = {
    what_he_will_do: 'I can draw the table you want',
    imgProfile: imgprofile,
    username: 'Mohmamed Semai',
    profession: 'Software Developer',
    price: '20000DA',
    description: 'Basic Package Only Laptop-scenes Includes, Background Music, Logo, and 720HD Video',
    features: [
      { icon: img3, text: '4 Days Delivery' },
      { icon: img2, text: '1 Revision' },
      { icon: img4, text: '8 Captions' },
      { icon: img, text: '5 Screenshots' },
      { icon: img4, text: 'Add logo' },
      { icon: img4, text: 'Dynamic transitions' },
      { icon: img, text: '30 Seconds' },
    ],
  }

  // دالة للتعامل مع النقر على "Continue"
  const handleContinueClick = () => {
    // تمرير البيانات إلى المكون الأب
    onContinueClick({
      whatHeWillDo: basicPackageInfo.what_he_will_do,
      imgProfile: basicPackageInfo.imgProfile,
      username: basicPackageInfo.username,
      profession: basicPackageInfo.profession,
    });
  }

  return (
    <div className='w-[400px] flex flex-col items-center justify-center'>
      <div className='w-[95%]'>
        <div className='text-2xl mb-2 font-semibold text-gray-600'>{basicPackageInfo.what_he_will_do}</div>
        <div className='flex gap-x-1'>
          <Image className='w-8 h-auto' alt='' src={basicPackageInfo.imgProfile}></Image>
          <div className='flex flex-col gap-y-1'>
            <div className=''>{basicPackageInfo.username}</div>
            <div className='text-xs font-thin text-[rgba(32,32,32,1)]'>{basicPackageInfo.profession}</div>
          </div>
        </div>
      </div>
      <div className='w-[400px] flex items-center justify-center flex-col m-3 border-[1px] p-3'>
        <div className='w-full'>
          <button className='text-[rgba(0,167,157,1)] py-2 flex ml-3 font-bold text-lg'>Basic</button>
          <div className="border-t-4 border-gray-300 mb-4"></div>
        </div>
        <div className='w-[95%]'>
          <div className='flex mb-5 items-center justify-between'>
            <div className='text-xl font-semibold text-[rgba(64,65,69,1)]'>Basic Promo</div>
            <div className='text-xl text-[rgba(64,65,69,1)] font-semibold'>{basicPackageInfo.price}</div>
          </div>
          <div className='text-thin mb-5 w-[100%] text-sm text-gray-600'>{basicPackageInfo.description}</div>
          <div className='flex flex-col gap-y-2 mb-5'>
            {basicPackageInfo.features.map((item, index) => (
              <div key={index} className='flex gap-x-2 text-sm text-[rgba(64,65,69,0.7)]'>
                <Image alt='' src={item.icon}></Image>
                <div>{item.text}</div>
              </div>
            ))}
          </div>
          <button
            onClick={handleContinueClick}
            className='w-full flex justify-center items-center py-3 bg-[rgba(0,167,157,1)] text-white font-semibold rounded-md'
          >
            Continue
          </button>
          <button className='w-full flex justify-center items-center py-3 text-[rgba(0,167,157,1)] font-semibold'>
            Compare Packages
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChoseCard