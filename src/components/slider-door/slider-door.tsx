import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { SliderCard } from '../slider-card/slider-card';
import styles from './slider-door.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';


export default function SliderDoor(): JSX.Element {
  const {sliderDoor } = styles;
  return (
    <div className={sliderDoor}>
      <div className={'nextEl'}></div>  
        <div className='prevEl'></div>      
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={{nextEl: '.nextEl', prevEl: '.prevEl'}}
      >
        <SwiperSlide><SliderCard /></SwiperSlide>
        <SwiperSlide><SliderCard /></SwiperSlide>
        <SwiperSlide><SliderCard /></SwiperSlide>
        <SwiperSlide><SliderCard /></SwiperSlide>
        <SwiperSlide><SliderCard /></SwiperSlide>
        <SwiperSlide><SliderCard /></SwiperSlide>
      </Swiper>
    </div>
  );
};