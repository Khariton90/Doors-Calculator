import React, { useState } from 'react';
import { CardCompleteSet } from '../card-complete-set/card-complete-set';
import styles from './slider-card.module.scss';

type SliderCardProps = {
  changeRadioInputValueHandler: (evt:React.ChangeEvent<HTMLInputElement>) => void,
  disabled: boolean,
  door: any
}

export function SliderCard({changeRadioInputValueHandler, disabled, door}: SliderCardProps): JSX.Element {
  const {doorConfigurationCard, content, doorType, description, descriptionTitle, contentImage} = styles;

  return (
    <div className='unselectable'>
      <div className={doorConfigurationCard}>
        <div className={content}>
          <input type="radio" className={doorType} name="configurationType" onChange={changeRadioInputValueHandler}/>
          <div className={contentImage}>
            <img src={door.data.product.cover_image} alt="" width={'296px'} height="296px"/>
          </div>
          
        </div>

        <div className={description}>
          <div>
          <p className={descriptionTitle}><b>
            {door.data.product.title}
          </b></p>
          <p>Код: {door.data.product.code}</p>
          </div>
          <p className='annotation'>
            {door.data.product.description_no_html.description}
          </p>
          <div className='block2'>
          <p className={descriptionTitle}><b>
            {door.data.product.description_no_html.properties[0].key}:
          </b></p>
          <p className='setSummary'>
            {door.data.product.description_no_html.properties[0].value}
          </p>
          </div>
          
        </div>
      </div>

      <CardCompleteSet disabled={disabled}/>
    </div>
 );
};