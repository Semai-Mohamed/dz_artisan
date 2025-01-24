
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/images/Subtract.svg';

interface HeaderProps {
  setData: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setData }) => {
  const  [selected_dev , set_selected_div] = useState('div_1')
  
  const clickHandler1 = () => {
    set_selected_div('div_1');
    setData(true);
  };

  const clickHandler2 = () => {
    set_selected_div('div_2');
    setData(false);
  };

  useEffect(() => {
    // Additional logic if needed
  }, []);

  return (
    <div className='flex items-center justify-center w-full bg-white rounded-raduisSofi fixed z-50  bg-whiteSofi'>
    <div className=" w-full leading-5  flex h-16 justify-between items-center">
    <div className='flex text-2xl justify-center font-bold items-center flex-1'>
    <div className='flex justify-evenly items-center w-1/2 h-8 relative'>
       <div className='flex h-full '><Image src={logo} alt="Logo" /></div>
       <div className=' bg-linearSofib bg-clip-text text-transparent'>
 Dz artisan
       </div>
     </div>
    </div>


     <div className='w-full text-sm flex-1  font-bold flex justify-center items-center h-full'>
       <div className='flex justify-evenly items-center w-4/5  h-full text-sm tracking-wide '>
       <div className={` h-full border-4  border-transparent rounded-t-lg !border-b-greenSofic flex justify-center items-center cursor-pointer  ${selected_dev == 'div_1'? 'font-bold text-greenSofic border-transparent rounded-t-lg !border-b-greenSofic':'font-normal text-black !border-b-transparent'}`} onClick={()=>{clickHandler1()}}>I want to work</div>
       <div className={` h-full border-4 border-transparent cursor-pointer flex justify-center items-center ${selected_dev == 'div_2'? 'font-bold text-blueSofic border-4 border-transparent rounded-t-lg !border-b-blueSofic':'!border-b-transparent text-black font-normal'}`}  onClick={()=>{clickHandler2()}}>I want to hire</div>
       </div>
     </div>
     <div className='flex justify-center items-center flex-1'>
       <div className='flex justify-evenly items-center text-sm  w-3/5 '>
       <Link href={'/logIn'} className={`py-2 px-4 border-2 rounded-xl   !bg-transparent cursor-pointer relative hover:-translate-y-1 hover:shadow-shadowSofi   transition-transform delay-100 ease-in-out duration-500  ${selected_dev == 'div_1'? 'border-greenBorderSofi2 text-greenSofic':'border-blueSofic text-blueSofic'} `}>Log in</Link>
       <Link href={'/signUp'} className={`py-2 px-4 border-2 rounded-xl  text-white font-medium cursor-pointer relative hover:-translate-y-1 hover:shadow-shadowSofi  transition-transform delay-100 duration-500 ease-in-out ${selected_dev == 'div_1' ? 'bg-greenSofiB border-greenBorderSofi bg-greenSofic':'bg-blueSofic border-blueSofic'}`}>Sign up</Link>
       </div>
     </div>
   </div>
  </div>
  );
};

export default Header;
