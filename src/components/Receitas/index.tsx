import Style from "./Receitas.module.scss";
import tipos from "@/util/tipos.json";
import receitas from '@/util/receitas.json';
import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";

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
              onClick={() => { setIdTipo(id); toggleModal(); console.log(tipos[id].imagem) }}
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
              {
                tipos.filter((dado): dado is Tipo => dado.id !== undefined && dado.id === idTipo).map(({ imagem, nome, id }) => (
                  <div className={Style.modal__cabecalho} key={id}>
                    <div className={Style.modal__cabecalho__overlay} />
                    <Image src={imagem} alt={nome} className={Style.modal__cabecalho__img} width={1080} height={1080} />
                    <button className={Style.modal__cabecalho__close} onClick={() => { setIdTipo(0); toggleModal(); }}>
                      X
                    </button>
                    <h2 className={Style.modal__cabecalho__titulo}>
                      {nome}
                    </h2>
                  </div>
                ))
              }
              <div className={Style.modal__container}>
                {
                  receitas.filter((dado): dado is Receita => dado.tipo !== undefined && dado.tipo === idTipo).map(({ image, titulo, id }, index) => (
                    <div
                      key={index}
                      onClick={() => { toggleModalReceita(); setIdReceita(id); }}
                      className={Style.modal__container__item}
                    >
                      <Image
                        src={image}
                        alt={titulo}
                        width={500}
                        height={500}
                        className={Style.modal__container__item__img}
                      />
                      <h3
                        className={Style.modal__container__item__titulo}
                      >{titulo.toLowerCase()}</h3>
                    </div>
                  ))
                }
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
                  porcoes
                }) => (
                  <div key={id} className={Style.modal__receita}>
                    <div className={Style.modal__receita__cabecalho}>
                      <div className={Style.modal__receita__cabecalho__overlay} />
                      <Image src={image} alt={titulo} className={Style.modal__receita__cabecalho__img} width={1920} height={1080} />
                      <h2 className={Style.modal__receita__cabecalho__titulo}>{titulo.toLowerCase()}</h2>
                      <h3 className={Style.modal__receita__cabecalho__subtitulo}>{subtitulo.toLowerCase()}</h3>
                      <button className={Style.modal__receita__cabecalho__close} onClick={() => { toggleModalReceita(); setIdReceita(0); }}>
                        X
                      </button>
                    </div>
                    <div className={Style.modal__receita__indice}>
                      <div className={Style.modal__receita__indice__item}>
                        <p className={Style.modal__receita__indice__item__texto} >
                          {tempo_de_preparo} min
                        </p>
                      </div>
                      <div className={Style.modal__receita__indice__item}>
                        <p className={Style.modal__receita__indice__item__texto}>
                          Nível: {dificuldade}
                        </p>
                      </div>
                      <div className={Style.modal__receita__indice__item}>
                        <p className={Style.modal__receita__indice__item__texto}>
                          Poções: {porcoes}
                        </p>
                      </div>
                    </div>
                    <div></div>
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
