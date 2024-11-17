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
        <h2 className={Style.receitas__titulo}>Receitas</h2>

        <div className={Style.receitas__tipos}>
          {tipos.map(({ id, imagem, nome }: Tipo) => (
            <div 
              key={id} 
              onClick={() => { setIdTipo(id); toggleModal(); }}
              className={Style.receitas__tipos__item}
            >
              <div className={Style.receitas__tipos__item__overlay}/>
              <Image 
                src={imagem} 
                alt={nome} 
                width={80} 
                height={80} 
                className={Style.receitas__tipos__item__img}
              />
              <h3
                className={Style.receitas__tipos__item__nome}
              >
                {nome}
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
                receitas.filter((dado): dado is Receita => dado.tipo !== undefined && dado.tipo === idTipo).map(({image, titulo, id}, index) => (
                  <div key={index} onClick={() => {toggleModalReceita(); setIdReceita(id);}}>
                    <Image src={image} alt={titulo} width={80} height={80} />
                    <h3>{titulo}</h3>
                  </div>
                ))
              }
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
                receitas.filter((dado): dado is Receita => dado.id !== undefined && dado.id === idReceita).map(({titulo, subtitulo, id}) => (
                  <div key={id}>
                    <h1>{titulo}</h1>
                    <span>{subtitulo}</span>
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
