"use client";

import Image from "next/image";
import bg from './assets/vida_saudavel.jpg';

// import perfil from "./assets/perfil_corte.jpg";
import aspas from "./assets/aspas.svg";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import Style from "./ProvaHealth.module.scss";

import marilande from './assets/Marilande.png';
import angelica from './assets/Angelica.png';
import alisson from "./assets/Alisson.png";
import aline from "./assets/Aline.png";
import elisafan from "./assets/Elisafan.png";

const ProvaHealth = () => {
  const coments = [
    {
      id: 1,
      nome: "Marilande Guimaraes",
      foto: marilande,
      texto:
        "Sou de Gurinhatã, adquiri as panelas da Royal Prestige e estou adorando a experiência. O sabor dos alimentos é outro, simplesmente maravilhoso. Estou super satisfeita com minha compra!",
      link: "https://www.instagram.com/marilandeguimaraes/",
    },
    {
      id: 2,
      nome: "Angélica Alfaiate",
      foto: angelica,
      texto:
        "Com um sistema de qualidade e saúde, consigo preparar marmitas semanais e comida saudável. Após o nascimento do meu filho, cuidar da nossa alimentação tornou-se ainda mais prioridade.",
      link: "https://www.instagram.com/angelicaalfaiate/",
    },
    {
      id: 3,
      nome: "Alisson Candido",
      foto: alisson,
      texto:
        "Fui muito bem atendido pela Camilla. As panelas reduziram meu tempo na cozinha pela metade, trazendo mais praticidade, saúde e melhor aproveitamento dos alimentos. Super recomendo!",
      link: "https://www.instagram.com/alisson_candidop/",
    },
    {
      id: 4,
      nome: "Aline Paschoal",
      foto: aline,
      texto:
        "Atendimento impecável! As panelas transformaram nossa rotina alimentar com mais sabor e saúde. Agradecemos a oportunidade e recomendamos para quem busca qualidade e bem-estar.",
      link: "https://www.instagram.com/alinepaschoalfrancooficial/",
    },
    {
      id: 5,
      nome: "Elisafan",
      foto: elisafan,
      texto:
        "Estou muito satisfeito com a mudança na minha alimentação, consigo sentir mais o sabor dos alimentos. Gratidão à Camilla pela dedicação incrível e ao ótimo pós-venda. Indico e confio totalmente!",
      link: "https://www.instagram.com/elisafan_ra/",
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
    {/* <div className={Style.prova__textos}>
        <p className={Style.prova__textos__paragrafo}>
        ◆ Empresa mais bem avaliada no Google da nossa região.
        </p>
        <p className={Style.prova__textos__paragrafo}>
        ◆ 100% dos clientes da Mensch Energia Solar estão economizando muito dinheiro!
        </p>
      </div> */}
    <Image draggable="false" src={bg} alt="Placa Solar" className={Style.prova__bg} />
  </section>
);
};

export default ProvaHealth;
