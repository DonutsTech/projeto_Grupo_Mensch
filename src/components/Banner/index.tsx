'use client'


import Image from 'next/image';
import Style from './Banner.module.scss';
import logo from './assets/grupo_mensh_white.svg';


const Banner = () => {

  return (
    <div className={Style.banner}>
    <div className={Style.banner__overlay} />
    <div className={Style.banner__content}>
    <Image src={logo} alt="Grupo Mensch" className={Style.banner__content__logo} draggable={false} />
    <h1 className={Style.banner__content__title}>
      Uma Jornada de <span>Servir</span> e <span>Transformar</span>.
    </h1>
    </div>
    <video  autoPlay loop muted className={Style.banner__video} >
      <source src="/assets/videos/video_banner_grupoMensch.mp4" type="video/mp4" />
    </video>
    
    </div>
  )
};

export default Banner;
