'use client';

import Image from 'next/image';
import Style from './Footer.module.scss';
import mensch from './logo_grupoMensch_white.svg';
import donuts from './donuts_icon_original.svg';
import Link from 'next/link';

const Footer = () => {

  return (
    <footer className={Style.footer}>
      <div className={Style.footer__box} >
        <div className={Style.footer__box__copy} >
          <Link href={'/'} className={Style.footer__box__copy__link} >
            <Image src={mensch} alt="Grupo Mensch" className={Style.footer__box__copy__link__logo} />
          </Link>
          <p className={Style.footer__box__copy__text} >Todos os direitos reservados || &copy; 2025 Grupo Mensch</p>
        </div>
        <div className={Style.footer__box__donuts} >

          <Link href={'https://www.donutstech.com.br/'} target='_blank' className={Style.footer__box__donuts__link} >
            <Image src={donuts} alt="Donutstech" className={Style.footer__box__donuts__link__logo} />
          </Link>
          <p className={Style.footer__box__donuts__text} > Feito com muito amor e açucar</p>
        </div>
      </div>
      <div className={Style.footer__detalhe} />
    </footer>
  )
};

export default Footer;
