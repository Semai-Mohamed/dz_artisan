'use client'
import React from 'react'
import Image, { StaticImageData } from 'next/image';
import { Rating } from '@mui/material';
interface CardProps {
    id: number;
    name: string;
    work: string;
    defaultValue: number;
    precision: number;
    readOnly?: boolean;
    img: StaticImageData;
    text:string;
  }
  const Card: React.FC<CardProps> = ({ id, name, work, defaultValue, precision, readOnly = false, img ,text}) => {
  return (
<div key={id} className='flex gap-y-2 py-6 flex-col items-center justify-center w-[250px] h-auto shadow-lg'>    
    <div className='w-[90%] flex gap-y-2 py-6 flex-col justify-center'>
    <div className=' flex gap-x-4 '>
            <div className=''><Image alt='' className='w-12 h-auto' src={img}></Image></div>
            <div className='flex flex-col items-start justify-center gap-y-2'>
                <div className='text-xl'>{name}</div>
                <div className='font-thin text-sm text-gray-700'>{work}</div>
            </div>
        </div>
        <div> <Rating name={`rating-${id}`} defaultValue={defaultValue} precision={precision} readOnly={readOnly} />        </div>
        <div className='flex justify-center items-center'>
            <div className=' text-xs text-gray-600'>
                {text}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Card