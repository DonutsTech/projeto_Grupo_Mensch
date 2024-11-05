'use client';

import Image from 'next/image';
import Style from './Menu.module.scss';

import grupoMensch from './assets/grupo_mensch.svg';
import solar from './assets/mesch_solar.svg';
import health from './assets/mensch_health.svg';
import instalar from './assets/mensch_instalar.svg';
import mind from './assets/mensch_mind.svg';

import menuBtn from './assets/mobile_btn.svg';

import whatsapp from './assets/whatsapp.svg';
import Link from 'next/link';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

interface IProps {
  page: string;
}

const Menu = ({ page }: IProps) => {
  const [suspenso, setSuspenso] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [modal, setModal] = useState(false);
  const [marcas, setMarcas] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 840) {
      setSuspenso(false)
      setModal(false);
      setMarcas(false);
    }
    else if (windowWidth > 840) {
      setSuspenso(false);
      setModal(false);
      setMarcas(false);
    }
  }, [windowWidth]);



  return (
    <>
      <div className={Style.menuDesk}>
        <Link href={"/"}>
          <Image
            src={grupoMensch}
            alt="Logo Grupo Mensch"
            className={Style.menuDesk__logoMenu}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </Link>
        <nav className={Style.menuDesk__nav}>
          <ul className={Style.menuDesk__nav__list}>
            <li className={classNames({
              [Style.menuDesk__nav__list__item]: true,
              [Style.menuDesk__nav__list__item__active]: true,
            })}>
              <p onClick={() => setSuspenso(!suspenso)}>Marcas</p>

              <div className={classNames({
                [Style.menuDesk__nav__list__item__dropdown]: true,
                [Style.menuDesk__nav__list__item__dropdown__open]: suspenso,
              })}>
                <ul className={Style.menuDesk__nav__list__item__dropdown__list}>
                  <li>
                    <Link href={"/energiasolar"} target='_top' title='Conheça a Mensch Energia Solar'>
                      <Image src={solar} alt="Solar Logo" />
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"} title='Conheça a Mensch Health'>
                      <Image src={health} alt="Health Logo" />
                    </Link>
                  </li>
                  <li>
                    {/* <Link href={"/"} title='Conheça a Mensch Instalar'> */}
                    <Image src={instalar} alt="Instalar Logo" className={Style.img__breve} title='Em Breve!' />
                    {/* </Link> */}
                  </li>
                  <li>
                    {/* <Link href={"/"} title='Conheça a Mensch Instalar'> */}
                    <Image src={mind} alt="Mensch Mind Logo" className={Style.img__breve} title='Em Breve!' />
                    {/* </Link> */}
                  </li>
                </ul>
              </div>
            </li>
            <li className={classNames({
              [Style.menuDesk__nav__list__item]: true,
              [Style.menuDesk__nav__list__item__page]: page === 'about',
            })}>
              <Link href={"/about"}>
                <p>Sobre Nós</p>
              </Link>
            </li>
            <li className={classNames({
              [Style.menuDesk__nav__list__item]: true,
              [Style.menuDesk__nav__list__item__page]: page === 'social',
            })}>
              <Link href={"/social"} >
                <p>Vem Ser Mesch</p>
              </Link>
            </li>
            <li 
              className={Style.menuDesk__nav__list__item} >
                <Link 
                href={"/#contatos__mensch"}
                >
                <p>Fale conosco</p>
              </Link>
            </li>
          </ul>
          <Link href={'https://wa.me/5534996665871/?text=Olá venho do seu site e quero falar com você!'} target='_blank' rel='noopener noreferrer' title='Entre em contato via Whatsapp' >
            <Image
              src={whatsapp}
              alt="Whatsapp Logo"
              className={Style.menuDesk__nav__whatsapp}
            />
          </Link>
        </nav>
      </div>
      <div className={Style.menuMobile}>
        <Image
          src={menuBtn}
          alt='Botão Menu mobile'
          className={Style.menuMobile__btn}
          onClick={() => {
            setModal(!modal);
            setMarcas(false);
          }}
        />

        <div className={classNames({
          [Style.menuMobile__container]: true,
          [Style.menuMobile__container__open]: modal && (windowWidth < 840),
        })}
        >
          <div className={Style.menuMobile__container__logoBox}>
            <Link href={"/"}>
              <Image src={grupoMensch}
                alt='Logo Grupo Mensch'
                className={Style.menuMobile__container__logoBox__logo}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setModal(!modal);
                }}
              />
            </Link>

          </div>
          <nav className={Style.menuMobile__container__nav}>
            <ul className={Style.menuMobile__container__nav__list}>
              <li className={Style.menuMobile__container__nav__list__item}>
                <p onClick={() => setMarcas(!marcas)}>Marcas</p>
              </li>
              <li className={classNames({
                [Style.menuMobile__container__nav__list__item]: true,
                [Style.menuMobile__container__nav__list__item__page]: page === 'about',
              })}>
                <Link href={"/about"}>
                  <p>Sobre Nós</p>
                </Link>
              </li>
              <li className={classNames({
                [Style.menuMobile__container__nav__list__item]: true,
                [Style.menuMobile__container__nav__list__item__page]: page === 'social',
              })}>
                <Link href={"/social"}>
                  <p>Vem Ser Mesch</p>
                </Link>
              </li>
              <li className={Style.menuMobile__container__nav__list__item}>
                <Link href={'/#contatos__mensch'}>
                  <p>Fale conosco</p>
                </Link>
              </li>
            </ul>
          </nav>
          <Link href={'https://wa.me/5534996665871/?text=Olá venho do seu site e quero falar com você!'} target='_blank' rel='noopener noreferrer' title='Entre em contato via Whatsapp' >
            <Image
              src={whatsapp}
              alt="Whatsapp Logo"
              className={Style.menuMobile__container__whatsapp}
            />
          </Link>
          <button className={Style.menuMobile__container__closeBtn} onClick={() => {
            setModal(!modal);
          }}>
            X
          </button>
        </div>
      </div>
      <div className={classNames({
        [Style.menuMobile__container__marcas]: true,
        [Style.menuMobile__container__marcas__open]: modal && marcas && (windowWidth < 840),
      })}>
        <div className={Style.menuMobile__container__marcas__logoBox}>
          <Link href={"/energiasolar"} target='_top' title='Conheça a Mensch Energia Solar'>
            <Image src={solar} alt="Mesnch Solar Logo" />
          </Link>
          <Link href={"/"} title='Conheça a Mensch Health'>
            <Image src={health} alt='Mensch Health Logo' />
          </Link>
          {/* <Link href={"/"} title='Conheça a Mensch Instalar'>  */}
          <Image src={instalar} alt='MenschInstalar Logo' className={Style.img__breve} title='Em Breve!' />
          {/* </Link> */}
          {/* <Link href={"/"} title='Conheça a Mensch Instalar'>  */}
          <Image src={mind} alt='Mensch Mind Logo' className={Style.img__breve} title='Em Breve!' />
          {/* </Link> */}


        </div>
        <button className={Style.menuMobile__container__marcas__closeBtn} onClick={() => {
          setMarcas(!marcas);
        }}>
          X
        </button>

      </div>
      <div
        className={classNames({
          [Style.modal]: modal && (windowWidth < 840),
        })}
        onClick={() => {
          setModal(!modal);
          setMarcas(!marcas);
        }
        }
      />
    </>
  )
};

export default Menu;
