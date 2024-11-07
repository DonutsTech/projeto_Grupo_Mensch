"use client";

import Image from 'next/image';
import Style from './EnergiaSolar.module.scss';

import img1 from './assets/casa.png';
import FAQEnergia from '../FAQEnergia';
import Link from 'next/link';

const EnergiaSolar = () => {

  return (
    <section className={Style.section} aria-label='Tudo sobre a Mensch Energia Solar' id='energia_solar'>
      <div className={Style.section__argumento}>
        <div className={Style.section__argumento__box1}>
          <div className={Style.section__argumento__box1__textos}>
            <h2 className={Style.section__argumento__box1__textos__titulo}>
              A Fonte de <span>Energia</span> do <span>Futuro</span>.
            </h2>
            <h3 className={Style.section__argumento__box1__textos__subtitulo}>Limpa, Renovável e Econômica</h3>
            <p className={Style.section__argumento__box1__textos__texto}>
              A energia solar converte luz em eletricidade, reduzindo contas de energia e impacto ambiental. <br />É uma opção viável para residências, empresas e fazendas, proporcionando independência e economia a longo prazo.
            </p>
            <p className={Style.section__argumento__box1__textos__texto}>
              Com a energia solar reduz contas de energia em até 80% e aumenta o valor da sua propriedade. O retorno sobre o investimento é alcançado em até 10 anos, liberando recursos para investir em outras áreas do seu negócio ou família.
            </p>
          </div>
          <Image src={img1} alt='Casa com energia solar' className={Style.section__argumento__box1__img} />
        </div>
        <div className={Style.section__argumento__box2}>
          <div className={Style.section__argumento__box2__textos}>
            <h2 className={Style.section__argumento__box2__textos__titulo}>
              Respostas para suas Perguntas
            </h2>
            <p className={Style.section__argumento__box2__textos__texto}>
              A Mensch Energia Solar está comprometida em fornecer soluções de energia solar claras e acessíveis. Confira nossas respostas para as perguntas mais frequentes abaixo.
            </p>
          </div>
        </div>
        <FAQEnergia />
        <div className={Style.section__argumento__chamada}>
          <p className={Style.section__argumento__chamada__texto}>
            Tem mais perguntas? Não hesite em entrar em contato! Nossa equipe está pronta para ajudar e fornecer soluções personalizadas
          </p>
          <Link className={Style.section__argumento__chamada__btn} href={'/energiasolar'}>
            Falar conosco
          </Link>
        </div>
      </div>

    </section>
  )
};

export default EnergiaSolar;
