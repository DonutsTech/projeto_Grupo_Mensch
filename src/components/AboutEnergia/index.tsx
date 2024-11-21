'use client';

import { useEffect, useState } from 'react';
import Style from './AboutEnergia.module.scss';

import mensch from './assets/mensch.jpg';
import suporte from './assets/suporte.png';
import tecnicos from './assets/tecnicos.jpg';

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
          <Image draggable="false" src={mensch} alt="Suporte" className={Style.about__content__img} />
          <div className={Style.about__content__textos}>
            <h4 className={Style.about__content__textos__titulo}>
              <span>Grupo Mensch</span>
            </h4>
            <p className={Style.about__content__textos__paragrafo}>
              Especialistas em energia solar fotovoltaica, com equipe de engenharia própria e foco em qualidade e excelência. Movidos pela paixão em promover sustentabilidade e economia, oferecemos soluções personalizadas para uma energia mais limpa e eficiente. Seu parceiro confiável.
            </p>
          </div>
        </div>
      )}
      {equipe === 2 && (
        <div className={Style.about__content}>
          <Image draggable="false" src={tecnicos} alt="tecnicos" className={Style.about__content__img} />
          <div className={Style.about__content__textos}>
            <h4 className={Style.about__content__textos__titulo}>
              <span>Técnicos Certificados</span>
            </h4>
            <p className={Style.about__content__textos__paragrafo}>
              Contamos com uma equipe de técnicos especializados, com ampla experiência em instalação e manutenção de sistemas de energia solar. Treinados para atuar com eficiência, eles seguem normas rígidas de segurança e qualidade, assegurando soluções confiáveis e de alto padrão para suas necessidades energéticas.
            </p>
          </div>
        </div>
      )}
      {equipe === 3 && (
        <div className={Style.about__content}>
          <Image draggable="false" src={suporte} alt="Suporte" className={Style.about__content__img} />
          <div className={Style.about__content__textos}>
            <h4 className={Style.about__content__textos__titulo}>
              <span>Suporte Técnico</span>
            </h4>
            <p className={Style.about__content__textos__paragrafo}>
            Nossa equipe de suporte e pós-vendas oferece atendimento excepcional para solucionar qualquer dúvida ou necessidade. Com especialistas em energia solar, técnicos certificados e profissionais treinados, garantimos assistência técnica, manutenção, treinamento e máxima eficiência. Conte com resposta rápida, suporte especializado e total confiança na sua escolha.
            </p>
          </div>
        </div>
      )}
    </div>
  )
};

export default AboutEnergia;
