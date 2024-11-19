'use client';

import Scroll from 'react-scroll';
import Image from 'next/image';
import Style from './MenuHealth.module.scss';

import health from './assets/mensch_health_black.svg';
import menuBtn from './assets/mobile_health.svg';

import whatsapp from './assets/whatsapp.svg';
import Link from 'next/link';
import classNames from 'classnames';
import { useEffect, useState } from 'react';


const MenuHealth = () => {
  // const [suspenso, setSuspenso] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [modal, setModal] = useState(false);
  // const [marcas, setMarcas] = useState(false);

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
      // setSuspenso(false)
      setModal(false);
    }
    else if (windowWidth > 840) {
      // setSuspenso(false);
      setModal(false);
    }
  }, [windowWidth]);



  return (
    <>
      <div className={Style.menuDesk}>
        <Image
          src={health}
          alt="Logo Grupo Mensch"
          className={Style.menuDesk__logoMenu}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
        <nav className={Style.menuDesk__nav}>
          <ul className={Style.menuDesk__nav__list}>
            <li className={classNames({
              [Style.menuDesk__nav__list__item]: true,
            })}>
              <Link href={"#camilla"}
                onClick={(e) => {
                  e.preventDefault();
                  Scroll.scroller.scrollTo('camilla', { duration: 500, delay: 0, smooth: true });
                }}
              >
                <p>Camilla Vieira</p>
              </Link>
            </li>
            <li className={classNames({
              [Style.menuDesk__nav__list__item]: true,
            })}>
              <Link href={"#dicas"}
                onClick={(e) => {
                  e.preventDefault();
                  Scroll.scroller.scrollTo('dicas', { duration: 500, delay: 0, smooth: true });
                }}
              >
                <p>Saúde</p>
              </Link>
            </li>
            <li className={classNames({
              [Style.menuDesk__nav__list__item]: true,
            })}>
              <Link href={"#receitas"}
                onClick={(e) => {
                  e.preventDefault();
                  Scroll.scroller.scrollTo('receitas', { duration: 500, delay: 0, smooth: true });
                }}
              >
                <p>Receitas</p>
              </Link>
            </li>
            <li
              className={Style.menuDesk__nav__list__item} >
              <Link
                href={"/#contatos__health"}
                onClick={(e) => {
                  e.preventDefault();
                  Scroll.scroller.scrollTo('contatos__health', { duration: 500, delay: 0, smooth: true });
                }}
              >
                <p>Fale conosco</p>
              </Link>
            </li>
          </ul>
          <Link href={'https://wa.me/5534996968654/?text=Olá venho da página Mensch Health Solar e quero falar com você!'} target='_blank' rel='noopener noreferrer' title='Entre em contato via Whatsapp' >
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
          }}
        />
        <div className={classNames({
          [Style.menuMobile__container]: true,
          [Style.menuMobile__container__open]: modal && (windowWidth < 840),
        })}
        >
          <div className={Style.menuMobile__container__logoBox}>
            <Link href={" "}>
              <Image src={health}
                alt='Logo Grupo Mensch'
                className={Style.menuMobile__container__logoBox__logo}
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setModal(!modal);
                }}
              />
            </Link>
          </div>
          <nav className={Style.menuMobile__container__nav}>
            <ul className={Style.menuMobile__container__nav__list}>
              <li className={classNames({
                [Style.menuMobile__container__nav__list__item]: true,
              })}>
                <Link href={"#camilla"}
                  onClick={(e) => {
                    e.preventDefault();
                    Scroll.scroller.scrollTo('camilla', { duration: 500, delay: 0, smooth: true });
                  }}
                >
                  <p>Camilla Vieira</p>
                </Link>
              </li>
              <li className={classNames({
                [Style.menuMobile__container__nav__list__item]: true,
              })}>
                <Link href={"#dicas"}
                  onClick={(e) => {
                    e.preventDefault();
                    Scroll.scroller.scrollTo('dicas', { duration: 500, delay: 0, smooth: true });
                  }} >
                  <p>Saúde</p>
                </Link>
              </li>
              <li className={classNames({
                [Style.menuMobile__container__nav__list__item]: true,
              })}>
                <Link href={"#receitas"}
                  onClick={(e) => {
                    e.preventDefault();
                    Scroll.scroller.scrollTo('receitas', { duration: 500, delay: 0, smooth: true });
                  }}
                >
                  <p>Receitas</p>
                </Link>
              </li>
              <li className={Style.menuMobile__container__nav__list__item}>
                <Link 
                href={"/#contatos__health"}
                onClick={(e) => {
                  e.preventDefault();
                  Scroll.scroller.scrollTo('contatos__health', { duration: 500, delay: 0, smooth: true });
                }}
                >
                  <p>Fale conosco</p>
                </Link>
              </li>
            </ul>
          </nav>
          <Link href={'https://wa.me/5534996968654/?text=Olá venho da página Mensch Health Solar e quero falar com você!'} target='_blank' rel='noopener noreferrer' title='Entre em contato via Whatsapp' >
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
      <div
        className={classNames({
          [Style.modal]: modal && (windowWidth < 840),
        })}
        onClick={() => {
          setModal(!modal);
        }
        }
      />
    </>
  )
};

export default MenuHealth;
