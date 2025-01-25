'use client'
import React from 'react'
import Image from 'next/image';
import { Rating } from '@mui/material';
interface CardProps {
    id: number;
    name: string;
    work: string;
    defaultValue: number;
    precision: number;
    readOnly?: boolean
  }
  const Card: React.FC<CardProps> = ({ id, name, work, defaultValue, precision, readOnly = false }) => {
  return (
    <div  key={id} className='flex gap-y-6 flex-col justify-center items-center w-[230px] h-[320px]'>
        <div className='w-[95] flex gap-x-4'>
            <div className=' overflow-hidden rounded-full relative w-12 h-12'><Image alt='' src={''}></Image></div>
            <div className='flex flex-col items-start justify-center gap-y-4'>
                <div className='text-xl'>{name}</div>
                <div className='font-thin text-sm text-gray-700'>{work}</div>
            </div>
        </div>
        <div> <Rating name={`rating-${id}`} defaultValue={defaultValue} precision={precision} readOnly={readOnly} />        </div>
        <div className='flex justify-center items-center'>
            <div className='w-[95%]'></div>
        </div>
    </div>
  )
}

export default Card