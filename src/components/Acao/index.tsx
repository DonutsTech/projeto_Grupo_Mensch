'use client';

import Style from './Acao.module.scss';
import Campanhas from '../Campanhas';


const Acao = () => {

  return (
    <section className={Style.acao} aria-label='Ações sociais promovidas pelo Grupo Mensch'>
      <div className={Style.acao__head}>
        <h1 className={Style.acao__head__titulo}><span>Impactando Vidas</span>, esse é o nosso Compromisso de <span>Servir</span> e <span>Transformar</span>.</h1>
        <p className={Style.acao__head__texto}>
          Na Mensch, somos a diferença. Desafiamos o mundo
          dos negócios, mostrando que nenhum desafio para um
          propósito. Confiam os nas pessoas, na vida e que,
          servindo, transformaremos o mundo. Nossa jornada
          é honrar a Deus através do trabalho.
        </p>
      </div>
      <Campanhas />
    </section >
  )
};

export default Acao;
