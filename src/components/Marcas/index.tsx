'use client';

import Slider from '../Slider';
import Style from './Marcas.module.scss';

const Marcas = () => {

  return (
    <section className={Style.marcas} aria-label='Conheça as marcas do Grupo Mensch' id='marcas'>
      <h2 className={Style.marcas__titulo}>Conheça as marcas do <span>Grupo Mensch</span>.</h2>
      <div className={Style.marcas__slide} >
        <Slider />
      </div>
    </section>
  )
}

export default Marcas;
