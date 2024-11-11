'use client'


import Image from 'next/image';
import Style from './BannerAbout.module.scss';
import logo from './assets/grupo_mensh_white.svg';


const BannerAbout = () => {

  return (
    <div className={Style.banner}>
    <div className={Style.banner__overlay} />
    <div className={Style.banner__content}>
      <Image src={logo} alt="Grupo Mensch" className={Style.banner__content__logo} draggable={false} />
    <h1 className={Style.banner__content__title}>
      Nós somos <span>Mensch</span>.
    </h1>
    </div>
    <video  autoPlay loop muted className={Style.banner__video} >
      <source src="/assets/videos/video_about.mp4" type="video/mp4" />
    </video>
    
    </div>
  )
};

export default BannerAbout;
