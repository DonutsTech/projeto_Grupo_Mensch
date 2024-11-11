'use client';

import classNames from 'classnames';
import Style from './Slider.module.scss';

import solarLogo from './assets/mesch_solar.svg';
import instalarLogo from './assets/mensch_instalar.svg';
import healthLogo from './assets/mensch_health.svg';
import mindLogo from './assets/mensch_mind.svg';

import solarIcon from './assets/v_solar.svg';
import instalarIcon from './assets/v_instalar.svg';
import healthIcon from './assets/v_health.svg';
import mindIcon from './assets/v_mind.svg';

import facebook from './assets/facebook.svg';
import instagram from './assets/instagram.svg';


import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Slider = () => {
  const [status, setStatus] = useState<string>('mind');


  useEffect(() => {
    const timer = setTimeout(() => {
      if (status === 'solar') {
        setStatus('instalar');
      } else if (status === 'instalar') {
        setStatus('health');
      } else if (status === 'health') {
        setStatus('mind');
      } else if (status === 'mind') {
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
              <p className={Style.slider__submarca__content__text}>Uma solução completa para economia e sustentabilidade! Cuidamos de tudo, do projeto ao suporte pós-venda, com sistemas eficientes e acompanhamento próximo. Transformar energia é transformar vidas, e estamos prontos para ajudar você nesse caminho.</p>
            </div>

            <div className={Style.slider__submarca__btn}>

              <button
                onClick={() => window.open('/energiasolar', '_top')}
                className={classNames({
                  [Style.slider__submarca__btn__btn]: true,
                  [Style.slider__submarca__btn__btn_solar]: true,
                })}
                title='Confira a página da Mensch Energia Solar'
              >Confira</button>

              <div className={Style.slider__submarca__btn__redes} >

                <Link href={'https://www.facebook.com/mchengenharia/'} target='_blank' rel='noreferrer' title='Confira o Facebook da Mensch Energia Solar' >
                  <Image src={facebook} alt='Facebook' className={Style.slider__submarca__btn__redes__icon} width={48} height={48} />
                </Link>

                <Link href={'https://www.instagram.com/mensch.energiasolar/'} target='_blank' rel='noreferrer' title='Confira o Instagram da Mensch Energia Solar' >
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
              <p className={Style.slider__submarca__content__text}>O apoio que o profissional precisa para um serviço seguro e de qualidade! Oferecemos materiais selecionados para instaladores de ar-condicionado, eletricistas e técnicos em refrigeração, com ferramentas de precisão e itens essenciais. Mais que produtos, damos suporte a quem busca crescer e entregar o melhor.</p>
            </div>

            <div className={Style.slider__submarca__btn}>

              <button className={classNames({
                [Style.slider__submarca__btn__btn]: true,
                [Style.slider__submarca__btn__btn_instalar]: true,
              })}
                title='Em Breve - site da Mensch Instalar'
              >Em Breve</button>

              <div className={Style.slider__submarca__btn__redes} >

                <Link href={'https://www.facebook.com/menschrefrigeracao'} target='_blank' rel='noreferrer' title='Confira o Facebook da Instalar' >
                  <Image src={facebook} alt='Facebook' className={Style.slider__submarca__btn__redes__icon} width={48} height={48} />
                </Link>

                <Link href={'https://www.instagram.com/mensch.instalar/'} target='_blank' rel='noreferrer' title='Confira o Instagram da Instalar' >
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
              <p className={Style.slider__submarca__content__text}>Acreditamos que saúde é equilíbrio entre corpo, mente e alma, começando ao redor da mesa. Cozinhar é um ato de amor que promove bem-estar e fortalece laços. Inspiramos você a viver com saúde e propósito, celebrando a vida com quem mais importa.</p>
            </div>

            <div className={Style.slider__submarca__btn}>

              <button
                onClick={() => window.open('/health', '_top')}
                className={classNames({
                  [Style.slider__submarca__btn__btn]: true,
                  [Style.slider__submarca__btn__btn_health]: true,
                })}
                title='Confira o site da Mensch Health'
              >Confira</button>
              <div className={Style.slider__submarca__btn__redes} >
                <Link href={'https://www.facebook.com/people/Grupo-Mensch/100091541775500/?locale=pt_BR'} target='_blank' rel='noreferrer' title='Confira o Facebook da Mensch Health' >
                  <Image src={facebook} alt='Facebook' className={Style.slider__submarca__btn__redes__icon} width={48} height={48} />
                </Link>
                <Link href={'https://www.instagram.com/grupo.mensch/'} target='_blank' rel='noreferrer' title='Confira o Instagram da Mensch Health' >
                  <Image src={instagram} alt='Instagram' className={Style.slider__submarca__btn__redes__icon} width={48} height={48} />
                </Link>
              </div>
            </div>
          </div>
        )
      },
      {
        status === 'mind' && (
          <div className={classNames({
            [Style.slider__submarca]: true,
            [Style.slider__submarca_mind]: true,
          })}>
            <div className={Style.slider__submarca__content}>
              <Image src={mindLogo} alt='Logo do Mensch Mind' className={Style.slider__submarca__content__logo} />
              <p className={Style.slider__submarca__content__text}>Onde conhecimento e transformação se encontram! Nossa comunidade de cursos é para líderes, gestores e empreendedores que buscam crescer. Com aulas práticas, inspiramos cada pessoa a alcançar seu melhor, fazendo do aprendizado um estilo de vida e impacto.</p>
            </div>

            <div className={Style.slider__submarca__btn}>

              <button className={classNames({
                [Style.slider__submarca__btn__btn]: true,
                [Style.slider__submarca__btn__btn_mind]: true,
              })}
                title='Em Breve - site da Mensch Mind'
              >Em Breve</button>

              <div className={Style.slider__submarca__btn__redes} >

                <Link href={'https://www.facebook.com/people/Grupo-Mensch/100091541775500/?locale=pt_BR'} target='_blank' rel='noreferrer' title='Confira o Facebook da Mensch Mind' >
                  <Image src={facebook} alt='Facebook' className={Style.slider__submarca__btn__redes__icon} width={48} height={48} />
                </Link>

                <Link href={'https://www.instagram.com/grupo.mensch/'} target='_blank' rel='noreferrer' title='Confira o Instagram da Mensch Mind' >
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
        <Image src={mindIcon} alt='Icone do Mensch Mind'
          className={classNames({
            [Style.slider__dots__icon]: true,
            [Style.slider__dots__icon_active]: status === 'mind',
            [Style.slider__dots__icon_mind]: status === 'mind',
          })}
          onClick={() => setStatus('mind')}
        />
      </div>
    </div>
  )
};

export default Slider;
