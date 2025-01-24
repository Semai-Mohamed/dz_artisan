'use client'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const How: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [green , setgreen] = useState(false)
  const [blue , setblue] = useState(false)
  const Blue = (e :boolean) =>{
    setblue(e)
  }
  const Green = (e :boolean) =>{
    setgreen(e)
  }
  useGSAP(()=>{
    const elementsToAnimate = gsap.utils.toArray('.animate1')
    gsap.fromTo(
      elementsToAnimate,
      {opacity : 0,x:0},
    {
      opacity:1 ,x:0, duration : 0.3 ,
      ease : 'power1.out', stagger:0.8,
      scrollTrigger:{
        trigger: elementsToAnimate[0] as Element,  
        toggleActions : 'play none none none',
        scrub : false
      }
    }
    )
  })

  return (
    <div className='w-full flex justify-center items-center pb-40'>
    <div className='w-4/5 flex flex-col justify-center items-center'>
    <div className='animate1 flex justify-center items-center bg-clip-text text-transparent bg-linerSofib2   text-3xl font-bold mb-20'>How it works?</div>
    <div className='flex gap-x-7 mb-14 h-64 w-full'>
<div className='animate1 flex flex-1 relative  flex-col justify-evenly  bg-greenSofic2 rounded-raduisCategories'>
<div className='w-10/12 flex justify-center items-center gap-y-4 flex-col relative'>
<div className='text-greenSofic font-extrabold text-2xl tracking-wide w-4/5 leading-9 '>Share an offer</div>
<div className='text-black text-xs font-light tracking-wide flex justify-center items-center w-4/5   '>Share an offer of a service in our services marketplace, and wait for a client to hire you</div>
</div>
<div className='flex justify-center items-center'>
<div className=' cursor-pointer px-4 py-2 flex gap-x-1 justify-center rounded-xl  items-center border-2 border-greenSofic text-greenSofic text-xs font-semibold hover:text-white hover:bg-greenSofic hover:px-5 transform transition-all duration-300 delay-75' onMouseEnter={()=>Green(true)} onMouseLeave={()=>Green(false)}>
<div className={`${green ? '-translate-x-2' : ''} relative transition-transform duration-300 delay-75`}>Share an offer</div>
<FontAwesomeIcon icon={faArrowRight} size='lg' className={` transition-transform transform ${green ? 'scale-x-150' : ''}`}></FontAwesomeIcon>
</div>
</div>
<div className=' absolute font-black text-greenSofic2 right-2 -z-10' style={{fontSize:'220px'}}>1</div>
</div>



<div className=' animate1 flex flex-1 relative  flex-col justify-evenly  bg-greenSofic2 rounded-raduisCategories'>
<div className='w-10/12 flex justify-center items-center gap-y-4 flex-col relative'>
<div className='text-greenSofic font-extrabold text-2xl tracking-wide w-4/5 leading-9 '>Make a deal</div>
<div className='text-black text-xs font-light tracking-wide flex justify-center items-center w-4/5   '>The client tells you about what you wil do, so you use your skills and make his needs into reality, then you upload your work, so the client take it, once he approves it, you are good to go.</div>
</div>
<div className='flex justify-center items-center'>
<div className=' px-4 py-2 flex gap-x-2  rounded-xl justify-center items-center  text-greenSofic text-xs font-semibold'>
<div></div>
</div>
</div>
<div className=' absolute font-black text-greenSofic2 right-2 -z-10' style={{fontSize:'220px'}}>2</div>
</div>




<div className='animate1 flex flex-1 relative  flex-col justify-evenly  bg-greenSofic2 rounded-raduisCategories'>
<div className='w-10/12 flex justify-center items-center gap-y-4 flex-col relative'>
<div className='text-greenSofic font-extrabold text-2xl tracking-wide w-4/5 leading-9 '>Get paid</div>
<div className='text-black text-xs font-light tracking-wide flex justify-center items-center w-4/5   '>Once the client approved your delivery, you will get paid, which means the money will be sent and added to your balance in Dz artisan, so you can withdraw it with the method you want, by the payment method you desire.</div>
</div>
<div className='flex justify-center items-center'>
<div className=' px-4 py-2 flex gap-x-2  rounded-xl justify-center items-center  text-greenSofic text-xs font-semibold'>
<div></div>
</div>
</div>
<div className=' absolute font-black text-greenSofic2 right-2 -z-10' style={{fontSize:'220px'}}>3</div>
</div>


    </div>

    <div className='animate1 w-full text-sm font-light mb-6'>You don’t want to get through this process? Well, we made you another choice :</div>




    <div className='flex gap-x-7 mb-14 h-64 w-full'>
<div className='animate1 flex flex-1 relative  flex-col justify-evenly  bg-blueSofic2 rounded-raduisCategories'>
<div className='w-10/12 flex justify-center items-center gap-y-4 flex-col relative'>
<div className='text-blueSofic font-extrabold text-2xl tracking-wide w-4/5 leading-9 '>Choose a need</div>
<div className='text-black text-xs font-light tracking-wide flex justify-center items-center w-4/5   '>Consult client needs and choose one you are capable of doing within the client terms, then apply for it.</div>
</div>
<div className='flex justify-center items-center'>
<div className=' cursor-pointer px-4 py-2 flex gap-x-1 justify-center rounded-xl  items-center border-2 border-blueSofic text-blueSofic text-xs font-semibold hover:text-white hover:bg-blueSofic hover:px-5 transform transition-all duration-300 delay-75' onMouseEnter={()=>Blue(true)} onMouseLeave={()=>Blue(false)}>

<div className={`${blue ? '-translate-x-2' : ''} relative transition-transform duration-300 delay-75`}>Consult needs</div>
<FontAwesomeIcon icon={faArrowRight} size='lg' className={` transition-transform transform ${blue ? 'scale-x-150' : ''}`}></FontAwesomeIcon>

</div>
</div>
<div className=' absolute font-black text-blueSofic2 right-2 -z-10' style={{fontSize:'220px'}}>1</div>
</div>



<div className='animate1 flex flex-1 relative  flex-col justify-evenly  bg-blueSofic2 rounded-raduisCategories'>
<div className='w-10/12 flex justify-center items-center gap-y-4 flex-col relative'>
<div className='text-blueSofic font-extrabold text-2xl tracking-wide w-4/5 leading-9 '>Make a deal</div>
<div className='text-black text-xs font-light tracking-wide flex justify-center items-center w-4/5   '>Once you get chosen by the client, you start working on his project, when you finalize it, you upload it so the client can take it, when the client approves it, you are good to go.</div>
</div>
<div className='flex justify-center items-center'>
<div className=' px-4 py-2 flex gap-x-2  rounded-xl justify-center items-center  text-blueSofic text-xs font-semibold'>
<div></div>
</div>
</div>
<div className=' absolute font-black text-blueSofic2 right-2 -z-10' style={{fontSize:'220px'}}>2</div>
</div>



<div className='animate1 flex flex-1 relative  flex-col justify-evenly  bg-blueSofic2 rounded-raduisCategories'>
<div className='w-10/12 flex justify-center items-center gap-y-4 flex-col relative'>
<div className='text-blueSofic font-extrabold text-2xl tracking-wide w-4/5 leading-9 '>Get paid</div>
<div className='text-black text-xs font-light tracking-wide flex justify-center items-center w-4/5   '>Once the client approved your delivery, you will get paid, which means the money will be sent and added to your balance in WorkWave, so you can withdraw it with the method you want, by the payment method you desire.</div>
</div>
<div className='flex justify-center items-center'>
<div className=' px-4 py-2 flex gap-x-2  rounded-xl justify-center items-center  text-blueSofic text-xs font-semibold'>
<div></div>
</div>
</div>
<div className=' absolute font-black text-blueSofic2 right-2 -z-10' style={{fontSize:'220px'}}>3</div>
</div>
    </div>
    </div>
    </div>
  );
};

export default How;
