'use client';

import Image from 'next/image';
import Style from './BannerMold.module.scss';
import Scroll from 'react-scroll';
import React, { useState } from 'react';

interface IProps {
  cor?: string;
  opacity?: number;
  titulo?: JSX.Element;
  fontSize: string;
  lineHeight: string;
  hover?: string;
  logo: string;
  type?: string;
  video: string;

}

const SpanHover = ({ cor = '', children }: { cor: string | undefined; children: JSX.Element | JSX.Element[] }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <span
      style={{
        transition: 'color 200ms ease-in-out',
        color: isHover ? cor : ''
      }}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      {children}
    </span>
  );
};

const BannerMold = ({
  cor,
  opacity,
  titulo,
  fontSize,
  lineHeight,
  hover,
  logo,
  type = "",
  video
}: IProps) => {
  return (
    <div className={Style.banner}>
      <div className={Style.banner__overlay} style={{ backgroundColor: `${cor}`, opacity: `${opacity}`, }} />
      <div className={Style.banner__content}>
        <Image
          className={Style.banner__content__logo}
          src={logo}
          alt={'Grupo Mensch'}
          draggable={false}
          width={400}
          height={166}
        />
        {titulo && (
          <h1
            className={Style.banner__content__title}
            style={{
              fontSize: `${fontSize}`,
              lineHeight: `${lineHeight}`
            }}
          >
            {React.Children.map(titulo, (child) =>
              child.type === 'span'
                ? <SpanHover cor={hover}>{child.props.children}</SpanHover>
                : child
            )}
          </h1>
        )}

        {type === 'solar' && (
            <button className={Style.banner__content__button}
              onClick={(e) => {
                e.preventDefault();
                Scroll.scroller.scrollTo('cta_solar', { duration: 500, delay: 0, smooth: true });
              }}
            >Invista no sol, economize dinheiro</button>
          )}
          
      </div>
      <video playsInline autoPlay loop muted className={Style.banner__video}>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default BannerMold;
