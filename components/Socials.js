// links
import Link from 'next/link';

// icons
import {
  RiFacebookLine,
} from 'react-icons/ri';

import { 
  FaLinkedin 
} from "react-icons/fa";


const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.facebook.com/ivan.baronak'} className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/ivan-baro%C5%88%C3%A1k-1b0b6914a/'} className='hover:text-accent transition-all duration-300'>
        <FaLinkedin />
      </Link>
    </div>
  );
};

export default Socials;
