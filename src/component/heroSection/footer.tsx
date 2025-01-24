'use client'
import img from '../../../public/images/Subtract.svg'
const Footer = () => {
  return (
    <div className='bg-whiteSofi flex justify-center items-center w-full'>
        <div className='w-3/4 flex  py-16 justify-center '>
        <div className='flex  gap-y-4 justify-center  w-1/3  flex-col'>
<div className='w-2/5'><img src={img} alt="" /></div>
<div className='bg-linearSofib bg-clip-text text-transparent text-2xl font-bold  '>Dz artisan</div>
<div className='font-light text-xs'>Copyright c 2024</div>

        </div>
       <div className='flex w-2/3 gap-x-16 '>
       <div className='flex-1 flex flex-col  gap-y-7'>
           
           <div className='text-xs font-semibold  cursor-pointer'>َArtisan</div>
           <div className='flex flex-col text-xs font-light  gap-y-5'>
       <div className='cursor-pointer'>How to start working</div>
       <div className='cursor-pointer'>View categories</div>
       <div className='cursor-pointer'>Get your skills certified</div>
       <div className='cursor-pointer'>Find freelance jobs</div>
       <div className='cursor-pointer'>Add a service</div>
           </div>
       
   </div>


   <div className='flex-1 flex flex-col  gap-y-7'>
      
           <div className='text-xs font-semibold cursor-pointer '>Client</div>
           <div className='flex flex-col text-xs font-light r gap-y-5'>
       <div className='cursor-pointer'>Hot to hire</div>
       <div className='cursor-pointer'>View categories</div>
       <div className='cursor-pointer'>Find freelance services</div>
       <div className='cursor-pointer'>Post a need</div>
       <div className='cursor-pointer'></div>
           </div>
       
   </div>
   
   <div className='flex-1 flex flex-col  gap-y-7'>
      
      <div className='text-xs font-semibold cursor-pointer '>Help</div>
      <div className='flex flex-col text-xs font-light  gap-y-5'>
  <div className='cursor-pointer'>About us</div>
  <div className='cursor-pointer'>How it works</div>
  <div className='cursor-pointer'>Help & support</div>
      </div>
  
</div>
       </div>
        </div>

    </div>
  )
}

export default Footer