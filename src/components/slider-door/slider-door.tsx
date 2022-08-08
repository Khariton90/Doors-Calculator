import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { SliderCard } from '../slider-card/slider-card';
import styles from './slider-door.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';

type SliderDoorProps = {
  doors: any[]
}

const SLIDES_PER_VIEW = 3;

export default function SliderDoor({doors}: SliderDoorProps): JSX.Element {
  const {sliderDoor } = styles;

  const [disabled, setDisabled] = useState(false);

  const changeRadioInputValueHandler = (evt:React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.checked) {
      setDisabled((prevValue) => prevValue = true);
    }
  }

  const slideShowValue = doors.length > SLIDES_PER_VIEW ? SLIDES_PER_VIEW : doors.length;

  return (
    <div className={sliderDoor}>
      <div className={'nextEl'}></div>  
        <div className='prevEl'></div>      
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={slideShowValue}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        navigation={{nextEl: '.nextEl', prevEl: '.prevEl'}}
      >
        {doors.map((door, index) => (<SwiperSlide key={index}><SliderCard changeRadioInputValueHandler={changeRadioInputValueHandler} disabled={disabled} door={door}/></SwiperSlide>))}
      </Swiper>
    </div>
  );
};