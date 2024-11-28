'use client';
import Image from 'next/image';
import Style from './Camila.module.scss';
import foto from './assets/Camila.png';
import Link from 'next/link';
import Animation from './Animation';
import Scroll from 'react-scroll';


const Camila = () => {

  return (
    <section className={Style.consultora} aria-label='Sobre a Mensch Health'>
      <div className={Style.consultora__content}>
        <div className={Style.consultora__content__box} >
          <h2 className={Style.consultora__content__box__titulo}>
            Mensch Health
          </h2>

          <p className={Style.consultora__content__box__paragrafo}>
            a marca que torna saúde e bem-estar pilares fundamentais.
          </p>
          <p className={Style.consultora__content__box__paragrafo}>
            Com foco em alimentação saudável, incentivo à atividade física e cuidados com o corpo e a mente, oferece produtos e soluções que aliam tempo e qualidade, ajudando você a conquistar mais energia para o que realmente importa.
          </p>
          <p className={Style.consultora__content__box__paragrafo}>
            Nossa missão é simplificar sua jornada rumo a uma vida mais saudável e plena, promovendo equilíbrio, vitalidade e escolhas inteligentes.
          </p>
          <p className={Style.consultora__content__box__paragrafo}>
            <span>Mensch Health</span>, viva com mais saúde e qualidade todos os dias!
          </p>

          <div className={Style.consultora__content__box__btns}>
            <Link
              href={'#contatos__health'}
              className={Style.consultora__content__box__btns__btn}
              onClick={(e) => {
                e.preventDefault();
                Scroll.scroller.scrollTo('contatos__health', { duration: 500, delay: 0, smooth: true });
              }

              }
            >
              Agendar uma Visita
            </Link>
          </div>
        </div>
        <Image src={foto} alt='Camila' className={Style.consultora__content__foto} />
      </div>
      <Animation />
    </section>
  )
};

export default Camila;
