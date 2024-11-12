"use client";
import Style from './CTASolar.module.scss';
import Image from 'next/image';
import bg from './assets/familia2.jpg';
import mensch from './assets/grupo_mensch.png';
import solar from './assets/mesch_solar.png';
import Link from 'next/link';
import Modal from 'react-modal';
import { useState } from 'react';
//import { FormEvent, useCallback, useState } from 'react';
//import { FormSimulacaoSolar } from '@/types';
//import { cep, currency, phone } from '@/util/mask';

const CTASolar = () => {
  const [openImage, setOpenImage] = useState<boolean>(false);
  //const [form, setForm] = useState({} as FormSimulacaoSolar)

  const toggleModal = () => {
    setOpenImage(!openImage);
  };

  /*
  const handleFormChange = useCallback(
    (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (e.currentTarget.name === 'telefone') {
        e = phone(e)
      }

      if (e.currentTarget.name === 'valor') {
        e = currency(e)
      }

      if (e.currentTarget.name === 'cep') {
        e = cep(e)
      }

      setForm({
        ...form,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [form],
  );
*/
  return (
    <section className={Style.cta} aria-label="Veja Quanto Você Pode Ganhar com Energia Solar" id="cta_solar">
      <h2 className={Style.cta__titulo}>
        Veja Quanto Você Pode <span>Ganhar</span> <br />com <span>Energia Solar</span>
      </h2>
      <p className={Style.cta__texto}>
        Mais de 700 famílias já transformaram seu sonho de economizar em realidade colocando energia solar com a Mensch Energia Solar. Verifique essa viabilidade para você também.
      </p>
      <div className={Style.cta__container}>
        <Image src={bg} alt="Familia" className={Style.cta__container__img} />
        <div className={Style.cta__container__box}>
          <div className={Style.cta__container__box__textos}>
            <h3 className={Style.cta__container__box__textos__titulo}>
              DEIXE O <span>SOL</span> PAGAR A <br />SUA CONTA DE <span>ENERGIA</span>!
            </h3>
            <ul className={Style.cta__container__box__textos__lista}>
              <li className={Style.cta__container__box__textos__lista__item}>
                <span>◆</span> Economize até 90% na conta de luz e reduza seus gastos mensais.
              </li>
              <li className={Style.cta__container__box__textos__lista__item}>
                <span>◆</span> Aumente o valor da sua propriedade com uma fonte de energia limpa e renovável.
              </li>
              <li className={Style.cta__container__box__textos__lista__item}>
                <span>◆</span> Reduza custos operacionais e aumente a competitividade do seu negócio.
              </li>
              <li className={Style.cta__container__box__textos__lista__item}>
                <span>◆</span> Melhore sua imagem empresarial com uma opção sustentável e inovadora.
              </li>
              <li className={Style.cta__container__box__textos__lista__item}>
                <span>◆</span> Alimente sua propriedade rural com energia independente e confiável.
              </li>
              <li className={Style.cta__container__box__textos__lista__item}>
                <span>◆</span> Economize recursos financeiros com energia solar e invista na expansão da sua produção agrícola.
              </li>
            </ul>
          </div>
          <div className={Style.cta__container__box__2}>
            <video autoPlay muted loop className={Style.cta__container__box__2__video}>
              <source src="/assets/videos/video_simule.mp4" type="video/mp4" />
            </video>
            <button className={Style.cta__container__box__2__btn} onClick={toggleModal}>
              Simular os custos
            </button>
          </div>
        </div>
      </div>

      <div className={Style.cta__financiamento}>
        <h2 className={Style.cta__financiamento__titulo}>
          Você pode <span>financiar</span> até <span>100%</span> do seu sistema de <br /><span>Energia Solar</span>.
        </h2>
        <div className={Style.cta__financiamento__bancos}>

        </div>

        <p className={Style.cta__financiamento__paragrafo}>
          Financiamento facilitado para o seu projeto de energia solar! Nossa parceria com os principais bancos e financeiras oferece condições exclusivas: financiamento de até 100% do projeto, prazos flexíveis de pagamento, taxas de juros competitivas e aprovação rápida e simples. Não perca essa oportunidade de investir em energia limpa, reduzir sua conta de luz e contribuir para o meio ambiente. Entre em contato conosco para saber mais e iniciar seu projeto de energia solar com condições vantajosas. Nossa equipe especializada está à disposição para orientá-lo.
        </p>

        <h3 className={Style.cta__financiamento__subtitulo}>
          Nossa equipe está de prontidão para te Servir e Transformar o seu sonho em realidade e o que antes era uma despesa em energia, hoje se tornar em mais Liberdade Financeira!
        </h3>
        <div className={Style.cta__financiamento__logos}>
          <Link href={"/"}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          >
            <Image src={solar} alt="Mensh Energia Solar" className={Style.cta__financiamento__logos__img} />
          </Link>
          <Link href={"/"}
            target='_blank'
            rel='noopener noreferrer'
            title='Grupo Mensh'
          >
          <Image src={mensch} alt="Mensh Energia Solar" className={Style.cta__financiamento__logos__img} />
          </Link>
        </div>
      </div>
      <Modal
        contentLabel='ModalImage'
        isOpen={openImage}
        onRequestClose={toggleModal}
        className={Style.modal}
        style={{
          overlay: {
            backgroundColor: 'rgba(26, 34, 40, 0.8)',
            zIndex: '3',
          },
        }}
      >
        <button type='button' onClick={toggleModal}>x</button>
        <label htmlFor='nome' aria-label='Digite o seu nome' />
          <input
            type='text'
            id='nome'
            name='nome'
            placeholder='Nome'
            required

          />
        <label htmlFor='telefone' aria-label='Digite o seu telefone' />
          <input
            type='text'
            id='telefone'
            name='telefone'
            placeholder='Telefone'
            required
            minLength={13}
          />
        <label htmlFor='CEP' aria-label='Digite o seu CEP' />
          <input
            type='text'
            id='CEP'
            name='cep'
            placeholder='CEP'
            required
          />
        <label htmlFor='valor' aria-label='Digite o seu valor de conta' />
          <input
            type='text'
            id='valor'
            name='valor'
            placeholder='Valor da Conta De Energia'
            required
          />
      </Modal>
    </section>
  )
};

export default CTASolar;
