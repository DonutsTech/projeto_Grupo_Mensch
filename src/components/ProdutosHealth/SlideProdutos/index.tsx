'use client';

import Image from 'next/image';
import Style from './SlideProdutos.module.scss';

import panelas from './assets/panelas.png';

const SlideProdutos = () => { 

  return (
    <div className={Style.slide}>
      <div className={Style.slide__box}>
        <h3 className={Style.slide__box__titulo}>
          Panelas
        </h3>
        <Image src={panelas} alt='Panelas' className={Style.slide__box__img} />
        <Image src={panelas} alt='Panelas' className={Style.slide__box__bg} />
      </div>
    </div>
  )
}

export default SlideProdutos;
