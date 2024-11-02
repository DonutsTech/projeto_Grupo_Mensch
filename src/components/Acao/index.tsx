'use client';

import Image from 'next/image';
import Style from './Acao.module.scss';
import dagua from './assets/marca.svg';
import simbolo from './assets/simbolo_base.svg';

import footbol01 from './assets/footbol01.jpg';


const Acao = () => {

  return (
    <section className={Style.acao} aria-label='Ações sociais promovidas pelo Grupo Mensch'>
      <div className={Style.acao__head}>
        <h1 className={Style.acao__head__titulo}><span>Transformando Vidas</span>, esse é o nosso Compromisso de <span>Servir</span> e <span>Impactar</span>.</h1>
        <p className={Style.acao__head__texto}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laboriosam! Distinctio mollitia voluptate iure temporibus, ullam exercitationem voluptatem, amet quasi repellat, esse obcaecati libero ratione aliquid? Placeat dolores numquam corporis?</p>
      </div>
      <div className={Style.acao__container}>

        <div className={Style.acao__container__slide}>

          <div className={Style.acao__container__slide__imagemBox}>
            <Image src={footbol01} alt='foto' className={Style.acao__container__slide__imagemBox__foto} />
            <Image src={simbolo} alt='simbolo' className={Style.acao__container__slide__imagemBox__simbolo} />
          </div>

          <div className={Style.acao__container__slide__textBox}>
            <p className={Style.acao__container__slide__textBox__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laboriosam! Distinctio mollitia voluptate iure temporibus, ullam exercitationem voluptatem, amet quasi repellat, esse obcaecati libero ratione aliquid? Placeat dolores numquam corporis?</p>
          </div>
        </div>
      </div>
      <Image src={dagua} alt='Marca dagua' className={Style.acao__bg} />
    </section >
  )
};

export default Acao;
