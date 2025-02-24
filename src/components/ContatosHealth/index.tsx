'use client';

import classNames from 'classnames';
import Style from './ContatosHealth.module.scss';

import local from './assets/local_icon.svg';
import email from './assets/email_icon.svg';
import wpp from './assets/wpp_icon.svg';
import insta from './assets/insta_icon.svg';
import face from './assets/face_icon.svg';
import linkedin from './assets/linkedin_icon.svg';
import Image from 'next/image';
import Link from 'next/link';
import { FormContatoMensch } from '@/types';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import { phone } from '@/util/mask';
import { validation } from '@/util/validation';
import { mensagemGrupoMensch } from '@/util/mensagem';

const ContatosHealth = () => {
  const [form, setForm] = useState({} as FormContatoMensch)
  const [mensagem, setMensagem] = useState<string>('')

  useEffect(() => {
    setTimeout(() => {
      if (mensagem) {
        setMensagem('')
      }
    }, 10000);
  }, [mensagem]);

  const handleFormChange = useCallback(
    (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (e.currentTarget.name === 'telefone') {
        e = phone(e)
      }
      setForm({
        ...form,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [form],
  );

  const enviarDados = async (formDados: FormContatoMensch) => {
    try {
      const response = await fetch('/app/api/formulario/route.ts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'energiasolar@grupomensch.com.br',
          subject: ' Mensagem Recebida pelo site - Contato do Mensch Healt',
          text: mensagemGrupoMensch(formDados, 'Mensch Healt'),
          tel: `${process.env.TEL_HEALT}`,
        }),
      });

      const data = await response.json();

      if (data.mensagem === 'Mensagem não enviada. Contate-nos por telefone.') {
        throw new Error('Mensagem não enviada. Contate-nos por telefone.')
      }

      if (!(data.mensagem === 'Mensagem não enviada. Contate-nos por telefone.')) {
        setForm({} as FormContatoMensch)
        setMensagem(data.mensagem)
      }

    } catch (error) {
      console.error(error)
      setMensagem('Mensagem não enviada. Contate-nos por telefone.')
    }
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const FormData: FormContatoMensch = {
      nome: (e.currentTarget.elements.namedItem('nome') as HTMLInputElement).value,
      email:  (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value,
      telefone:  (e.currentTarget.elements.namedItem('telefone') as HTMLInputElement).value,
      mensagem:  (e.currentTarget.elements.namedItem('mensagem') as HTMLInputElement).value,
    }

    const mensagem = validation(FormData)

    if (!(mensagem === '')) {
      setMensagem(mensagem)
    } else {
      enviarDados(FormData)
    }

  }

  return (
    <section className={Style.contatos} id='contatos__health' aria-label='Contatos da Mensch Health'>
      <h2 className={Style.contatos__titulo}>
        Fale Conosco
      </h2>

      <div className={Style.contatos__content}>

        <form className={Style.contatos__content__form} onSubmit={onSubmit}>
          <label htmlFor='nome' aria-label='Digite o seu nome' />
          <input
            type='text'
            className={classNames({
              [Style.contatos__content__form__input]: true,
              [Style.contatos__content__form__input__nome]: true,
            })}
            id='nome'
            placeholder='Nome'
            name='nome'
            onChange={handleFormChange}
            value={form.nome === undefined ? '' : form.nome}
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
            name='email'
            onChange={handleFormChange}
            value={form.email === undefined ? '' : form.email}
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
            name='telefone'
            onChange={handleFormChange}
            minLength={13}
            value={form.telefone === undefined ? '' : form.telefone}
          />
          <label htmlFor='mensagem' aria-label='Digite sua mensagem' />
          <textarea
            className={classNames({
              [Style.contatos__content__form__input]: true,
              [Style.contatos__content__form__input__mensagem]: true,
            })}
            id='mensagem'
            name='mensagem'
            placeholder='Digite sua mensagem'
            onChange={handleFormChange}
            value={form.mensagem === undefined ? '' : form.mensagem}
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
              <Link href={'mailto:health@grupomensch.com.br'} target='_blank' rel='noopener noreferrer' title='Envie um email para health@grupomensch.com.br' >
                <Image src={email} alt='Email' height={48} />
              </Link>
              <p>health@grupomensch.com.br</p>
            </div>

            <div className={classNames({
              [Style.contatos__content__redes__dados__item]: true,
              [Style.contatos__content__redes__dados__item_telefone]: true,
            })}>
              <Link href={'https://wa.me/5534996968654/?text=Olá venho do seu site e quero falar com você!'} target='_blank' rel='noopener noreferrer' title='Entre em contato via Whatsapp' >
                <Image src={wpp} alt='whatsapp' height={48} />
              </Link>
              <p>(34) 9.9696-8654</p>
            </div>

            <div className={classNames({
              [Style.contatos__content__redes__dados__item]: true,
              [Style.contatos__content__redes__dados__item_instagram]: true,
            })}>
              <Link href={'https://www.instagram.com/mensch.health/'} target='_blank' rel='noopener noreferrer' title='Acompanhe a Mensch Health no Instagram' >
                <Image src={insta} alt='instagram' height={48} />
              </Link>
              <p>@mensch.health</p>
            </div>

            <div className={classNames({
              [Style.contatos__content__redes__dados__item]: true,
              [Style.contatos__content__redes__dados__item_instagram]: true,
            })}>
              <Link href={'https://www.facebook.com/menschhealth'} target='_blank' rel='noopener noreferrer' title='Acompanhe o Grupo Mensch no Facebook' >
                <Image src={face} alt='facebook' height={48} />
              </Link>
              <p>@mensch.health</p>
            </div>

            <div className={classNames({
              [Style.contatos__content__redes__dados__item]: true,
              [Style.contatos__content__redes__dados__item_linkedin]: true,
            })}>
              <Link href={'https://www.linkedin.com/company/mensch-health/'} target='_blank' rel='noopener noreferrer' title='siga o Grupo Mensch no Linkedin' >
                <Image src={linkedin} alt='linkedin' height={48} />
              </Link>
              <p>Mensch Health</p>
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
          <Link href={'mailto:health@grupomensch.com.br'} target='_blank' rel='noopener noreferrer'>
            <Image src={email} alt='Email' height={48} />
          </Link>
          <p>health@grupomensch.com.br</p>
        </div>

        <div className={classNames({
          [Style.contatos__dados__item]: true,
          [Style.contatos__dados__item_telefone]: true,
        })}>
          <Link href={'https://wa.me/5534996968654/?text=Olá venho do seu site e quero falar com você!'} target='_blank' rel='noopener noreferrer'>
            <Image src={wpp} alt='Whatsapp' height={48} />
          </Link>
          <p>(34) 9.9696-8654</p>
        </div>

        <div className={classNames({
          [Style.contatos__dados__item]: true,
          [Style.contatos__dados__item_instagram]: true,
        })}>
          <Link href={'https://www.instagram.com/mensch.health/'} target='_blank' rel='noopener noreferrer'>
            <Image src={insta} alt='Instagram' height={48} />
          </Link>
          <p>@mensch.health</p>
        </div>

        <div className={classNames({
          [Style.contatos__dados__item]: true,
          [Style.contatos__dados__item_instagram]: true,
        })}>
          <Link href={'https://www.facebook.com/menschhealth'} target='_blank' rel='noopener noreferrer'>
            <Image src={face} alt='facebook' height={48} />
          </Link>
          <p>@mensch.health</p>
        </div>

        <div className={classNames({
              [Style.contatos__dados__item]: true,
              [Style.contatos__dados__item_linkedin]: true,
            })}>
              <Link href={'https://www.linkedin.com/company/mensch-health/'} target='_blank' rel='noopener noreferrer'>
                <Image src={linkedin} alt='linkedin' height={48} />
              </Link>
              <p>Mensch Health</p>
            </div>

      </div>
    </section>
  )
};

export default ContatosHealth;
