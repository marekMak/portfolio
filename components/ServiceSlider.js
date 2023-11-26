// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';

import{
  FaWindows,
  FaLinux,
  FaRaspberryPi,
  FaAsterisk,
  FaDocker,
  FaPython
} from 'react-icons/fa';

import { SiCisco } from "react-icons/si";

import { TbWorldWww } from "react-icons/tb";

// service data
export const serviceData = [
  {
    icon: <FaWindows />,
    title: 'Windows',
  },
  {
    icon: <FaLinux />,
    title: 'Linux',
  },
  {
    icon: <TbWorldWww />,
    title: 'Siete',
  },
  {
    icon: <SiCisco />,
    title: 'Cisco',
  },
  {
    icon: <FaRaspberryPi />,
    title: 'Raspberry',
  },
  {
    icon: <FaAsterisk />,
    title: 'Asterisk',
  },
  {
    icon: <FaDocker />,
    title: 'Docker',
  },
  {
    icon: <FaPython />,
    title: 'Python',
  },


];

const ServiceSlider = () => {
  return (
    <div className='grid grid-rows-2 grid-flow-col gap-4'>
  
  {serviceData.map((item,index) =>
          <a href={`./${item.title.toLowerCase()}`} className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex flex-1 sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
          {/* icon */}
          <div className='text-4xl text-accent mb-4'>{item.icon}</div>
          {/* title & desc */}
          <div className='mb-8'>
            <div className='mb-2 text-lg'>{item.title}</div>
          </div>
          {/* arrow */}
          <div className='text-3xl'>
            <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
          </div>
        </a>
        )} 
    </div>   
  );
};

          
export default ServiceSlider;
