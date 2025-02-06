'use client'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative, Autoplay } from 'swiper/modules';
import Link from 'next/link';
type CategoriesProps = {
  data: boolean
}
const Categories: React.FC<CategoriesProps> = ({ data }) => {
  const [click, set_click] = useState(false)
  
  const clickHandler = (b: boolean) => {
    set_click(b)
  }
  const slides = [
    {
      worker: '/images/landingPage/Property 1=Default.png',
      client: '/images/landingPage/Property 1.png'
    },
    {
      worker: '/images/landingPage/Property 1=Variant2.png',
      client: '/images/landingPage/Property 2.png'
    },
    {
      worker: '/images/landingPage/PropertyVariant3.png',
      client: '/images/landingPage/Property 3.png'
    }
  ];

  return (
    <div className='relative'>
      <Swiper
        spaceBetween={0}
        effect={'creative'}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={900}
        allowTouchMove={false}
        keyboard={{ enabled: false }}
        modules={[EffectCreative, Autoplay]}
        className="mySwiper rounded-3xl"
        creativeEffect={{
          prev: {
            translate: ['-15%', 0, 0],
            opacity: 0.3,
          },
          next: {
            translate: ['15%', 0, 0],
            opacity: 0.3,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-[710px] w-full rounded-3xl">
            <div className="relative w-full h-full">
              <img
                src={data ? slide.worker : slide.client}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-linearHerosecation rounded-raduisHeroSection"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='absolute top-52 left-40 z-40'>
        <div className='text-4xl text-white font-bold tracking-wide leading-relaxed'>
          Ride Dz_artisan
        </div>
        <div className='text-4xl text-white font-bold tracking-wide'>
          and Catch the perfect
        </div>
        <div className='text-4xl bg-clip-text text-transparent bg-linerSofib2 font-bold tracking-wide leading-relaxed'>
          Wave of Opportunities
        </div>
        <div>
          <div className='text-white my-2 font-thin text-base leading-6' style={{fontFamily: "sofiFont2"}}>
            Unlock opportunities to earn reliable income, all while working from home.
          </div>
          
          {data ? (
            <div className='flex gap-x-6 items-center my-12'>
              <Link 
                href={'/logIn'} 
                className='text-white font-semibold bg-greenSofic py-3 px-4 rounded-xl cursor-pointer transition-transform duration-300 delay-100 hover:-translate-y-1'
              >
                Find work opportunities
              </Link>
              <div 
                className='text-white font-semibold flex items-center justify-between cursor-pointer'
                onMouseLeave={() => clickHandler(false)} 
                onMouseEnter={() => clickHandler(true)}
              >
                <Link className='pr-3' href={'/signup/setup'}>
                  I want to hire
                </Link>
                <div>
                  <FontAwesomeIcon icon={faArrowRight} beatFade={click} size="lg" />
                </div>
              </div>
            </div>
          ) : (
            <div className='flex gap-x-6 items-center my-12'>
              <Link 
                href={'/logIn'} 
                className='text-white font-semibold bg-blueSofic py-3 px-4 rounded-xl cursor-pointer transition-transform duration-300 delay-100 hover:-translate-y-1'
              >
                Find freelance services
              </Link>
              <div 
                className='text-white font-semibold flex items-center justify-between cursor-pointer'
                onMouseLeave={() => clickHandler(false)} 
                onMouseEnter={() => clickHandler(true)}
              >
                <Link href={'/signup/setup'} className='pr-3'>
                  I want to work
                </Link>
                <div>
                  <FontAwesomeIcon icon={faArrowRight} beatFade={click} size="lg" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;