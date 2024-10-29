'use client';

import classNames from 'classnames';
import Style from './Slider.module.scss';

import solarLogo from './assets/mesch_solar.svg';
import instalarLogo from './assets/mensch_instalar.svg';
import healthLogo from './assets/mensch_health.svg';

import solarIcon from './assets/icon_solar.svg';
import instalarIcon from './assets/icon_instalar.svg';
import healthIcon from './assets/icon_health.svg';


import facebook from './assets/facebook.svg';
import instagram from './assets/instagram.svg';


import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Slider = () => {
  const [status, setStatus] = useState<string>('health');


  useEffect(() => {
    const timer = setTimeout(() => {
      if (status === 'solar') {
        setStatus('instalar');
      } else if (status === 'instalar') {
        setStatus('health');
      } else if (status === 'health') {
        setStatus('solar');
      }
    }, 10000);

    return () => clearTimeout(timer); 
  }, [status]);


  return (
    <div className={Style.slider}>
      {
        status === 'solar' && (
          <div className={classNames({
            [Style.slider__submarca]: true,
            [Style.slider__submarca_solar]: true,
          })}>
            <div className={Style.slider__submarca__content}>
              <Image src={solarLogo} alt='Logo da Mensch Energia Solar' className={Style.slider__submarca__content__logo} />
              <p className={Style.slider__submarca__content__text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt debitis magnam asperiores libero harum tenetur temporibus dignissimos, nostrum corrupti cupiditate necessitatibus autem voluptatem soluta, rem consequuntur molestiae voluptates maiores quia?</p>
            </div>

            <div className={Style.slider__submarca__btn}>

              <button className={classNames({
                [Style.slider__submarca__btn__btn]: true,
                [Style.slider__submarca__btn__btn_solar]: true,
              })}
                title='Confira a página da Mensch Energia Solar'
              >Confira</button>

              <div className={Style.slider__submarca__btn__redes} >

                <Link href={'/'} target='_blank' rel='noreferrer' title='Confira o Facebook da Mensch Energia Solar' >
                  <Image src={facebook} alt='Facebook' className={Style.slider__submarca__btn__redes__icon} width={48} height={48} />
                </Link>

                <Link href={'/'} target='_blank' rel='noreferrer' title='Confira o Instagram da Mensch Energia Solar' >
                  <Image src={instagram} alt='Instagram' className={Style.slider__submarca__btn__redes__icon} width={48} height={48} />
                </Link>

              </div>
            </div>
          </div>
        )
      }
      {
        status === 'instalar' && (
          <div className={classNames({
            [Style.slider__submarca]: true,
            [Style.slider__submarca_instalar]: true,
          })}>
            <div className={Style.slider__submarca__content}>
              <Image src={instalarLogo} alt='Logo da Mensch Instalar' className={Style.slider__submarca__content__logo} />
              <p className={Style.slider__submarca__content__text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt debitis magnam asperiores libero harum tenetur temporibus dignissimos, nostrum corrupti cupiditate necessitatibus autem voluptatem soluta, rem consequuntur molestiae voluptates maiores quia?</p>
            </div>

            <div className={Style.slider__submarca__btn}>

              <button className={classNames({
                [Style.slider__submarca__btn__btn]: true,
                [Style.slider__submarca__btn__btn_instalar]: true,
              })}
                title='Em Breve - site da Mensch Instalar'
              >Em Breve</button>

              <div className={Style.slider__submarca__btn__redes} >

                <Link href={'/'} target='_blank' rel='noreferrer' title='Confira o Facebook da Instalar' >
                  <Image src={facebook} alt='Facebook' className={Style.slider__submarca__btn__redes__icon} width={48} height={48} />
                </Link>

                <Link href={'/'} target='_blank' rel='noreferrer' title='Confira o Instagram da Instalar' >
                  <Image src={instagram} alt='Instagram' className={Style.slider__submarca__btn__redes__icon} width={48} height={48} />
                </Link>

              </div>
            </div>
          </div>
        )
      }
      {
        status === 'health' && (
          <div className={classNames({
            [Style.slider__submarca]: true,
            [Style.slider__submarca_health]: true,
          })}>
            <div className={Style.slider__submarca__content}>
              <Image src={healthLogo} alt='Logo do Mensch Health' className={Style.slider__submarca__content__logo} />
              <p className={Style.slider__submarca__content__text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt debitis magnam asperiores libero harum tenetur temporibus dignissimos, nostrum corrupti cupiditate necessitatibus autem voluptatem soluta, rem consequuntur molestiae voluptates maiores quia?</p>
            </div>

            <div className={Style.slider__submarca__btn}>

              <button className={classNames({
                [Style.slider__submarca__btn__btn]: true,
                [Style.slider__submarca__btn__btn_health]: true,
              })}
                title='Confira o site da Mensch Health'
              >Confira</button>

              <div className={Style.slider__submarca__btn__redes} >

                <Link href={'/'} target='_blank' rel='noreferrer' title='Confira o Facebook da Mensch Health' >
                  <Image src={facebook} alt='Facebook' className={Style.slider__submarca__btn__redes__icon} width={48} height={48} />
                </Link>

                <Link href={'/'} target='_blank' rel='noreferrer' title='Confira o Instagram da Mensch Health' >
                  <Image src={instagram} alt='Instagram' className={Style.slider__submarca__btn__redes__icon} width={48} height={48} />
                </Link>

              </div>
            </div>
          </div>
        )
      }

      <div className={Style.slider__dots}>
        <Image src={solarIcon} alt='Icone do Mensch Energia Solar'
          className={classNames({
            [Style.slider__dots__icon]: true,
            [Style.slider__dots__icon_active]: status === 'solar',
            [Style.slider__dots__icon_solar]: status === 'solar',
          })} 
            onClick={() => setStatus('solar')}
          />
        <Image src={instalarIcon} alt='Icone do Mensch Instalar'
          className={classNames({
            [Style.slider__dots__icon]: true,
            [Style.slider__dots__icon_active]: status === 'instalar',
            [Style.slider__dots__icon_instalar]: status === 'instalar',
          })} 
            onClick={() => setStatus('instalar')}
          />
        <Image src={healthIcon} alt='Icone do Mensch Health'
          className={classNames({
            [Style.slider__dots__icon]: true,
            [Style.slider__dots__icon_active]: status === 'health',
            [Style.slider__dots__icon_health]: status === 'health',
          })} 
            onClick={() => setStatus('health')}
          />
      </div>
    </div>
  )
};

export default Slider;
