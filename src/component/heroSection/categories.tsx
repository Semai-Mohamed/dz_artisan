import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Image from 'next/image';

import img5 from '../../../public/images/landingPage/Mask group (18).svg';
import img2 from '../../../public/images/landingPage/Mask group (14).svg';
import img4 from '../../../public/images/landingPage/Mask group (16).svg';
import img3 from '../../../public/images/landingPage/Mask group (15).svg';
import img1 from '../../../public/images/landingPage/Mask group (13).svg';
import img6 from '../../../public/images/landingPage/Mask group (6).svg';
import img8 from '../../../public/images/landingPage/Mask group (7).svg';
import img7 from '../../../public/images/landingPage/Mask group (8).svg';
import img9 from '../../../public/images/landingPage/Mask group (10).svg';
import img10 from '../../../public/images/landingPage/Mask group (9).svg';

interface CategoriesProps {
  data: boolean;
  className?: string
}

const Categories: React.FC<CategoriesProps> = ({ data,className }) => {
  const [mouse, setMouse] = useState(false);
  const [photo, setPhoto] = useState(false);
  const [photo1, setPhoto1] = useState(false);
  const [photo2, setPhoto2] = useState(false);
  const [photo3, setPhoto3] = useState(false);
  const [photo4, setPhoto4] = useState(false);
  const [click, setClick] = useState(false);
  const Onmouse = (e:boolean)=>{
    setMouse(e)
}
const Changephoto = (e:boolean)=>{
       setPhoto(e)
}
const Changephoto1 = (e:boolean)=>{
    setPhoto1(e)
}
const Changephoto2 = (e:boolean)=>{
setPhoto2(e)
}
const Changephoto3 = (e:boolean)=>{
setPhoto3(e)
}
const Changephoto4 = (e:boolean)=>{
setPhoto4(e)
}
const Click = (e:boolean)=>{
setClick(e)
}
  return (
    <div className=' w-full flex justify-center items-center  pb-40 '>
    <div className={`w-4/5 flex  gap-x-2  rounded-raduisCategories ${data ? 'bg-linearSofig' : 'bg-linearSofibb'} `} style={{height:'530px'}} >
    <div className='w-2/5  flex justify-end  h-4/5 '>
        <div className=' flex flex-col gap-y-6 h-full justify-center    w-4/5' >
            <div className='text-white text-3xl tracking-wide font-bold flex items-end w-full leading-relaxed'>Many categories just to set you up!</div>
            <div className='text-white text-base  mb-6 w-5/6' style={{fontFamily:'sofiFont2'}}>We offer all the categories and fields that are available on the freelance market, you can start working in the field that you are skilled in, in just few click.</div>
            <div className={` py-2 px-4 text-white font-semibold border-white border-2 rounded-xl flex justify-around gap-x-1 items-center w-36  cursor-pointer  hover:${data ?'text-greenSofic' : 'text-blueSofic'} hover:bg-white transition-all duration-300 delay-75 ease-in-out `} onMouseEnter={()=>Onmouse(true)} onMouseLeave={()=>Onmouse(false)}><div >Join us</div> <div><FontAwesomeIcon icon={faArrowRight} className={`${mouse ? 'scale-x-150 transform':''}`} beatFade={mouse} size="lg"></FontAwesomeIcon></div></div>
        </div>
    </div>
    <div className='h-full flex flex-col w-3/5  gap-y-6  justify-center'>
        <div className='flex  justify-between items-center  gap-x-5 w-10/12'>
            <div onMouseEnter={()=>Changephoto(true) } onMouseLeave={()=>Changephoto(false)} className={` relative flex gap-y-3 rounded-3xl h-44 flex-1 justify-center items-center bg-categoriesB flex-col text-white text-xs font-semibold hover:shadow-shadowCategorie hover:bg-categoriesWhite  transition-all duration-300 delay-75 ease-in-out  hover:-translate-y-2  hover:${photo ? (data ? 'text-greenSofic' : 'text-blueSofic') : 'text-white'}`}><div className=' relative w-full h-3/4'><Image className={`w-widthCategorie transition-all top-2/3 left-1/2 -translate-x-1/2  -translate-y-1/2 absolute duration-300 delay-75  ${photo ? ' opacity-100' : 'opacity-0'} `} src={img1 } alt="" /><Image className={`w-5/12 transition-all top-2/3 left-1/2 -translate-x-1/2  -translate-y-1/2 absolute duration-400 delay-75  ${photo ? ' opacity-0' : 'opacity-100'} `} src={img6} alt="" /></div><div className='h-1/3'>Designe & creativity</div></div>
            <div onMouseEnter={()=>Changephoto1(true) } onMouseLeave={()=>Changephoto1(false)} className={` relative flex gap-y-3 rounded-3xl h-44 flex-1 justify-center items-center bg-categoriesB flex-col text-white text-xs font-semibold hover:shadow-shadowCategorie hover:bg-categoriesWhite transition-all duration-300 delay-75 ease-in-out  hover:-translate-y-2 hover:${photo1 ? (data ? 'text-greenSofic' : 'text-blueSofic') : 'text-white'}`}><div className=' relative w-full h-3/4'><Image className={`w-widthCategorie transition-all top-2/3 left-1/2 -translate-x-1/2  -translate-y-1/2 absolute duration-300 delay-75 ${photo1 ? ' opacity-100' : 'opacity-0'} `} src={img3 } alt="" /><Image className={`w-5/12 transition-all top-2/3 left-1/2 -translate-x-1/2  -translate-y-1/2 absolute duration-400 delay-75 ${photo1 ? ' opacity-0' : 'opacity-100'} `} src={img7} alt="" /></div><div className='h-1/3'>Multimedia</div></div>
            <div onMouseEnter={()=>Changephoto2(true) } onMouseLeave={()=>Changephoto2(false)} className={` relative flex gap-y-3 rounded-3xl h-44 flex-1 justify-center items-center bg-categoriesB flex-col text-white text-xs font-semibold hover:shadow-shadowCategorie hover:bg-categoriesWhite transition-all duration-300 delay-75 ease-in-out  hover:-translate-y-2 hover:${photo2 ? (data ? 'text-greenSofic' : 'text-blueSofic') : 'text-white'}`}><div className=' relative w-full h-3/4'><Image className={`w-widthCategorie transition-all top-2/3 left-1/2 -translate-x-1/2  -translate-y-1/2 absolute duration-300 delay-75 ${photo2 ? ' opacity-100' : 'opacity-0'} `} src={img2 } alt="" /><Image className={`w-5/12 transition-all top-2/3 left-1/2 -translate-x-1/2  -translate-y-1/2 absolute duration-400 delay-75 ${photo2 ? ' opacity-0' : 'opacity-100'} `} src={img8} alt="" /></div><div className='h-1/3'>Digital Marketing</div></div>
        </div>
        <div className='flex  justify-between items-center  gap-x-5 w-10/12'>
            <div onMouseEnter={()=>Changephoto3(true) } onMouseLeave={()=>Changephoto3(false)} className={` relative flex gap-y-3 rounded-3xl h-44 flex-1 justify-center items-center bg-categoriesB flex-col text-white text-xs font-semibold hover:shadow-shadowCategorie hover:bg-categoriesWhite transition-all duration-300 delay-75 ease-in-out  hover:-translate-y-2 hover:${photo3 ? (data ? 'text-greenSofic' : 'text-blueSofic') : 'text-white'}`}><div className=' relative w-full h-3/4'><Image className={`w-widthCategorie transition-all top-2/3 left-1/2 -translate-x-1/2  -translate-y-1/2 absolute duration-300 delay-75 ${photo3 ? ' opacity-100' : 'opacity-0'} `} src={img4 } alt="" /><Image className={`w-5/12 transition-all top-2/3 left-1/2 -translate-x-1/2  -translate-y-1/2 absolute duration-400 delay-75 ${photo3 ? ' opacity-0' : 'opacity-100'} `} src={img9} alt="" /></div><div className='h-1/3'>Translation</div></div>
            <div onMouseEnter={()=>Changephoto4(true) } onMouseLeave={()=>Changephoto4(false)} className={` relative flex gap-y-3 rounded-3xl h-44 flex-1 justify-center items-center bg-categoriesB flex-col text-white text-xs font-semibold hover:shadow-shadowCategorie hover:bg-categoriesWhite transition-all duration-300 delay-75 ease-in-out  hover:-translate-y-2 hover:${photo4 ? (data ? 'text-greenSofic' : 'text-blueSofic') : 'text-white'}`}><div className=' relative w-full h-3/4'><Image className={`w-widthCategorie transition-all top-2/3 left-1/2 -translate-x-1/2  -translate-y-1/2 absolute duration-300 delay-75 ${photo4 ? ' opacity-100' : 'opacity-0'} `} src={img5 } alt="" /><Image className={`w-5/12 transition-all top-2/3 left-1/2 -translate-x-1/2  -translate-y-1/2 absolute duration-400 delay-75 ${photo4 ? ' opacity-0' : 'opacity-100'} `} src={img10} alt="" /></div><div className='h-1/3'>Development</div></div>
            <div onMouseEnter={()=>Click(true)} onMouseLeave={()=>Click(false)} className={`flex gap-y-3 cursor-pointer rounded-3xl h-44 flex-1 justify-center items-center  gap-x-2 text-colorCategorie text-xs font-semibold `}>View more <FontAwesomeIcon icon={faArrowRight} beatFade={click} size='xl'></FontAwesomeIcon></div>
        </div>
    </div>
    
    </div>

</div>  );
};

export default Categories;
