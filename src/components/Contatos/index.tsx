'use client';

import Style from './Contatos.module.scss';

const Contatos = () => {

  return (
    <section className={Style.contatos} id='contatos__mensch' aria-label='Contatos do Grupo Mensch'>
      <h2 className={Style.contatos__title}>
        Fale Conosco
      </h2>
    </section>
  )
};

export default Contatos;
