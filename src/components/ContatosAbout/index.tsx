
import Style from './ContatosAbout.module.scss';

import gps from './assets/local_icon.svg';
import email from './assets/email_icon.svg';
import wpp from './assets/wpp_icon.svg';
import insta from './assets/insta_icon.svg';
import face from './assets/face_icon.svg';
import linkedin from './assets/linkedin_icon.svg';

import Image from 'next/image';
import Link from 'next/link';


const ContatosAbout = () => {

  return (
    <section className={Style.contatos} aria-label='Contatos'>
      <div className={Style.contatos__head}>
        <h2 className={Style.contatos__head__titulo}>Entre em contato e <span>Transforme </span>seu <span>futuro</span>.</h2>
        <p className={Style.contatos__head__paragrafo}>Contate-nos! Estamos aqui para ajudar seu negócio ou residência a alcançar eficiência e responsabilidade. Descubra como podemos ajudar.</p>
      </div>
      <div className={Style.contatos__content}>

        <div className={Style.contatos__content__item}>
          <Link href={'https://maps.app.goo.gl/9Sm1SKBUT6cfn8Pd7'} target='_blank' rel='noopener noreferrer' title='Rota até Nós - GPS' >
            <Image src={gps} alt='Local' height={48} />
          </Link>
          <p>R. Vinte e Quatro, 897 - Centro, Ituiutaba - MG</p>
        </div>

        <div className={Style.contatos__content__item}>
          <Link href={'mailto:contato@grupomensch.com.br'} target='_blank' rel='noopener noreferrer' title='Envie um email para contato@grupomensch.com.br' >
            <Image src={email} alt='Email' height={48} />
          </Link>
          <p>contato@grupomensch.com.br</p>
        </div>

        <div className={Style.contatos__content__item}>
          <Link href={'https://wa.me/5534996665871/?text=Olá venho do seu site e quero falar com você!'} target='_blank' rel='noopener noreferrer' title='Entre em contato via Whatsapp' >
            <Image src={wpp} alt='whatsapp' height={48} />
          </Link>
          <p>(34) 9.9666-5871</p>
        </div>

        <div className={Style.contatos__content__item}>
          <Link href={'https://www.instagram.com/grupo.mensch/'} target='_blank' rel='noopener noreferrer' title='Acompanhe o Grupo Mensch no Instagram' >
            <Image src={insta} alt='instagram' height={48} />
          </Link>
          <p>@grupo.mensch</p>
        </div>

        <div className={Style.contatos__content__item}>
          <Link href={'https://www.facebook.com/profile.php?id=100091541775500&locale=pt_BR'} target='_blank' rel='noopener noreferrer' title='Acompanhe o Grupo Mensch no Facebook' >
            <Image src={face} alt='facebook' height={48} />
          </Link>
          <p>@grupo.mensch</p>
        </div>

        <div className={Style.contatos__content__item}>
          <Link href={'https://www.linkedin.com/company/menschsolar/posts/?feedView=all'} target='_blank' rel='noopener noreferrer' title='siga o Grupo Mensch no Linkedin' >
            <Image src={linkedin} alt='linkedin' height={48} />
          </Link>
          <p>@grupo.mensch</p>
        </div>
      </div>
      <Link href={"/#contatos__mensch"} className={Style.contatos__btn} > 
        Entre em Contato
      </Link>
    </section>
  )
};

export default ContatosAbout;
