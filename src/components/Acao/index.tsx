'use client';

import Style from './Acao.module.scss';
import Campanhas from '../Campanhas';


const Acao = () => {

  return (
    <section className={Style.acao} aria-label='Ações sociais promovidas pelo Grupo Mensch'>
      <div className={Style.acao__head}>
        <h1 className={Style.acao__head__titulo}><span>Impactando Vidas</span>, esse é o nosso Compromisso de <span>Servir</span> e <span>Transformar</span>.</h1>
        <p className={Style.acao__head__texto}>
          Na Mensch, nosso compromisso é Impactar Vidas. Servir e transformar é nossa missão. Acreditamos que, ao honrar a Deus em cada ação, criamos um legado de respeito, compaixão e impacto positivo, contribuindo para um mundo mais humano.
        </p>
      </div>
      <Campanhas />
    </section >
  )
};

export default Acao;
