'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


import Style from './SwiperBancos.module.scss';

import BDMG from './assets/BDMG.png';
import BNDES from './assets/BNDES.png';
import bradesco from './assets/Bradesco.png';
import brasil from './assets/Brasil.png';
import BV from './assets/BV.png';
import caixa from './assets/Caixa.png';
import itau from './assets/Itau.png';
import safra from './assets/SAFRA.png';
import santander from './assets/Santander.png';
import sicoob from './assets/SICOOB.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const SwiperBancos = () => {

  const [tela, setTela] = useState(0);

  useEffect(() => {
    // Função para atualizar o estado com o tamanho da tela
    const updateTela = () => {
      setTela(
        window.innerWidth,
      );
    };
    window.addEventListener('resize', updateTela);
    updateTela();

    return () => window.removeEventListener('resize', updateTela);
  }, []);

  const bancos = [
    {
      id: 1,
      img: BDMG,
    },
    {
      id: 2,
      img: BNDES,
    },
    {
      id: 3,
      img: bradesco,
    },
    {
      id: 4,
      img: brasil,
    },
    {
      id: 5,
      img: BV,
    },
    {
      id: 6,
      img: caixa,
    },
    {
      id: 7,
      img: itau,
    },
    {
      id: 8,
      img: safra,
    },
    {
      id: 9,
      img: santander,
    },
    {
      id: 10,
      img: sicoob,
    }
  ]

  return (
    <div className={Style.esteira}>
      <Swiper

        // spaceBetween={24}
        slidesPerView={ (tela > 840) ? 9 : (tela < 840 && tela > 560) ? 6 : (tela < 560 &&  tela > 420) ? 4 : 3}
        draggable={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1500}
        modules={[Autoplay]}
        className={Style.esteira__swiper}
      >
        {bancos.map( banco => {
          return ( 
            <SwiperSlide key={banco.id} className={Style.esteira__swiper__item} >
              <Image src={banco.img} alt='Icon de Banco' className={Style.esteira__swiper__item__img} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
};

export default SwiperBancos;
