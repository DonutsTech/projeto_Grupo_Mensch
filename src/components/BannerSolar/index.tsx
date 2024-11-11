'use client'


import Image from 'next/image';
import Scroll from 'react-scroll';
import Style from './BannerSolar.module.scss';
import logo from './assets/energiaSolar_white.svg';


const BannerSolar = () => {

  return (
    <div className={Style.banner}>
      <div className={Style.banner__overlay} />
      <div className={Style.banner__content}>
        <Image src={logo} alt="Mensh Energia Solar" className={Style.banner__content__logo} draggable={false} />
        <h1 className={Style.banner__content__title}>
        Transforme despesas em <span>economia </span>e <span>conforto</span>.
        </h1>
        <button className={Style.banner__content__button}
          onClick={(e) => {
            e.preventDefault();
            Scroll.scroller.scrollTo('cta_solar', { duration: 500, delay: 0, smooth: true });
          }}
        >
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
