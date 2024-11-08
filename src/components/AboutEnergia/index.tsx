'use client';

import { useEffect, useState } from 'react';
import Style from './AboutEnergia.module.scss';

import suporte from './assets/suporte.jpg';
import tecnicos from './assets/tecnicos.jpg';
import atendimento from "./assets/atendimento.jpg";

import Image from 'next/image';

const AboutEnergia = () => {
  const [equipe, setEquipe] = useState(1);

  useEffect(() => {

    const timeEquipe = setTimeout(() => {
      if (equipe === 1) {
        setEquipe(2);
      } else if (equipe === 2) {
        setEquipe(3);
      } else if (equipe === 3) {
        setEquipe(1);
      }
    }, 10000);

    return () => clearTimeout(timeEquipe);

  }, [equipe])


  return (
    <div className={Style.about}>
      {equipe === 1 && (
        <div className={Style.about__content}>
          <Image src={suporte} alt="Suporte" className={Style.about__content__img} />
          <div className={Style.about__content__textos}>
            <h4 className={Style.about__content__textos__titulo}>
              <span>Suporte Técnico</span> e <span>Pós Vendas</span>
            </h4>
            <p className={Style.about__content__textos__paragrafo}>
              Nossa equipe de suporte e pós-vendas é oferece atendimento excepcional e resolve qualquer dúvida ou problema. Com especialistas em energia solar, técnicos certificados e profissionais de atendimento treinados, estamos disponíveis para resolver problemas técnicos, realizar manutenção, oferecer treinamento e garantir eficiência máxima. Conte conosco para resposta rápida, suporte técnico especializado e confiança total em sua     escolha.
            </p>
          </div>
        </div>
      )}
      {equipe === 2 && (
        <div className={Style.about__content}>
          <Image src={tecnicos} alt="tecnicos" className={Style.about__content__img} />
          <div className={Style.about__content__textos}>
            <h4 className={Style.about__content__textos__titulo}>
              <span>Técnicos Certificados</span>
            </h4>
            <p className={Style.about__content__textos__paragrafo}>
              Nossa equipe de técnicos é altamente qualificada e treinada, com anos de experiência em instalação e manutenção de sistemas de energia solar. Eles seguem rigorosos padrões de segurança e qualidade.
            </p>
          </div>
        </div>
      )}
      {equipe === 3 && (
        <div className={Style.about__content}>
          <Image src={atendimento} alt="atendimento" className={Style.about__content__img} />
          <div className={Style.about__content__textos}>
            <h4 className={Style.about__content__textos__titulo}>
              <span>Atendimento</span>
            </h4>
            <p className={Style.about__content__textos__paragrafo}>
              Estamos aqui para você! Nossa equipe de atendimento está disponível para resolver suas dúvidas e oferecer soluções personalizadas. Entre em contato conosco e descubra como podemos ajudá-lo a encontrar a melhor solução para suas necessidades.
            </p>
          </div>
        </div>
      )}
    </div>
  )
};

export default AboutEnergia;
