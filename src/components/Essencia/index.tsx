'use client';

import Image from 'next/image';
import Style from './Essencia.module.scss';
import equipe from './image/equipe_mensch.jpg';
import selo from './image/selo_grupoMensch.svg';

const Essencia = () => {


  return (
    <section className={Style.essencia} aria-label='Nossa Essência é Servir e Transformar Grupo Mensch'>
      <div className={Style.essencia__content} >
        <h2 className={Style.essencia__content__title}>Construindo um Futuro Melhor com <span>Integridade</span> e <span>Honra</span>.</h2>
        <div className={Style.essencia__content__box} >
          <div className={Style.essencia__content__box__img} >
            <Image src={selo} alt='Selo do Grupo Mensch' className={Style.essencia__content__box__img__selo} />
          <Image src={equipe} alt='Nossa Essência é Servir e Transformar Grupo Mensch' className={Style.essencia__content__box__img__img} />
          </div>
          <p className={Style.essencia__content__box__text}>Ser Mensch vai além de uma filosofia de trabalho, é uma maneira de viver. Integridade é nossa bússola, a honra nos fortalece e o desejo de fazer o bem nos impulsiona. No Grupo Mensch, não apenas sonhamos com um futuro melhor, nós o construímos todos os dias. Com paixão, determinação e, acima de tudo, com honra. Acreditamos que cada ação pode transformar o mundo e é com essa visão que seguimos em frente, inspirando mudanças positivas e duradouras. <br />#SEJAMENSCH</p>
        </div>
        <button className={Style.essencia__content__btn}>Sobre Nós</button>
      </div>
    </section>
  )
}

export default Essencia;
