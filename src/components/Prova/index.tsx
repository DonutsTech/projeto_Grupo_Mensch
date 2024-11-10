"use client";

import Image from "next/image";
import bg from "./assets/prova_img.png";

import perfil from "./assets/perfil_corte.jpg";
import aspas from "./assets/aspas.svg";
import Link from "next/link";
import Style from "./Prova.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

import thales from './assets/thales_alves.png';

const Prova = () => {
  const coments = [
    {
      id: 1,
      nome: "jonh Doo",
      foto: perfil,
      texto:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A eos veritatis harum laboriosam inventore, voluptate sequi?  Omnis doloremque magni a nemo ab temporibus, commodi excepturi consequuntur illo.",
      link: "https://www.instagram.com/grupo.mensch/",
    },
    {
      id: 2,
      nome: "Thales Alves",
      foto: thales,
      texto:
        "Sou grato por fazer parte de uma jornada que valoriza o servir e transformar. Aqui, a troca de experiências e o cuidado com as pessoas fazem da nossa marca um verdadeiro exemplo de humanidade e propósito.",
      link: "https://www.instagram.com/thalesago/",
    },
    {
      id: 3,
      nome: "jonh Doo",
      foto: perfil,
      texto:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A eos veritatis harum laboriosam inventore, voluptate sequi?  Omnis doloremque magni a nemo ab temporibus, commodi excepturi consequuntur illo.",
      link: "https://www.instagram.com/grupo.mensch/",
    },
    {
      id: 4,
      nome: "jonh Doo",
      foto: perfil,
      texto:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A eos veritatis harum laboriosam inventore, voluptate sequi?  Omnis doloremque magni a nemo ab temporibus, commodi excepturi consequuntur illo.",
      link: "https://www.instagram.com/grupo.mensch/",
    },
    {
      id: 5,
      nome: "jonh Doo",
      foto: perfil,
      texto:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A eos veritatis harum laboriosam inventore, voluptate sequi?  Omnis doloremque magni a nemo ab temporibus, commodi excepturi consequuntur illo.",
      link: "https://www.instagram.com/grupo.mensch/",
    },
  ];

  return (
    <section className={Style.prova} aria-label="Provas Sociais">
      <h2 className={Style.prova__titulo}>
        Veja o que nossos <span>parceiros</span> têm a dizer sobre nossa{" "}
        <span>jornada</span>.
      </h2>
      <div className={Style.prova__content}>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className={Style.swiper}
        >
          {coments.map((coment) => (
            <SwiperSlide key={coment.id} style={{width: '290px', height: '550px', display: "flex", alignItems: 'center'}}>
              <div className={Style.prova__content__card}>
                <div className={Style.prova__content__card__foto}>
                  <Image
                    src={coment.foto}
                    alt={`foto de ${coment.nome}`}
                    className={Style.prova__content__card__foto__img}
                  />
                </div>
                <p className={Style.prova__content__card__text}>
                  {coment.texto}
                </p>
                <Link
                  href={coment.link}
                  className={Style.prova__content__card__link}
                  target="_blank"
                  rel="noopener"
                  title={`Acesse o perfil de ${coment.nome}`}
                >
                  {coment.nome}
                </Link>
                <Image
                  src={aspas}
                  alt="aspas"
                  className={Style.prova__content__card__aspas1}
                />
                <Image
                  src={aspas}
                  alt="aspas"
                  className={Style.prova__content__card__aspas2}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Image src={bg} alt="Provas Sociais" className={Style.prova__bg} />
    </section>
  );
};

export default Prova;
