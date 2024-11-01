'use client';

import Image from 'next/image';
import Style from './Social.module.scss';
import logo from './logo_grupoMensch.svg';
import image from './image.png';

const Social = () => {

  return (
    <section className={Style.social}>
      <Image src={logo} alt='Grupo Mensh' className={Style.social__logo} />
      <video autoPlay loop muted className={Style.social__video} >
        <source src="/assets/videos/video_social4.mp4" type="video/mp4" />
      </video>

      <div className={Style.social__content}>
        <h2 className={Style.social__content__titulo}>
          Juntos pelo <span>futuro</span> e unidos pelo <span>propósito</span>.
        </h2>
        <div className={Style.social__content__box}>
          <p className={Style.social__content__box__text}>
          Em nossa jornada de transformação, apoiamos projetos que fazem a diferença e fortalecem a comunidade, promovendo sustentabilidade. Cada escolha nos leva a um futuro inclusivo e promissor, refletindo nosso compromisso com a mudança e o impacto positivo na sociedade. <br/>Venha ser Mensch você também!
          </p>
          <Image src={image} alt='Mãos dadas' className={Style.social__content__box__img} />
        </div>
        <button className={Style.social__content__btn} title='Vem ser Mensch!'>
          Vem Ser Mensch!
        </button>
      </div>
    </section>
  )
};

export default Social;
