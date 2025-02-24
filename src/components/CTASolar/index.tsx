"use client";
import Style from './CTASolar.module.scss';
import Image from 'next/image';
import bg from './assets/familia2.jpg';
import mensch from './assets/grupo_mensch.png';
import solar from './assets/mesch_solar.png';
import Link from 'next/link';
import Modal from 'react-modal';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import { Endereco, FormSimulacaoSolar, Tabela } from '@/types';
import { cep, currency, phone } from '@/util/mask';
import SwiperBancos from '../SwiperBancos';
import { chamarNumero, validationModal } from '@/util/validation';
import { mensagemMenschSolarCalcular } from '@/util/mensagem';
import tabela from '@/util/tabelaSolar.json';

import investimento from './assets/investimento.svg';
import placas from './assets/placa.svg';
import retorno from './assets/retorno.svg';
import classNames from 'classnames';
import Scroll from 'react-scroll';

const CTASolar = () => {
  const [openImage, setOpenImage] = useState<boolean>(false);
  const [form, setForm] = useState({} as FormSimulacaoSolar);
  const [mensagem, setMensagem] = useState<string>('');
  const [cliente, setCliente] = useState<string>("");
  const [conta, setConta] = useState<number>(0);
  const [informacao, setInformacao] = useState<Tabela | null>(null);

  useEffect(() => {
    const currentHash = window.location.href.split('#')[1];
    if (currentHash === 'cta_solar') {
      setOpenImage(true)
    }
  }, []);

  const toggleModal = () => {
    setOpenImage(!openImage);
    setForm({} as FormSimulacaoSolar)
  };

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

  const endereco = async (cep: string) => {
    const response = await fetch('/app/api/formulario/route.ts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cep
      }),
    });

    const data = await response.json()

    return data;
  }

  const enviarDados = async (dadosCep: Endereco, dadosForm: FormSimulacaoSolar) => {
    try {
      const response = await fetch('/app/api/formulario/route.ts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'energiasolar@grupomensch.com.br',
          subject: ' Mensagem Recebida pelo site - Contato do Grupo Mensch Solar',
          text: `${mensagemMenschSolarCalcular(dadosCep, dadosForm)}`,
          tel: `${process.env.TEL_SOLAR}`,
        }),
      });

      const data = await response.json();

      if (data.mensagem === 'Mensagem não enviada. Contate-nos por telefone.') {
        throw new Error('Mensagem não enviada. Contate-nos por telefone.')
      }

      if (!(data.mensagem === 'Mensagem não enviada. Contate-nos por telefone.')) {
        setMensagem(data.mensagem)
        setForm({} as FormSimulacaoSolar)
      }

    } catch (error) {
      console.error(error)
      setMensagem('Mensagem não enviada. Contate-nos por telefone.')
    }
  }



  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData: FormSimulacaoSolar = {
      nome: (e.currentTarget.elements.namedItem('nome') as HTMLInputElement).value,
      telefone: (e.currentTarget.elements.namedItem('telefone') as HTMLInputElement).value,
      cep: (e.currentTarget.elements.namedItem('cep') as HTMLInputElement).value,
      valor: (e.currentTarget.elements.namedItem('valor') as HTMLInputElement).value,
    }

    const valorLimpo = formData.valor.replace(/[^0-9.,]/g, '')
      .replace(/\./g, '')
      .replace(',', '.');


    setConta(parseFloat(valorLimpo));
    setCliente(formData.nome.split(' ')[0]);
    setInformacao(chamarNumero(tabela, (parseFloat(valorLimpo) / 1.32275)))

    const cep = await endereco(formData.cep)

    if (cep && 'mensagem' in cep && cep.mensagem === 'cep inválido') {
      setMensagem(cep.mensagem)
    } else {
      const mensagem = validationModal(formData)

      if (!(mensagem === '')) {
        setMensagem(mensagem)
      } else {
        enviarDados(cep, formData)
      }

    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (mensagem) {
        setMensagem('')
      }
    }, 10000);
  }, [mensagem]);

  return (
    <section className={Style.cta} aria-label="Veja Quanto Você Pode Ganhar com Energia Solar" id="cta_solar">
      <h2 className={Style.cta__titulo}>
        Veja Quanto Você Pode <span>Ganhar</span> <br />com <span>Energia Solar</span>
      </h2>
      <p className={Style.cta__texto}>
        Mais de 700 famílias já transformaram seu sonho de economizar em realidade colocando energia solar com a Mensch Energia Solar. Verifique essa viabilidade para você também.
      </p>
      <div className={Style.cta__container} id='cta_solar'>
        <Image src={bg} alt="Familia" className={Style.cta__container__img} />
        <div className={Style.cta__container__box}>
          <div className={Style.cta__container__box__textos}>
            <h3 className={Style.cta__container__box__textos__titulo}>
              DEIXE O <span>SOL</span> PAGAR A <br />SUA CONTA DE <span>ENERGIA</span>!
            </h3>
            <ul className={Style.cta__container__box__textos__lista}>
              <li className={Style.cta__container__box__textos__lista__item}>
                <span>◆</span> Economize até 92% na conta de luz e reduza seus gastos mensais.
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
            <video playsInline autoPlay muted loop className={Style.cta__container__box__2__video}>
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
          <SwiperBancos />
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
        ariaHideApp={false}
        onRequestClose={toggleModal}
        className={Style.modal}
        style={{
          overlay: {
            backgroundColor: 'rgba(26, 34, 40, 0.8)',
            zIndex: '30',
          },
        }}
      >
        <button type='button'
          onClick={() => {
            toggleModal();
            setConta(0);
            setCliente('');
            setInformacao(null);
          }}
          className={Style.modal__btn}
        >
          x
        </button>

        {(conta > 0 && cliente.length > 0) ?

          conta < 220 ?
            (
              <div className={Style.modal__boxMenor}>
                <div className={Style.modal__boxMenor__cabecalho}>
                  <h2 className={Style.modal__boxMenor__cabecalho__titulo}>Olá <span>{cliente}</span>!</h2>
                  <p className={Style.modal__boxMenor__cabecalho__texto}>O valor de conta de energia é inferior ao mínimo recomendado de <span>220 Reais </span> ou <span>130 Kwh</span>.</p>
                </div>
                <Image draggable="false" src={investimento} alt="Investimento" width={80} height={80} className={Style.modal__boxMenor__img} />
                <p className={Style.modal__boxMenor__texto}>
                  Para saber mais como investir em energia solar, entre em contato com a nossa equipe da <span>Mensh Energia Solar</span>.
                </p>
                <Link href={"/#contatos__solar"} className={Style.modal__boxMenor__btn} onClick={(e) => {
                  e.preventDefault();
                  toggleModal();
                  setConta(0);
                  setCliente('');
                  setInformacao(null);
                  Scroll.scroller.scrollTo('contatos__solar', { duration: 500, delay: 0, smooth: true });
                }}>
                  Fale Conosco
                </Link>
              </div>
            )
            :
            informacao === null ?
              (
                <div className={Style.modal__boxMaior}>
                  <div className={Style.modal__boxMaior__cabecalho}>
                    <h2 className={Style.modal__boxMaior__cabecalho__titulo}>Olá <span>{cliente}</span>!</h2>
                    <p className={Style.modal__boxMaior__cabecalho__texto}>Parabéns pelo interesse em energia solar! Sua simulação será personalizada, pois consumos acima de <span> 1260 kWh</span> exigem análise específica para atender suas necessidades com <span>precisão</span>.</p>
                  </div>

                  <Image draggable="false" src={investimento} alt="Investimento" width={80} height={80} className={Style.modal__boxMaior__img} />
                  <p className={Style.modal__boxMaior__texto}>
                  Oportunidades não esperam! Invista em energia solar e comece a economizar hoje mesmo. Entre em contato agora e garanta o futuro da sua economia! A <span>Mensh Energia Solar</span> tem uma solução personalizada para sua necessidade.
                  </p>
                  <Link href={"/#contatos__solar"} className={Style.modal__boxMaior__btn} onClick={(e) => {
                    e.preventDefault();
                    toggleModal();
                    setConta(0);
                    setCliente('');
                    setInformacao(null);
                    Scroll.scroller.scrollTo('contatos__solar', { duration: 500, delay: 0, smooth: true });
                  }}>
                    Fale Conosco
                  </Link>
                </div>
              )

              :
              (
                <div className={Style.modal__box2}>
                  <div className={Style.modal__box2__cabecalho}>
                    <h2 className={Style.modal__box2__cabecalho__titulo}>Olá <span>{cliente}</span>! Veja a baixo o resultado da simulação:</h2>
                    <p className={Style.modal__box2__cabecalho__texto}>Atualmente você paga <span>{conta.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span> em sua conta de energia.</p>
                  </div>

                  <div className={Style.modal__box2__resultado}>

                    <div className={classNames({
                      [Style.modal__box2__resultado__box]: true,
                      [Style.modal__box2__resultado__box__investimento]: true,
                    })}>
                      <Image src={investimento} alt="Investimento" width={64} height={64} className={Style.modal__box2__resultado__box__img} />
                      <h3 className={Style.modal__box2__resultado__box__titulo}>
                        Valor de Investimento:
                      </h3>
                      <p className={Style.modal__box2__resultado__box__texto}>
                        <span>De</span> {informacao?.min.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} <span>a</span> {informacao?.max.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.
                      </p>
                    </div>

                    <div className={classNames({
                      [Style.modal__box2__resultado__box]: true,
                      [Style.modal__box2__resultado__box__placas]: true,
                    })}>
                      <Image src={placas} alt="Placas" width={64} height={64} className={Style.modal__box2__resultado__box__img} />
                      <h3 className={Style.modal__box2__resultado__box__titulo}>
                        Quantidade de Placas a ser Instaladas:
                      </h3>
                      <p className={Style.modal__box2__resultado__box__texto}>
                        Serão instaladas <span>{informacao?.qtd}</span> placas.
                      </p>
                    </div>

                    <div className={classNames({
                      [Style.modal__box2__resultado__box]: true,
                      [Style.modal__box2__resultado__box__retorno]: true,
                    })}>
                      <Image src={retorno} alt="Retorno" width={64} height={64} className={Style.modal__box2__resultado__box__img} />
                      <h3 className={Style.modal__box2__resultado__box__titulo}>
                        Retorno do investimento a partir de:
                      </h3>
                      <p className={Style.modal__box2__resultado__box__texto}>
                        Aproximadamente <span>{informacao ? (Math.trunc((informacao.preco) / conta) + 1) : 0} Meses</span>.
                      </p>
                    </div>

                  </div>

                  <div className={Style.modal__box2__footer}>
                    <p className={Style.modal__box2__footer__texto}>
                      *Os resultados aqui apresentados são apenas uma estimativa e podem variar a cada projeto.
                    </p>
                    <p className={Style.modal__box2__footer__texto}>
                      Para maiores informações, entre em contato com a nossa equipe da <span>Mensh Energia Solar</span>.
                    </p>
                    <Link
                      className={Style.modal__box2__footer__btn}
                      href={"/#contatos__solar"}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleModal();
                        setConta(0);
                        setCliente('');
                        setInformacao(null);
                        Scroll.scroller.scrollTo('contatos__solar', { duration: 500, delay: 0, smooth: true });
                      }}
                    >
                      Fale Conosco
                    </Link>
                  </div>

                </div>
              )


          :
          (
            <div className={Style.modal__box1}>
              <h3 className={Style.modal__box1__titulo}>
                Descubra quanto você irá economizar com <span>Energia Solar</span>:
              </h3>

              <h4 className={Style.modal__box1__subtitulo}>
                Produza sua própria energia solar e economize. <span>Nós cuidamos de tudo</span>.
              </h4>

              <form className={Style.modal__box1__form} onSubmit={onSubmit}>
                <label htmlFor='nome' aria-label='Digite o seu nome' />
                <input
                  type='text'
                  id='nome'
                  name='nome'
                  placeholder='Nome'
                  className={Style.modal__box1__form__input}
                  required
                  onChange={handleFormChange}
                  value={form.nome === undefined ? '' : form.nome}
                />
                <label htmlFor='telefone' aria-label='Digite o seu telefone' />
                <input
                  type='text'
                  id='telefone'
                  name='telefone'
                  placeholder='Telefone'
                  className={Style.modal__box1__form__input}
                  required
                  minLength={13}
                  onChange={handleFormChange}
                  value={form.telefone === undefined ? '' : form.telefone}
                />
                <label htmlFor='CEP' aria-label='Digite o seu CEP' />
                <input
                  type='text'
                  id='CEP'
                  name='cep'
                  placeholder='CEP'
                  className={Style.modal__box1__form__input}
                  required
                  minLength={9}
                  onChange={handleFormChange}
                  value={form.cep === undefined ? '' : form.cep}
                />
                <label htmlFor='valor' aria-label='Digite o seu valor de conta' />
                <input
                  type='text'
                  id='valor'
                  name='valor'
                  placeholder='Valor da Conta De Energia'
                  className={Style.modal__box1__form__input}
                  required
                  onChange={handleFormChange}
                  value={form.valor === undefined || form.valor === 'R$ 0,00' ? '' : form.valor}
                />
                {
                  !(mensagem === '') && (
                    <p className={Style.contatos__content__form__info}>{mensagem}</p>
                  )
                }
                <div className={Style.modal__box1__form__btnBox}>
                  <button
                    className={Style.modal__box1__form__btnBox__btn}
                    type='submit'
                  >
                    Confirmar
                  </button>
                  <p className={Style.modal__box1__form__btnBox__texto}>
                    *Confirmo que, ao realizar a simulação, autorizo o contato da equipe comercial da Mensch Energia Solar por ligação telefônica ou mensagem via WhatsApp.
                  </p>
                </div>
              </form>
            </div>
          )



        }



      </Modal>
    </section >
  )
};

export default CTASolar;
