// testimonial slider data
export const testimonialSlider = [
  {
    image: '/fayn.svg',
    name: 'fayn.cz',
    position: 'asterisk specialist',
  },
  {
    image: '/netvel.png',
    name: 'netvel.sk',
    position: 'partnership',
  },
  {
    image: '/vintage.jpg',
    name: 'vintagedistrict.sk',
    position: 'partnership',
  },
  {
    image: '/secorama.png',
    name: 'secorama.sk',
    position: 'partnership',
  },
  {
    image: '/melody.png',
    name: 'melodyhudbahrou.sk',
    position: 'partnership',
  },
];




// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper';

// icons
import { FaQuoteLeft } from 'react-icons/fa';
// next image
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col justify-center items-center md:flex-row gap-x-8 h-full px-16'>
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={150} height={150} alt='' />
                  </div>
                  {/* name */}
                  <div className='text-lg'>{person.name}</div>
                  {/* position */}
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote & message */}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
