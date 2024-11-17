'use client';

import Image from 'next/image';
import Style from './Social.module.scss';
import image from './image.png';
import selo from './selo_white_1.svg';
import Link from 'next/link';


const Social = () => {

  return (
    <section className={Style.social}>
      <Image src={selo} alt='Grupo Mensh' className={Style.social__logo} />

      <video autoPlay loop muted className={Style.social__video} >
        <source src="/assets/videos/social_menor.mp4" type="video/mp4" />
      </video>

      <div className={Style.social__content}>
        <h2 className={Style.social__content__titulo}>
          Juntos pelo <span>futuro</span> e unidos pelo <span>propósito</span>.
        </h2>
        <div className={Style.social__content__box}>
          <p className={Style.social__content__box__texto}>
          Em nossa jornada de servir e transformar, apoiamos projetos que geram impacto real e cuidam de quem mais precisa. Acreditamos que ser Mensch é fazer o bem com integridade e amor, valorizando a vida acima de tudo. <br />Cada ação reforça nosso compromisso em construir um futuro inclusivo e promissor para todos. <br /><br />Venha ser Mensch você também.
          </p>
          <Image src={image} alt='Mãos dadas' className={Style.social__content__box__img} />
        </div>
        <Link href={'/social'} >
        <button
          type='button' 
          className={Style.social__content__btn} 
          title='Vem ser Mensch!'           
        >
          Vem Ser Mensch!
        </button>
        </Link>
      </div>
    </section>
  )
};

export default Social;
