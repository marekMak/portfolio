import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

import React from 'react';
import Link from 'next/link';

import {
  RxArrowTopRight,
} from 'react-icons/rx';

  export const getStaticProps = async () =>{

    const res = await fetch('https://baro.ibasterisk.sk/wp-json/wp/v2/posts?categories=12&per_page=100',{ next: { revalidate: 3600 } });
    const data = await res.json();

    if(data){
      return{
        props:{data}
      }
    }

  }


  const Linux = ({data}) => {

    return (
      <div className='container mx-auto min-h-screen h-auto flex flex-col items-center gap-x-6 py-20'>
        <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1'
          >
            Linux<span className='text-accent'>.</span>
          </motion.h1>
          <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>
          {data.map((item, index)=>{
            return(
              <Link href={`./linux/${item.id}`} as={`/linux/${item.id}`} className='bg-[rgba(65,47,123,0.15)] z-50 h-max rounded-lg px-6 py-8 flex flex-1 sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icon */}
              <div className='text-2xl text-white hover:text-accent mb-4'  dangerouslySetInnerHTML={{__html: item.title.rendered}}></div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </Link>
            )
          })}
          </motion.div>
      </div>   
    );
  };
  
            
  export default Linux;
  
