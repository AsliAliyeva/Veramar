import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import bottle from '../../img/bottle.webp';

import { Autoplay, EffectFade } from 'swiper/modules';
function Veramar() {
  const [reload, setReload] = useState(false);
  return (
    <div id='veramar'>
        <div className=' mt-6'>
            <Swiper
                  spaceBetween={30}
                  effect={'fade'}
                  autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                  modules={[Autoplay, EffectFade]}
                  className="mySwiper relative h-[75vh]"
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
              <div className='absolute flex flex-col items-end tablet:mr-4 mini:top-[5%] mob:top-[30%] tablet:top-[30%] right-0 z-10'>
                  <h1 style={{ fontFamily: "'Frunchy', sans-serif" }} className='text-white mini:text-[30px] mob:text-[60px] tablet:text-[95px] laptop:text-[150px] '>VERAMAR</h1>
                  <button className='bg-[#d0c5ad] font-bold px-6 py-2 rounded-[5px] border-white hover:bg-[#748371] hover:text-white transition hover:scale-[110%] duration-150'>Ver Tienda</button>
              </div>
              </Swiper>
        </div>
        <div className='w-[90%] tablet:w-[70%]  flex flex-col items-center mx-auto my-12'>
          <div className='bg-[#d0c5ad] text-[40px] tablet:text-[55px] mini:w-[90%] mob:w-[70%] text-center mx-auto my-1 '  style={{ fontFamily: "'Frunchy', sans-serif" }}>Descubre Veramar</div>
          <div className='text-[#7a7a7a] font-bold text-[20px] text-justify'style={{ fontFamily: "'Frunchy', sans-serif" }}>Somos una marca ecológica comprometida con la preservación del medio ambiente y la responsabilidad social. Diseñada por mujeres para mujeres, celebramos la diversidad y fortaleza femenina.</div>
        </div>
        <div className='w-[90%] mx-auto'>
          <video 
          className='w-full'
          key={reload}  controls autoplay loop muted
          >
            <source src="https://veramar.gt/wp-content/uploads/2024/10/Veramar-Institucional-720-Made-with-Clipchamp.mp4" type="video/mp4" />
          </video>
        </div>

        <div className='px-6 mt-12'>
          <div className='bg-[#d0c5ad] text-[40px] tablet:text-[55px] mini:w-[90%] mob:w-[70%] text-center mx-auto my-1 '  style={{ fontFamily: "'Frunchy', sans-serif" }}>Nuestros Pilares</div>
          <div className='flex flex-col my-8 tablet:flex-row justify-between items-center'>
            <div className='flex flex-col items-center w-[80%] my-4 tablet:w-[33%]'>
                <img className='w-[280px]' src={bottle} alt="" />
                <h3 className='text-[45px]' style={{ fontFamily: "'Frunchy', sans-serif" }}>Ecología</h3>
                <p className='text-[#7a7a7a] px-6 text-[15px] text-bold text-justify'>Veramar no solo fabrica trajes de baño, sino que lo hace con una profunda conciencia ecológica. Conscientes del impacto ambiental que genera el plástico, hemos decidido convertir un problema en una solución.</p>
            </div>
            <div className='flex flex-col items-center w-[80%] my-4 tablet:w-[33%]'>
                <img className='w-[280px]' src={bottle} alt="" />
                <h3 className='text-[45px]' style={{ fontFamily: "'Frunchy', sans-serif" }}>Ecología</h3>
                <p className='text-[#7a7a7a] px-6 text-[15px] text-bold text-justify'>Veramar no solo fabrica trajes de baño, sino que lo hace con una profunda conciencia ecológica. Conscientes del impacto ambiental que genera el plástico, hemos decidido convertir un problema en una solución.</p>
            </div>
            <div className='flex flex-col items-center w-[80%] my-4 tablet:w-[33%]'>
                <img className='w-[280px]' src={bottle} alt="" />
                <h3 className='text-[45px]' style={{ fontFamily: "'Frunchy', sans-serif" }}>Ecología</h3>
                <p className='text-[#7a7a7a] px-6 text-[15px] text-bold text-justify'>Veramar no solo fabrica trajes de baño, sino que lo hace con una profunda conciencia ecológica. Conscientes del impacto ambiental que genera el plástico, hemos decidido convertir un problema en una solución.</p>
            </div>
          </div>
        </div>

        <div>
          <div className='bg-[#d0c5ad] text-[40px] tablet:text-[55px] mini:w-[90%] mob:w-[70%] text-center mx-auto my-1 '  style={{ fontFamily: "'Frunchy', sans-serif" }}>Colecciones</div>
          <div className='laptop:px-12 px-8 mt-12 items-center flex flex-col laptop:flex-row justify-between'>
              <div className='laptop:w-[24%] relative'>
                <img className='w-[80%] my-6 mx-auto laptop:h-[400px]' src={bottle} alt="" />
                <div className='text-[#f7ede0] mini:text[20px] mob:text-[28px] tablet:text-[40px] w-[200px]  absolute left-1/2 transform -translate-x-1/2 bottom-4  tablet:bottom-2' style={{ fontFamily: "'Frunchy', sans-serif" }}>Bright Summer</div>
              </div>
              <div className='laptop:w-[24%] relative'>
                <img className='w-[80%] my-6 mx-auto laptop:h-[400px]' src={bottle} alt="" />
                <div className='text-[#f7ede0] mini:text[20px] mob:text-[28px] tablet:text-[40px] w-[200px]  absolute left-1/2 transform -translate-x-1/2 bottom-4  tablet:bottom-2' style={{ fontFamily: "'Frunchy', sans-serif" }}>Bright Summer</div>
              </div>
              <div className='laptop:w-[24%] relative'>
                <img className='w-[80%] my-6 mx-auto laptop:h-[400px]' src={bottle} alt="" />
                <div className='text-[#f7ede0] mini:text[20px] mob:text-[28px] tablet:text-[40px] w-[200px]  absolute left-1/2 transform -translate-x-1/2 bottom-4  tablet:bottom-2' style={{ fontFamily: "'Frunchy', sans-serif" }}>Bright Summer</div>
              </div>
              <div className='laptop:w-[24%] relative'>
                <img className='w-[80%] my-6 mx-auto laptop:h-[400px]' src={bottle} alt="" />
                <div className='text-[#f7ede0] mini:text[20px] mob:text-[28px] tablet:text-[40px] w-[200px]  absolute left-1/2 transform -translate-x-1/2 bottom-4  tablet:bottom-2' style={{ fontFamily: "'Frunchy', sans-serif" }}>Bright Summer</div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Veramar