'use client';

import Slider from '../Slider';
import Style from './Marcas.module.scss';

const Marcas = () => {

  return (
    <section className={Style.marcas} aria-label='Conheça as marcas do Grupo Mensch'>
      <div className={Style.marcas__detalhe} />
      <h2 className={Style.marcas__titulo}>Conheça as marcas do Grupo Mensch</h2>
      <div className={Style.marcas__slide} >
        <Slider />
      </div>
      <div className={Style.marcas__detalheBottom} />
    </section>
  )
}

export default Marcas;
