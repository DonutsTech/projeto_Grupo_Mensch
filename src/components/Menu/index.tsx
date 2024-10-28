'use client';

import Image from 'next/image';
import Style from './Menu.module.scss';

import grupoMensch from './assets/grupo_mensch.svg';
import solar from './assets/mesch_solar.svg';
import health from './assets/mensch_health.svg';
import instalar from './assets/mensch_instalar.svg';
import treinamentos from './assets/mensch_treinamentos.svg';
import inteligencia from './assets/mensch_inteligencia.svg';
import wise from './assets/mensch_wise.svg';




import whatsapp from './assets/whatsapp.svg';
import Link from 'next/link';
import classNames from 'classnames';
import { useState } from 'react';

const Menu = () => {
  const [suspenso, setSuspenso] = useState(false);

  return (
    <>
      <div className={Style.menuDesk}>
        <Image
          src={grupoMensch}
          alt="Logo Grupo Mensch"
          className={Style.menuDesk__logoMenu}
          onClick={() => {
            window.scrollY = 0;
          }}
        />
        <nav className={Style.menuDesk__nav}>
          <ul className={Style.menuDesk__nav__list}>
            <li className={classNames({
              [Style.menuDesk__nav__list__item]: true,
              [Style.menuDesk__nav__list__item__active]: true,
            })}>
              <p onClick={() => setSuspenso(!suspenso)}>Marcas</p>

              <div className={Style.menuDesk__nav__list__item__dropdown}>
                <ul className={Style.menuDesk__nav__list__item__dropdown__list}>
                  <li>
                    <Link href={"/"} title='Conheça a Mensch Energia Solar'>
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
                      <Image src={instalar} alt="Instalar Logo" className={Style.img__breve} title='Em Breve!'/>
                    {/* </Link> */}
                  </li>
                  <li>
                      <Image src={treinamentos} alt="Treinamentos Logo" className={Style.img__breve} title='Em Breve!'/>
                  </li>
                  <li>
                    <Image src={inteligencia} alt='Inteligência Emocional Logo' className={Style.img__breve} title='Em Breve!'/>
                  </li>
                  <li>
                    <Image src={wise} alt='Wise Logo' className={Style.img__breve} title='Em Breve!'/>
                  </li>
                </ul>
              </div>
            </li>
            <li className={Style.menuDesk__nav__list__item}>
              <Link href={"/"}>
                <p>Sobre Nós</p>
              </Link>
            </li>
            <li className={Style.menuDesk__nav__list__item}>
              <Link href={"/"}>
                <p>Vem Ser Mesch</p>
              </Link>
            </li>
            <li className={Style.menuDesk__nav__list__item}>
              <p>Fale conosco</p>
            </li>
          </ul>
          <Link href={"/"}>
            <Image
              src={whatsapp}
              alt="Whatsapp Logo"
              className={Style.menuDesk__nav__whatsapp}
            />
          </Link>
        </nav>
      </div>
    </>
  )
};

export default Menu;
