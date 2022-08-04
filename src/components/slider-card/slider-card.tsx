import { CardCompleteSet } from '../card-complete-set/card-complete-set';
import styles from './slider-card.module.scss';

export function SliderCard(): JSX.Element {
  const {doorConfigurationCard, content, doorType, description, descriptionTitle} = styles;

  return (
    <div className='unselectable'>
      <div className={doorConfigurationCard}>
        <div className={content}>
          <input type="radio" className={doorType} name="configurationType"/>
          <img src="images/door-img.png" alt="" />
        </div>

        <div className={description}>
          <p className={descriptionTitle}><b>
            Дверное полотно Verda Бавария 16 дуб шале капучино глухое пвх 700х2000 мм
          </b></p>
          <p className='annotation'>
            Предназначено для установки в жилых и общественных помещениях, например: квартирах, офисах, магазинах, салонах и др.
            Конструкция деталей обвязки выполнена в каркасном исполнении. Используется новая технология изготовления царги,
            основанная на сочетании брусков хвойных пород и стабилизирующей плиты из МДФ высшего класса.
            Высокотехнологичное декоративное ПВХ покрытие, нанесённое круговым окутыванием.
          </p>
          <p className={descriptionTitle}><b>
            Комплектация:
          </b></p>
          <p className='setSummary'>
            дверное полотно с замком Vantage 96SN (хром), ручки в комплект не входят.
          </p>
        </div>
      </div>

      <CardCompleteSet />
    </div>
 );
};