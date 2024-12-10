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
          A marca nasceu com o propósito de transformar a qualidade de vida das pessoas, trazendo saúde e bem-estar mesmo em meio à correria do dia a dia. Por meio dos produtos Royal Prestige, oferecemos soluções que tornam a alimentação mais nutritiva e equilibrada.
          </p>

          <p className={Style.consultora__content__box__paragrafo}>
          Estudos comprovam que o preparo em nossas panelas preserva mais nutrientes, como no caso do brócolis, promovendo refeições mais saudáveis. Mais do que isso, a Mensch Health inspira mudanças positivas, como a prática de exercícios físicos e a adoção de hábitos que contribuem para uma vida mais leve.
          </p>

          <p className={Style.consultora__content__box__paragrafo}>
          Prática e saudável, nossa missão é incentivar a busca por uma rotina que priorize o bem-estar. Viva melhor, com mais disposição e equilíbrio!
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
