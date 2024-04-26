import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

import React from 'react';
import Link from 'next/link';

import {
  RxArrowTopRight,
} from 'react-icons/rx';


  export const getServerSideProps = async (context) => {
    const res = await fetch(`https://baro.ibasterisk.sk/wp-json/wp/v2/posts/${context.params.id}/`);
    const data = await res.json();
    return {
        props: {data}
    }
}

 const RaspberryItem = ({data}) => {

    return (
      <div className='container mx-auto min-h-screen h-auto flex flex-col items-center gap-x-6 py-20'>
        <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1'
          >
            <span  dangerouslySetInnerHTML={{__html: data.title.rendered}}></span><span className='text-accent'>.</span>
          </motion.h1>
          <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex items-center justify-center'>
          
          <div dangerouslySetInnerHTML={{__html: data.content.rendered}} className='px-10 w-2/3'></div>
          </motion.div>
      </div>   
    );
  };
  
            
  export default RaspberryItem;
  