'use client';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Style from './Dicas.module.scss';
import './slide.css';

import gsap from 'gsap';
import { useEffect } from 'react';

import img1 from './assets/img1.jpg';
import classNames from 'classnames';

const Dicas = () => {



  useEffect(() => { 

    const swiperElement = document.querySelector('.swiper-container');

    if (swiperElement) {
      const swiper = (swiperElement as any ).swiper;
      
      // Aplicando a animação sempre que o slide mudar
      swiper.on('slideChange', () => {
        console.log('Evento slideChange disparado!');
        const activeSlide = swiper.slides[swiper.activeIndex];

        gsap.fromTo(
          activeSlide,
          { opacity: 0, y: 50 }, // animação de entrada
          { opacity: 1, y: 0, duration: 1 }
        );
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
      imagem: img1
    },
    {
      id: 3,
      titulo: 'Mexa-se! Cuide do corpo e da mente',
      texto: 'Dedique 30 minutos por dia a atividades físicas que você ame. Caminhar, nadar ou dançar libera endorfina, melhora a saúde do coração e aumenta sua disposição. O exercício é a chave para uma vida longa e cheia de energia.',
      imagem: img1
    },
    {
      id: 4,
      titulo: 'Acalme a mente para viver com mais leveza',
      texto: 'Pratique mindfulness, meditação ou respiração profunda para reduzir o estresse. Dedique momentos ao autocuidado, como leitura ou hobbies, para equilibrar a rotina e aumentar sua qualidade de vida.',
      imagem: img1
    },
    {
      id: 5,
      titulo: 'Durma bem e acorde cheio de energia',
      texto: 'Estabeleça uma rotina de sono, evitando telas antes de dormir. Um descanso adequado revitaliza o corpo, melhora a concentração e fortalece a imunidade. Cuide do seu sono e sinta a diferença no seu dia a dia.',
      imagem: img1
    }
  ]

  return (
    <div className={Style.dicas}>
      <Swiper 
        spaceBetween={24}
        slidesPerView={1}
        grabCursor={true}
        loop={true}
        touchStartPreventDefault={false}
        className={classNames({
          [Style.dicas__swiper]:true,
          ['swiper'] : true,
        })}
      >
        {dicaLista.map((dica) => (
          <SwiperSlide className={Style.dicas__swiper__item} key={dica.id}>
            <Image src={dica.imagem} draggable={false} className={Style.dicas__swiper__item__img} alt="dica Imagem" />
            <div className={Style.dicas__swiper__item__textos}>
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
