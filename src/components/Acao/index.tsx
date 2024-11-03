'use client';

import Style from './Acao.module.scss';
import Campanhas from '../Campanhas';


const Acao = () => {

  return (
    <section className={Style.acao} aria-label='Ações sociais promovidas pelo Grupo Mensch'>
      <div className={Style.acao__head}>
        <h1 className={Style.acao__head__titulo}><span>Impactando Vidas</span>, esse é o nosso Compromisso de <span>Servir</span> e <span>Transformar</span>.</h1>
        <p className={Style.acao__head__texto}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laboriosam! Distinctio mollitia voluptate iure temporibus, ullam exercitationem voluptatem, amet quasi repellat, esse obcaecati libero ratione aliquid? Placeat dolores numquam corporis?</p>
      </div>
        <Campanhas />
    </section >
  )
};

export default Acao;
