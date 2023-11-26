// components
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-wrap justify-center w-full  gap-x-8'>
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%] min-w-36'
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
