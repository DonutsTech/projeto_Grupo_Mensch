'use client'


import Image from 'next/image';
// import Scroll from 'react-scroll';
import Style from './BannerHealth.module.scss';
import logo from './assets/mensh_health.svg';


const BannerHealth = () => {

  return (
    <div className={Style.banner}>
      <div className={Style.banner__overlay} />
      <div className={Style.banner__content}>
        <Image src={logo} alt="Mensh Energia Solar" className={Style.banner__content__logo} draggable={false} />
        <h1 className={Style.banner__content__title}>
        Viver com <span>Saúde </span>e <span>Propósito</span>.
        </h1>
      </div>
      <video autoPlay loop muted className={Style.banner__video} >
        <source src="/assets/videos/video_health.mp4" type="video/mp4" />
      </video>

    </div>
  )
};

export default BannerHealth;
