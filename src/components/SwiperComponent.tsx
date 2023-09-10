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

function SwiperComponent() {
    const imgArr=[image1,image2,image3,image4,image5,image6];
    SwiperCore.use([EffectFade,Autoplay,Navigation,Pagination])
  return (
    <>
    <Swiper slidesPerView={1} navigation pagination={{type:"progressbar"}} effect='fade' 
    autoplay={{delay:3000}} >
        {
            imgArr.map((url,index)=>(
                <SwiperSlide key={index}>
                    <div className=' overflow-hidden h-[400px] w-full' 
                    style={{background:`url(${url}) center no-repeat`, backgroundSize:'cover'}}>
                    </div>

                </SwiperSlide>
            ))

        }
    </Swiper>
      
    </>
  )
}

export default SwiperComponent
