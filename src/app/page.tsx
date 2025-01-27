'use client';

import { useState } from 'react';
import Header from '../component/heroSection/header';
import HeroSection from '../component/heroSection/heroSection';
import Why from '../component/heroSection/why';
import Categories from '../component/heroSection/categories';
import How from '../component/heroSection/How';
import Free from '../component/heroSection/free';
import Footer from '../component/heroSection/footer';

export default function LandingPage() {
  const [data, setData] = useState(true); 

  return (
    <div className='font-sofiFont'>
      <Header setData={setData} /> 
      <HeroSection data={data} />
      <Why />
      <Categories data={data} />
      <How />
      <Free data={data} />
      <Footer />
    </div>
  );
}