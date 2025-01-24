'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from '../../../public/images/landingPage/Earnings (4).png'
import img2 from '../../../public/images/landingPage/Earnings (3).png'
import img3 from '../../../public/images/landingPage/Pay done (1).png'
import img4 from '../../../public/images/landingPage/Payment (1).png'
import img5 from '../../../public/images/landingPage/Messaging (2).png'

const Why: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    const elementsToAnimate = gsap.utils.toArray<HTMLElement>(".animate");
    const elementsToAnimateRight = gsap.utils.toArray<HTMLElement>(".animate-right");
    const elementsToAnimateOpacity = gsap.utils.toArray<HTMLElement>(".animate-opacity");

    gsap.fromTo(
      elementsToAnimate,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power1.out",
        stagger: 1,
        scrollTrigger: {
          trigger: elementsToAnimate[0],
          start: "top 80%",
          toggleActions: "play none none none",
          scrub: false,
        },
      }
    );

    gsap.fromTo(
      elementsToAnimateRight,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power1.out",
        stagger: 1,
        scrollTrigger: {
          trigger: elementsToAnimateRight[0],
          start: "top 80%",
          toggleActions: "play none none none",
          scrub: false,
        },
      }
    );

    gsap.fromTo(
      elementsToAnimateOpacity,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.3,
        ease: "power1.out",
        stagger: 1,
        scrollTrigger: {
          trigger: elementsToAnimateOpacity[0],
          start: "top 80%",
          toggleActions: "play none none none",
          scrub: false,
        },
      }
    );
  }
  }, []);

  return (
    <div className='my-40 w-full justify-center flex-col flex items-center'>
    <div className='animate-opacity w-full flex justify-center font-bold bg-linerSofib2 bg-clip-text text-transparent mb-20 text-3xl tracking-wide'>
      Why Dz artisan
    </div>
    <div className='flex w-3/4 gap-y-10 flex-col'>
      <div className='gap-x-5 flex justify-center items-center'>
        <div className='h-36 w-1/2 flex justify-center flex-col items-center gap-y-3 rounded-3xl bg-greenCart animate'> 
          <div className='flex flex-col justify-center w-3/4 gap-y-3' >
            <div className='text-greenSofic text-2xl font-bold'>Security</div>
            <div className='tracking-wide leading-relaxed text-xs font-light'>
              Reliable and secure payment system ensures timely transactions between freelancers and clients.
            </div>
          </div>
        </div>
        <div><Image src={img4} className='animate-right' alt="Payment" /></div>
      </div>
      <div className='gap-x-5 flex justify-center items-center'>
        <div className='animate'><Image src={img2} alt="Earnings" /></div> 
        <div><Image src={img3} className='animate-opacity' alt="Pay done" /></div>
        <div className='h-36 w-1/2 flex justify-center flex-col items-center bg-blueCart rounded-3xl animate-right'> 
          <div className='flex flex-col justify-normal w-3/4 gap-y-3'>
            <div className='text-blueSofic text-2xl font-bold'>Freedom</div>
            <div className='tracking-wide leading-relaxed text-xs font-light'>
              Withdraw earnings at any time with multiple payment methods. We give you full control of your earnings.
            </div>
          </div>
        </div>
      </div>
      <div className='gap-x-5 flex justify-center items-center'>
        <div className='h-52 w-1/2 flex justify-center flex-col items-center rounded-3xl gap-y-3 bg-violetCart animate'> 
          <div className='flex flex-col justify-center w-3/4 gap-y-3'>
            <div className='text-violetCart text-2xl font-bold'>Toolbox</div>
            <div className='tracking-wide leading-relaxed text-xs font-light'>
              Variety of easy-to-use tools, such as our IMS Integrated Messaging System, which makes communication easier, and a financial tracker to check your balance and track your account movements.
            </div>
          </div>
        </div>
        <div><Image src={img1} className='animate-opacity' alt="Earnings" /></div>
        <div><Image src={img5} className='animate-right' alt="Messaging" /></div>
      </div>
    </div>
  </div>
  );
};

export default Why;
