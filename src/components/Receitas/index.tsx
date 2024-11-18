import Style from "./Receitas.module.scss";
import tipos from "@/util/tipos.json";
import receitas from '@/util/receitas.json';
import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";
import { isUpperCase } from "@/util/validation";

import share from './assets/share.svg';

import timer from './assets/timer.svg';
import nivel from './assets/nivel.svg';
import serve from './assets/serve.svg';
import classNames from "classnames";
import Link from "next/link";

interface Tipo {
  id: number;
  nome: string;
  imagem: string;
}

interface Receita {
  id: number;
  titulo: string;
  subtitulo: string;
  image: string;
  tempo_de_preparo: number;
  dificuldade: number;
  porcoes: number;
  Ingredientes: string[];
  preparacao: string[];
  tipo: number;
}

const Receitas = () => {
  const [openReceitas, setOpenReceitas] = useState<boolean>(false);
  const [openReceita, setOpenReceita] = useState<boolean>(false);
  const [idTipo, setIdTipo] = useState<number>(0);
  const [idReceita, setIdReceita] = useState<number>(0);

  const toggleModal = () => {
    setOpenReceitas(!openReceitas);
  };

  const toggleModalReceita = () => {
    setOpenReceita(!openReceita);
  };

  return (
    <>
      <section className={Style.receitas}>
        <h2 className={Style.receitas__titulo}>
          Receitas para uma Alimentação Equilibrada
        </h2>
        <p className={Style.receitas__texto}>
          Aqui você encontrará receitas saudáveis e fáceis de fazer, para que você possa desfrutar de uma alimentação saudável e deliciosa.
        </p>

        <div className={Style.receitas__tipos}>
          {tipos.map(({ id, imagem, nome }: Tipo) => (
            <div
              key={id}
              onClick={() => { setIdTipo(id); toggleModal();}}
              className={Style.receitas__tipos__item}
            >
              <div className={Style.receitas__tipos__item__overlay} />
              <Image
                src={imagem}
                alt={nome}
                width={280}
                height={280}
                className={Style.receitas__tipos__item__img}
              />
              <h3
                className={Style.receitas__tipos__item__nome}
              >
                {nome.toLowerCase()}
              </h3>
            </div>
          ))}
        </div>
      </section>
      <Modal
        contentLabel="ModalReceitas"
        isOpen={openReceitas}
        ariaHideApp={false}
        onRequestClose={toggleModal}
        className={Style.modal}
        style={{
          overlay: {
            backgroundColor: "rgba(26, 34, 40, 0.8)",
            zIndex: "30",
          },
        }}
      >
        {
          !(idTipo === 0) && (
            <>
              <div className={Style.modal__menu}>
                {
                  tipos.filter((dado): dado is Tipo => dado.id !== undefined && dado.id === idTipo).map(({ imagem, nome, id }) => (
                    <div className={Style.modal__menu__cabecalho} key={id}>
                      <div className={Style.modal__menu__cabecalho__overlay} />
                      <Image src={imagem} alt={nome} className={Style.modal__menu__cabecalho__img} width={1080} height={1080} />
                      <div className={Style.modal__menu__cabecalho__box}>
                        <button className={Style.modal__menu__cabecalho__box__close} onClick={() => { setIdTipo(0); toggleModal(); }}>
                          X
                        </button>
                        <h2 className={Style.modal__menu__cabecalho__box__titulo}>
                          {nome}
                        </h2>
                      </div>
                    </div>
                  ))
                }
                <div className={Style.modal__menu__container}>
                  <div className={Style.modal__menu__container__box}>
                    {
                      receitas.filter((dado): dado is Receita => dado.tipo !== undefined && dado.tipo === idTipo).map(({ image, titulo, id }, index) => (
                        <div
                          key={index}
                          onClick={() => { toggleModalReceita(); setIdReceita(id); }}
                          className={Style.modal__menu__container__box__item}
                        >
                          <Image
                            src={image}
                            alt={titulo}
                            width={500}
                            height={500}
                            className={Style.modal__menu__container__box__item__img}
                          />
                          <h3
                            className={Style.modal__menu__container__box__item__titulo}
                          >{titulo.toLowerCase()}</h3>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </>
          )
        }
      </Modal>
      <Modal
        contentLabel="ModalReceita"
        isOpen={openReceita}
        ariaHideApp={false}
        className={Style.modal}
        style={{
          overlay: {
            backgroundColor: "rgba(26, 34, 40, 0.8)",
            zIndex: "31",
          },
        }}
      >
        {
          idReceita !== 0 && (
            <>
              {
                receitas.filter((dado): dado is Receita => dado.id !== undefined && dado.id === idReceita).map(({
                  titulo,
                  subtitulo,
                  image,
                  id,
                  tempo_de_preparo,
                  dificuldade,
                  porcoes,
                  Ingredientes,
                  preparacao
                }) => (
                  <div key={id} className={Style.modal__receita}>
                    <div className={Style.modal__receita__cabecalho}>
                      <div className={Style.modal__receita__cabecalho__overlay} ></div>
                      <Image src={image} alt={titulo} className={Style.modal__receita__cabecalho__img} width={1920} height={1080} />
                      <div className={Style.modal__receita__cabecalho__box}>
                        <h2 className={Style.modal__receita__cabecalho__box__titulo}>{titulo.toLowerCase()}</h2>
                        <h3 className={Style.modal__receita__cabecalho__box__subtitulo}>{subtitulo.toLowerCase()}</h3>
                        <button className={Style.modal__receita__cabecalho__box__close} onClick={() => { toggleModalReceita(); setIdReceita(0); }}>
                          X
                        </button>
                      </div>
                    </div>

                    <div className={Style.modal__receita__indice}>
                      <div className={classNames({
                        [Style.modal__receita__indice__item]: true,
                        [Style.modal__receita__indice__item__tempo]: true
                      })}>
                        <Image src={timer} alt="icone de tempo" width={24} height={24} />
                        <p className={Style.modal__receita__indice__item__texto} >
                          {tempo_de_preparo} min
                        </p>
                      </div>
                      <div className={classNames({
                        [Style.modal__receita__indice__item]: true,
                        [Style.modal__receita__indice__item__nivel]: true
                      })}>
                        <Image src={nivel} alt="icone de nível" width={24} height={24} />
                        <p className={Style.modal__receita__indice__item__texto}>
                          Nível: {dificuldade}
                        </p>
                      </div>
                      <div className={classNames({
                        [Style.modal__receita__indice__item]: true,
                        [Style.modal__receita__indice__item__porcoes]: true
                      })}>
                        <Image src={serve} alt="icone de porções" width={24} height={24} />
                        <p className={Style.modal__receita__indice__item__texto}>
                          Porções: {porcoes}
                        </p>
                      </div>
                    </div>

                    <div className={Style.modal__receita__conteudo}>
                      <div className={Style.modal__receita__conteudo__box}>
                        <h3
                          className={Style.modal__receita__conteudo__box__titulo}>
                          Ingredientes
                        </h3>
                        <ol
                          key={id}
                          className={Style.modal__receita__conteudo__box__ingredientes}>
                          {
                            Ingredientes.map((str: string) => (
                              <>
                                {
                                  isUpperCase(str) ? (
                                    <h4
                                      className={Style.modal__receita__conteudo__box__ingredientes__item__cat}> {str}</h4>
                                  ) : (
                                    <li
                                      className={Style.modal__receita__conteudo__box__ingredientes__item}>
                                      <span>◆</span> {str}</li>
                                  )
                                }
                              </>
                            ))
                          }
                        </ol>
                        <h3
                          className={Style.modal__receita__conteudo__box__titulo}>
                          Preparação
                        </h3>
                        <ul
                          className={Style.modal__receita__conteudo__box__preparo}>
                          {
                            preparacao.map((str: string, index) => (
                              <li
                                key={index}
                                className={Style.modal__receita__conteudo__box__preparo__item}
                              >{str}</li>
                            ))
                          }
                        </ul>
                      </div>
                          <div className={Style.modal__receita__conteudo__share}>
                            <p className={Style.modal__receita__conteudo__share__chamada}>
                              Eai como ficou a sua receita? Que tal postar no Instagram e marcar a gente? <Link href={'https://www.instagram.com/mensch.health/'}
                                target="_blank"
                                rel="noreferrer"
                                title="Compartilhe no Instagram"
                              >@mensch.health</Link>
                            </p>
                            <div className={Style.modal__receita__conteudo__share__botao}> 
                              <p className={Style.modal__receita__conteudo__share__botao__texto}> 
                                Quem ama compartilha!
                              </p>
                              <Link 
                                href={`https://wa.me/?text=
                                    Olá, gostaria de compartilhar com você essa deliciosa receita de ${titulo.toLowerCase()} que eu encontrei no site Mensch Health. \n\n
                                    **Tempo de preparo: ${tempo_de_preparo} min** \n
                                    **Dificuldade: ${dificuldade}** \n
                                   **Porcoes: ${porcoes}**\n
                                    Ingredientes: ${Ingredientes.join(', \n ')}
                                    Preparação: ${preparacao.join(', \n ')}
                                    #MenshHealth
                                    Veja essa receita e outras delicias em https://www.grupomensch.com.br/health
                                    E quando fizer a receita me chame😋
                                  `} 
                                target="_blank" 
                                rel="noreferrer" 
                                title="Compartilhe no Whatsapp"
                                className={Style.modal__receita__conteudo__share__botao__link}
                              >
                                <Image src={share} alt="share" width={24} className={Style.modal__receita__conteudo__share__botao__link__img}/> 
                              </Link>
                            </div>
                          </div>
                    </div>
                  </div>
                ))
              }

            </>
          )

        }

      </Modal>
    </>
  );
};

export default Receitas;
