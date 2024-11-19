'use client';

import Image from 'next/image';

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Style from './Dicas.module.scss';
import './slide.css';

import gsap from 'gsap';
import { useEffect } from 'react';

import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';

import classNames from 'classnames';
import { Autoplay } from 'swiper/modules';

const Dicas = () => {



  useEffect(() => { 

    const swiperElement = document.getElementById('swiper') as HTMLElement & { swiper: SwiperClass };

    if (swiperElement) {
      const swiper = swiperElement.swiper;

      swiper.on('slideChange', () => {
        const activeSlide = swiper.slides[swiper.activeIndex];
        const textos = activeSlide.querySelector('.textos') as HTMLElement;
        const img = activeSlide.querySelector('.img') as HTMLElement;

        gsap.fromTo(
          img,
          { opacity: 0, x: 300 },
          { opacity: 1, x: 0, duration: 1 }
        );

        gsap.fromTo(
          textos,
          { opacity: 0, y: 300 },
          { opacity: 1, y: 0, duration: 1 }
        )
        
      });
    }


  }, []);

  const dicaLista = [
    {
      id: 1,
      titulo: 'Fortaleça laços com momentos únicos em família',
      texto: 'Reserve tempo para estar com quem você ama. Jogos, conversas ou uma simples refeição juntos criam conexões profundas e lembranças inesquecíveis. Esses momentos trazem felicidade e reforçam os laços afetivos que nos sustentam.',
      imagem: img1
    },
    {
      id: 2,
      titulo: 'Transforme sua cozinha em um laboratório de saúde',
      texto: 'Experimente novas receitas saudáveis com alimentos frescos. Cozinhar em casa não só garante mais sabor e nutrientes, mas também é uma ótima forma de aprender e compartilhar momentos com sua família ou amigos.',
      imagem: img2
    },
    {
      id: 3,
      titulo: 'Mexa-se! Cuide do corpo e da mente',
      texto: 'Dedique 30 minutos por dia a atividades físicas que você ame. Caminhar, nadar ou dançar libera endorfina, melhora a saúde do coração e aumenta sua disposição. O exercício é a chave para uma vida longa e cheia de energia.',
      imagem: img3
    },
    {
      id: 4,
      titulo: 'Acalme a mente para viver com mais leveza',
      texto: 'Pratique mindfulness, meditação ou respiração profunda para reduzir o estresse. Dedique momentos ao autocuidado, como leitura ou hobbies, para equilibrar a rotina e aumentar sua qualidade de vida.',
      imagem: img4
    },
    {
      id: 5,
      titulo: 'Durma bem e acorde cheio de energia',
      texto: 'Estabeleça uma rotina de sono, evitando telas antes de dormir. Um descanso adequado revitaliza o corpo, melhora a concentração e fortalece a imunidade. Cuide do seu sono e sinta a diferença no seu dia a dia.',
      imagem: img5
    }
  ]

  return (
    <div className={Style.dicas}>
      <Swiper 
        spaceBetween={24}
        slidesPerView={1}
        grabCursor={true}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{
          delay: 15000,
          disableOnInteraction: false,
        }}
        touchStartPreventDefault={false}
        className={classNames({
          [Style.dicas__swiper]:true,
          ['swiper'] : true,
        })}
        id='swiper'
      >
        {dicaLista.map((dica) => (
          <SwiperSlide className={Style.dicas__swiper__item} key={dica.id}>
            <Image 
              src={dica.imagem} 
              draggable={false} 
              className={classNames({
                [Style.dicas__swiper__item__img]: true,
                ['img']: true,
              })} 
              alt="dica Imagem" 
            />
            <div 
              className={classNames({
                [Style.dicas__swiper__item__textos]: true,
                ['textos']: true,
              })}
            
            >
              <h3 className={Style.dicas__swiper__item__textos__titulo}>{dica.titulo}</h3>
              <p className={Style.dicas__swiper__item__textos__paragrafo}>{dica.texto}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
};

export default Dicas;
