'use client'


import Image from 'next/image';
import Style from './BannerSolar.module.scss';
import logo from './assets/energiaSolar_white.svg';


const BannerSolar = () => {

  return (
    <div className={Style.banner}>
      <div className={Style.banner__overlay} />
      <div className={Style.banner__content}>
        <Image src={logo} alt="Mensh Energia Solar" className={Style.banner__content__logo} />
        <h1 className={Style.banner__content__title}>
        Transforme despesas em <span>economia </span>e <span>conforto</span>.
        </h1>
        <button className={Style.banner__content__button}>
          Invista no sol, economize dinheiro
        </button>
      </div>
      <video autoPlay loop muted className={Style.banner__video} >
        <source src="/assets/videos/video_solar.mp4" type="video/mp4" />
      </video>

    </div>
  )
};

export default BannerSolar;
