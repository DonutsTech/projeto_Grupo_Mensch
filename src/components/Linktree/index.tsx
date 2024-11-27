'use client'

import Image from 'next/image';
import Style from './Linktree.module.scss';
import Link from 'next/link';
import classNames from 'classnames';

import gps from './assets/local_icon.svg';
import emailIcon from './assets/email_icon.svg';
import wpp from './assets/wpp_icon.svg';
import insta from './assets/insta_icon.svg';
import face from './assets/face_icon.svg';
import linkedinIcon from './assets/linkedin_icon.svg';

interface Iprops {
  empresa: string;
  logo: string;
  tag: string;
  acesso: {
    texto: string;
    link: string;
  }[];
  email: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  linkedin: string;
}

const Linktree = ({ empresa, logo, tag, acesso, email, whatsapp, instagram, facebook, linkedin = '/' }: Iprops) => {

  return (
    <section className={Style.linktree} aria-label={`Links de acesso ao site ${empresa}`}>
      <div className={Style.linktree__container}>
        <Image
          src={logo}
          alt={`Logo da Empresa ${empresa}`}
          width={260}
          height={108}
          className={Style.linktree__container__logo}
        />
        <div className={Style.linktree__container__links}>
          {acesso.map((a, index) => (
            <div key={index} className={Style.linktree__container__links__acesso}>
              <p className={Style.linktree__container__links__acesso__texto}>
                {a.texto}
              </p>
              <Link href={a.link}
                target="_blank"
                rel="noopener"
                className={classNames({
                  [Style.linktree__container__links__acesso__link]: true,
                  [Style.linktree__container__links__acesso__link__grupo]: tag === 'grupo',
                  [Style.linktree__container__links__acesso__link__solar]: tag === 'solar',
                  [Style.linktree__container__links__acesso__link__health]: tag === 'health',
                  [Style.linktree__container__links__acesso__link__instalar]: tag === 'instalar',
                  [Style.linktree__container__links__acesso__link__mind]: tag === 'mind',
                })}
              >
                Clique aqui!
              </Link>
            </div>
          ))}
        </div>

        <div className={Style.linktree__container__contatos}>
          <h3 className={Style.linktree__container__contatos__titulo}>
            Fale Conosco:
          </h3>
          <div className={Style.linktree__container__contatos__links}>

            <Link 
              href={'https://maps.app.goo.gl/9Sm1SKBUT6cfn8Pd7'}
              target="_blank"
              rel="noopener"
              title='Venha nos visitar || Google Maps'
              className={Style.linktree__container__contatos__links__item}
            >
              <Image src={gps} alt='Localização' width={48} height={48} className={Style.linktree__container__contatos__links__item__icon} />
            </Link>

            <Link 
              href={email}
              target="_blank"
              rel="noopener"
              title='Envie um email || Email'
              className={Style.linktree__container__contatos__links__item}
            >
              <Image src={emailIcon} alt='Email Icon' width={48} height={48} className={Style.linktree__container__contatos__links__item__icon} />
            </Link>

            <Link 
              href={whatsapp}
              target="_blank"
              rel="noopener"
              title='Envie uma mensagem || Whatsapp'
              className={Style.linktree__container__contatos__links__item}
            >
              <Image src={wpp} alt='Whatsapp Icon' width={48} height={48} className={Style.linktree__container__contatos__links__item__icon} />
            </Link>

            <Link 
              href={instagram}
              target="_blank"
              rel="noopener"
              title='Siga-nos no Instagram || Instagram'
              className={Style.linktree__container__contatos__links__item}
            >
              <Image src={insta} alt='instagram Icon' width={48} height={48} className={Style.linktree__container__contatos__links__item__icon} />
            </Link>

            <Link 
              href={facebook}
              target="_blank"
              rel="noopener"
              title='Siga-nos no Facebook || Facebook'
              className={Style.linktree__container__contatos__links__item}
            >
              <Image src={face} alt='Facebook Icon' width={48} height={48} className={Style.linktree__container__contatos__links__item__icon} />
            </Link>

            <Link 
              href={linkedin}
              target="_blank"
              rel="noopener"
              title='Siga-nos no Linkedin || Linkedin'
              className={Style.linktree__container__contatos__links__item}
            >
              <Image src={linkedinIcon} alt='Linkedin Icon' width={48} height={48} className={Style.linktree__container__contatos__links__item__icon} />
            </Link>

          </div>
        </div>
      </div>
    </section>
  )
};

export default Linktree