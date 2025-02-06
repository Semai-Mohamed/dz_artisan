
import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import img2 from '../../../public/images/Subtract.svg';
import Link from 'next/link';
interface FreeProps {
  data: boolean;
}

const Free: React.FC<FreeProps> = ({ data }) => {
  const [arrow, setArrow] = useState(false);

  const handleArrow = (isHovering: boolean) => {
    setArrow(isHovering);
  };

  return (
    <div className="re w-full justify-center items-center pb-40 flex">
      <div
        className={`relative flex w-4/5 justify-center items-center ${
          data ? 'bg-[rgba(0,167,157,1)]' : 'bg-[rgba(0,167,157,1)]'
        } rounded-raduisCategories overflow-hidden h-auto`}
      >
        <div className="flex w-10/12 items-center py-20 z-20">
          <div className="flex flex-col gap-y-3 flex-1">
            <div className="text-white font-bold text-3xl">Dz artisan is</div>
            <div className="text-white font-bold text-3xl">totally free!</div>
            <div className="text-sm text-white tracking-widest font-light mt-3 w-4/5">
              And finally, you don’t have to pay for additional services on
              Dz artisan. Every user gets the full functionalities of the
              Dz artisan platform, which means that every user has the same
              chances—no pay for certification, no advertising services...
            </div>
            <div className="w-full flex items-center">
              <div
                className={`flex justify-center items-center gap-x-1 mt-12 px-4 py-2 text-white border-white border-2 font-semibold rounded-xl cursor-pointer hover:bg-white hover:px-5 transition-all duration-300 delay-75 ${
                  data ? 'hover:text-[rgba(0,167,157,1)]' : 'hover:text-[rgba(0,167,157,1)]'
                }`}
                onMouseEnter={() => handleArrow(true)}
                onMouseLeave={() => handleArrow(false)}
              >
                <Link href={'/signup'}
                  className={`${
                    arrow ? '-translate-x-2' : ''
                  } transition-transform duration-300 delay-75`}
                >
                  Join Us Now
                </Link>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className={`transform transition-transform duration-300 delay-75 ease-in-out ${
                    arrow ? 'scale-x-150' : ''
                  }`}
                  size="lg"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex-1 h-[430px] items-center justify-center overflow-hidden">
            <Image src={img2} alt="Illustration" className="w-auto mb-30 bg-white h-[450]"  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Free;
