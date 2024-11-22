import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import bottle from '../../img/bottle.webp';

import { Autoplay, EffectFade } from 'swiper/modules';
import { IoCallSharp } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';

function Contact() {
  return (
    <div>
      <div className=' mt-6 mini:mb-10 tablet:mb-16'>
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          autolay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade]}
          className="mySwiper relative mini:h-[25vh] mob:h-[50vh] laptop:h-[75vh]"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>

          <div className='absolute flex flex-col items-end tablet:mr-4 mini:top-[5%] mob:top-[30%] tablet:top-[30%] mini:right-10 tablet:right-24 z-10'>
            <h1 style={{ fontFamily: "'Frunchy', sans-serif" }} className='text-white mini:text-[25px] mob:text-[60px] tablet:text-[95px] laptop:text-[120px] '>CONTACTO</h1>
          </div>
        </Swiper>
      </div>

      <div className='text-[#748371] font-bold mini:w-[90%] mini:mx-auto mob:mx-0 mini:mb-3 tablet:mb-10 mob:w-[80%] laptop:w-[50%] mini:pl-1 mob:pl-6 tablet:pl-16'    style={{ fontFamily: "'Frunchy', sans-serif" }} >
        <h4 className='mini:text-[25px] mob:text-[35px] tablet:text-[55px] mini:text-center mob:text-left'>Contáctanos</h4>
        <div className='flex mini:flex-col mob:flex-row items-center gap-2 my-3'>
          <IoCallSharp className='mini:text-[18px] mob:text-[23px] tablet:text-[30px]' />
          <p className='mini:text-[15px] mob:text-[20px] tablet:text-[22px] laptop:text-[27px]'>5623.9313</p>
        </div>
        <div className='flex mini:flex-col mob:flex-row items-center gap-2'>
          <FaLocationDot className='mini:text-[18px] mob:text-[23px] tablet:text-[30px] my-3' />
          <p className='mini:text-[15px] mob:text-[18px] tablet:text-[22px] laptop:text-[27px]'>Caserío El Milagro, 3 calle lote 78, Sipacate, El Paredón Buena Vista 00000</p>
        </div>
        <div className='flex mini:flex-col mob:flex-row items-center gap-2 my-3'>
          <MdOutlineMail className='mini:text-[18px] mob:text-[23px] tablet:text-[30px]' />
          <p className='mini:text-[13px] mob:text-[18px] tablet:text-[22px] laptop:text-[27px]'>corporacionveramar@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contact