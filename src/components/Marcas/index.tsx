'use client';

import Style from './Marcas.module.scss';

const Marcas = () => {

  return (
    <section className={Style.marcas} aria-label='Conheça as marcas do Grupo Mensch'>
      <div className={Style.marcas__detalhe} />
    </section>
  )
}

export default Marcas;
