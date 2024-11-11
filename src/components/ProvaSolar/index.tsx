"use client";

import Image from "next/image";
import bg from './assets/placa_solar.jpeg';

import perfil from "./assets/perfil_corte.jpg";
import aspas from "./assets/aspas.svg";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import Style from "./ProvaSolar.module.scss";

const ProvaSolar = () => {
  const coments = [
    {
      id: 1,
      nome: "Thalizim Batata",
      foto: perfil,
      texto:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A eos veritatis harum laboriosam inventore, voluptate sequi?  Omnis doloremque magni a nemo ab temporibus, commodi excepturi consequuntur illo.",
      link: "https://www.instagram.com/grupo.mensch/",
    },
    {
      id: 2,
      nome: "jonh Doo",
      foto: perfil,
      texto:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A eos veritatis harum laboriosam inventore, voluptate sequi?  Omnis doloremque magni a nemo ab temporibus, commodi excepturi consequuntur illo.",
      link: "https://www.instagram.com/grupo.mensch/",
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
      <h2 className={Style.prova__titulo}>Nosso Sucesso!</h2>
      <h3 className={Style.prova__subtitulo}>
        Nossos clientes comprovam nosso compromisso com você.
      </h3>
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
            <SwiperSlide key={coment.id} style={{ width: '290px', height: '550px', display: "flex", alignItems: 'center' }}>
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
      <div className={Style.prova__textos}>
        <p className={Style.prova__textos__paragrafo}>
        ◆ Empresa mais bem avaliada no Google da nossa região.
        </p>
        <p className={Style.prova__textos__paragrafo}>
        ◆ 100% dos clientes da Mensch Energia Solar estão economizando muito dinheiro!
        </p>
      </div>
      <Image src={bg} alt="Placa Solar" className={Style.prova__bg} />
    </section>
  );
};

export default ProvaSolar;
