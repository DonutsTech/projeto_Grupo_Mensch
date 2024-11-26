"use client";

import Image from "next/image";
import bg from './assets/placa_solar.jpeg';

// import perfil from "./assets/perfil_corte.jpg";
import aspas from "./assets/aspas.svg";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import Style from "./ProvaSolar.module.scss";

import oleir from './assets/Oleir.png';
import rita from './assets/Rita.png';
import tulio from './assets/Tulio.png';
import tocha from './assets/Tocha.png';
import tancredo from './assets/Tancredo.png';
const ProvaSolar = () => {
  const coments = [
    {
      id: 1,
      nome: "Oleir Borges",
      foto: oleir,
      texto:
        "Sou empresário e cliente da Mensch há anos. A empresa entrega qualidade e um pós-venda excepcional, algo essencial hoje. Graças a eles, alcançamos economia máxima na energia. Recomendo com confiança!",
      link: "https://www.instagram.com/oleir/",
    },
    {
      id: 2,
      nome: "Rita Bertoni",
      foto: rita,
      texto:
        "Sou empresária e produtora rural. Conheci a Mensch por indicação de um sócio após buscar várias empresas que não transmitiam segurança. Contratei para minha residência e o serviço foi claro e transparente.",
      link: "https://www.instagram.com/bertoni47/",
    },
    {
      id: 3,
      nome: "Tulio Miguel",
      foto: tulio,
      texto:
        "Tenho 2 projetos solares com a Mensch, para casa e propriedade rural. Equipe atenciosa, suporte incrível e técnicos qualificados. Confio desde o início e recomendo a qualquer pessoa que precise!",
      link: "https://www.instagram.com/tulio_rancho_minas_goias/",
    },
    {
      id: 4,
      nome: "Tocha",
      foto: tocha,
      texto:
        "Em 2021, fiz parceria com a Mensch para reduzir o consumo de energia. Após 4 anos, coloquei mais placas. Empresa consolidada, honesta e sempre atenciosa. Só tenho a agradecer e recomendo.",
      link: "https://www.instagram.com/barbeariaseutocha/",
    },
    {
      id: 5,
      nome: "Tancredo",
      foto: tancredo,
      texto:
        "Como idealizador do projeto Van da Alegria, agradeço à Mensch pelo apoio à minha usina solar. Sempre me ajudam no que preciso. Empresa confiável, profissional e parceira. Recomendo totalmente!",
      link: "https://www.instagram.com/projetovandaalegria/",
    },
  ];

  return (
    <section className={Style.prova} aria-label="Provas Sociais">
      <h2 className={Style.prova__titulo}>Nosso Sucesso!</h2>
      <h3 className={Style.prova__subtitulo}>
        Clientes que são prova do nosso compromisso com você.
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
        {/* <p className={Style.prova__textos__paragrafo}>
        ◆ Empresa mais bem avaliada no Google da nossa região.
        </p> */}
        <p className={Style.prova__textos__paragrafo}>
        ◆ 100% dos clientes da Mensch Energia Solar estão economizando muito dinheiro!
        </p>
      </div>
      <Image src={bg} alt="Placa Solar" className={Style.prova__bg} />
    </section>
  );
};

export default ProvaSolar;
