// components
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />

    
      <div className='container mx-auto h-full w-full flex flex-col items-center  gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center relative z-50'>
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full min-w-36'
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
