'use client';

import classNames from 'classnames';
import Style from './Contatos.module.scss';

import local from './assets/local_icon.svg';
import email from './assets/email_icon.svg';
import wpp from './assets/wpp_icon.svg';
import insta from './assets/insta_icon.svg';
import face from './assets/face_icon.svg';
import linkedin from './assets/linkedin_icon.svg';



import Image from 'next/image';
import Link from 'next/link';

const Contatos = () => {

  return (
    <section className={Style.contatos} id='contatos__mensch' aria-label='Contatos do Grupo Mensch'>
      <h2 className={Style.contatos__titulo}>
        Fale Conosco
      </h2>

      <div className={Style.contatos__content}>

        <form className={Style.contatos__content__form} >
          <label htmlFor='nome' aria-label='Digite o seu nome' />
          <input
            type='text'
            className={classNames({
              [Style.contatos__content__form__input]: true,
              [Style.contatos__content__form__input__nome]: true,
            })}
            id='nome'
            placeholder='Nome'
          />
          <label htmlFor='email' aria-label='Digite o seu email' />
          <input
            type='email'
            className={classNames({
              [Style.contatos__content__form__input]: true,
              [Style.contatos__content__form__input__email]: true,
            })}
            id='email'
            placeholder='Digite o seu melhor e-mail'
          />
          <label htmlFor='telefone' aria-label='Digite o seu telefone' />
          <input
            type='text'
            className={classNames({
              [Style.contatos__content__form__input]: true,
              [Style.contatos__content__form__input__telefone]: true,
            })}
            id='telefone'
            placeholder='Telefone'
          />
          <label htmlFor='mensagem' aria-label='Digite sua mensagem' />
          <textarea
            className={classNames({
              [Style.contatos__content__form__input]: true,
              [Style.contatos__content__form__input__mensagem]: true,
            })}
            id='mensagem'
            placeholder='Digite sua mensagem'
          />
          <button className={Style.contatos__content__form__btn} type='submit'>Enviar</button>
        </form>

        <div className={Style.contatos__content__redes}>
          <p className={Style.contatos__content__redes__texto}>
            Junte-se ao Grupo Mensch e impulsione a sua jornada. Estamos prontos para novas parcerias e oportunidades. Entre em contato conosco e descubra como podemos colaborar para o sucesso conjunto.
          </p>

          <div className={Style.contatos__content__redes__dados}>

            <div className={classNames({
              [Style.contatos__content__redes__dados__item]: true,
              [Style.contatos__content__redes__dados__item_local]: true,
            })}>
              <Link href={'https://maps.app.goo.gl/9Sm1SKBUT6cfn8Pd7'} target='_blank' rel='noopener noreferrer' title='Rota até Nós - GPS' >
                <Image src={local} alt='Local' height={48} />
              </Link>
              <p>R. Vinte e Quatro, 897 - Centro, Ituiutaba - MG</p>
            </div>

            <div className={classNames({
              [Style.contatos__content__redes__dados__item]: true,
              [Style.contatos__content__redes__dados__item_email]: true,
            })}>
              <Link href={'mailto:contato@grupomensch.com.br'} target='_blank' rel='noopener noreferrer' title='Envie um email para contato@grupomensch.com.br' >
                <Image src={email} alt='Email' height={48} />
              </Link>
              <p>contato@grupomensch.com.br</p>
            </div>

            <div className={classNames({
              [Style.contatos__content__redes__dados__item]: true,
              [Style.contatos__content__redes__dados__item_telefone]: true,
            })}>
              <Link href={'https://wa.me/5534996665871/?text=Olá venho do seu site e quero falar com você!'} target='_blank' rel='noopener noreferrer' title='Entre em contato via Whatsapp' >
                <Image src={wpp} alt='whatsapp' height={48} />
              </Link>
              <p>(34) 9.9666-5871</p>
            </div>

            <div className={classNames({
              [Style.contatos__content__redes__dados__item]: true,
              [Style.contatos__content__redes__dados__item_instagram]: true,
            })}>
              <Link href={'https://www.instagram.com/grupo.mensch/'} target='_blank' rel='noopener noreferrer' title='Acompanhe o Grupo Mensch no Instagram' >
                <Image src={insta} alt='instagram' height={48} />
              </Link>
              <p>@grupo.mensch</p>
            </div>

            <div className={classNames({
              [Style.contatos__content__redes__dados__item]: true,
              [Style.contatos__content__redes__dados__item_instagram]: true,
            })}>
              <Link href={'https://www.facebook.com/profile.php?id=100091541775500&locale=pt_BR'} target='_blank' rel='noopener noreferrer' title='Acompanhe o Grupo Mensch no Facebook' >
                <Image src={face} alt='facebook' height={48} />
              </Link>
              <p>@grupo.mensch</p>
            </div>

            <div className={classNames({
              [Style.contatos__content__redes__dados__item]: true,
              [Style.contatos__content__redes__dados__item_linkedin]: true,
            })}>
              <Link href={'https://www.linkedin.com/company/menschsolar/posts/?feedView=all'} target='_blank' rel='noopener noreferrer' title='siga o Grupo Mensch no Linkedin' >
                <Image src={linkedin} alt='linkedin' height={48} />
              </Link>
              <p>@grupo.mensch</p>
            </div>

          </div>

        </div>


      </div>

      <div className={Style.contatos__dados}>

        <div className={classNames({
          [Style.contatos__dados__item]: true,
          [Style.contatos__dados__item_local]: true,
        })}>
          <Link href={'https://maps.app.goo.gl/9Sm1SKBUT6cfn8Pd7'} target='_blank' rel='noopener noreferrer'>
            <Image src={local} alt='Local' height={48} />
          </Link>
          <p>R. Vinte e Quatro, 897 - Centro, Ituiutaba - MG</p>
        </div>

        <div className={classNames({
          [Style.contatos__dados__item]: true,
          [Style.contatos__dados__item_email]: true,
        })}>
          <Link href={'mailto:contato@grupomensch.com.br'} target='_blank' rel='noopener noreferrer'>
            <Image src={email} alt='Email' height={48} />
          </Link>
          <p>contato@grupomensch.com.br</p>
        </div>

        <div className={classNames({
          [Style.contatos__dados__item]: true,
          [Style.contatos__dados__item_telefone]: true,
        })}>
          <Link href={'https://wa.me/5534996665871/?text=Olá venho do seu site e quero falar com você!'} target='_blank' rel='noopener noreferrer'>
            <Image src={wpp} alt='Whatsapp' height={48} />
          </Link>
          <p>(34) 9.9666-5871</p>
        </div>

        <div className={classNames({
          [Style.contatos__dados__item]: true,
          [Style.contatos__dados__item_instagram]: true,
        })}>
          <Link href={'https://www.instagram.com/grupo.mensch/'} target='_blank' rel='noopener noreferrer'>
            <Image src={insta} alt='Instagram' height={48} />
          </Link>
          <p>@grupo.mensch</p>
        </div>

        <div className={classNames({
          [Style.contatos__dados__item]: true,
          [Style.contatos__dados__item_instagram]: true,
        })}>
          <Link href={'https://www.facebook.com/profile.php?id=100091541775500&locale=pt_BR'} target='_blank' rel='noopener noreferrer'>
            <Image src={face} alt='facebook' height={48} />
          </Link>
          <p>@grupo.mensch</p>
        </div>

        <div className={classNames({
              [Style.contatos__dados__item]: true,
              [Style.contatos__dados__item_linkedin]: true,
            })}>
              <Link href={'https://www.linkedin.com/company/menschsolar/posts/?feedView=all'} target='_blank' rel='noopener noreferrer'>
                <Image src={linkedin} alt='linkedin' height={48} />
              </Link>
              <p>@grupo.mensch</p>
            </div>

      </div>
    </section>
  )
};

export default Contatos;
