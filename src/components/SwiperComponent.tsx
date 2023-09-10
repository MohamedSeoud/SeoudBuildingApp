import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpg'
import image3 from '../assets/3.jpg'
import image4 from '../assets/4.jpg'
import image5 from '../assets/5.jpg'
import image6 from '../assets/6.jpg'
import SwiperCore from 'swiper'
import {
    EffectFade,
    Autoplay,
    Navigation,
    Pagination
} from "swiper/modules";
import 'swiper/css/bundle';
import {  FaShare } from 'react-icons/fa';
import { useState } from 'react';

function SwiperComponent() {
    const imgArr=[image1,image2,image3,image4,image5,image6];
    const[copied,setCopied] =useState(false)
    SwiperCore.use([EffectFade,Autoplay,Navigation,Pagination])

    const onCopyHandler = ()=>{
        navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(()=> setCopied(false),2000)
    }

  return (
    <>
    <Swiper slidesPerView={1} navigation pagination={{type:"progressbar"}} effect='fade' 
    autoplay={{delay:3000}} >
        {
            imgArr.map((url,index)=>(
                <SwiperSlide key={index}>
                    <div className=' overflow-hidden h-[400px] w-full' 
                    style={{background:`url(${url}) center no-repeat`, backgroundSize:'cover'}}>

                    <div className=' flex  flex-col  gap-4  justify-center items-end p-12  text-gray-500'>
                        <span onClick={onCopyHandler} className=' h-16 w-16 rounded-full cursor-pointer bg-white flex justify-center items-center '>
                         <FaShare size="2.5rem"/>
                        </span>
                        {   copied &&
                            <span className=' bg-white p-2 rounded-lg text-black  font-bold text-3xl text-center'>
                             copied!
                            </span>
                        }

                    </div>
                </div>


                </SwiperSlide>
            ))

        }
    </Swiper>
      
    </>
  )
}

export default SwiperComponent
