'use client'


import Image from 'next/image';
import Style from './BannerSocial.module.scss';
import carimbo from './assets/carimbo_original.svg';
import Blobs from '../Blobs';


const BannerSocial = () => {

  return (
    <div className={Style.banner}>
    <div className={Style.banner__overlay} />
    <div className={Style.banner__content}>
      <div className={Style.banner__content__blobs} >
        <Image 
          src={carimbo} 
          alt="Grupo Mensh" 
          className={Style.banner__content__blobs__carimbo} 
          draggable={false}
        />
        <Blobs />
      </div>
    <h1 className={Style.banner__content__title}>
      Vem Ser <span>Mensch</span>.
    </h1>
    </div>
    <video  autoPlay loop muted className={Style.banner__video} >
      <source src="/assets/videos/video_social4.mp4" type="video/mp4" />
    </video>
    
    </div>
  )
};

export default BannerSocial;
