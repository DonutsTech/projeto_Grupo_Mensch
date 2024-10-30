'use client';

import Contatos from '../Contatos';
import Essencia from '../Essencia';
import Marcas from '../Marcas';
import Prova from '../Prova';
import Social from '../Social';
import Style from './Main.module.scss';


const Main = () => {

  return (
    <main className={Style.main}>
      <Essencia />
      <Marcas />
      <Prova />
      <Social />
      <Contatos />
    </main>
  )
};

export default Main;